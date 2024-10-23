import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Comment } from "../models/comment.model.js";

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        return res
        .status(500)
        .json(new ApiError(500, "Something went wrong while generating referesh and access token"))
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const { fullName, email, username, password } = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        return res
        .status(400)
        .json( new ApiError(400, "All fields are required"));
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        return res
        .status(409)
        .json( new ApiError(409, "User with email or username already exists"));
    }
    //console.log(req.files);
    let avatarLocalPath;
    if(req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0){
        avatarLocalPath = req.files.avatar[0].path;
    }
    const avatar = avatarLocalPath ? await uploadOnCloudinary(avatarLocalPath,{ secure: true }) : null;
    
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }
    const coverImage = coverImageLocalPath ? await uploadOnCloudinary(coverImageLocalPath,{ secure: true }) : null;
    

    // if (!avatar) {
    //     return res
    //     .status(400)
    //     .json( new ApiError(400, "Avatar file is required"));
    // }


    const user = await User.create({
        fullName,
        avatar: avatar?.secure_url || "",
        coverImage: coverImage?.secure_url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)

    if (!createdUser) {
        return res
        .status(500)
        .json( new ApiError(500, "Something went wrong while registering the user"));
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            {
                user:createdUser,accessToken,refreshToken
            }, 
            "User registered Successfully")
    )

})

const loginUser = asyncHandler(async (req, res) => {
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie
    // console.log("hello")
    const {username, password } = req.body
    // console.log(username);

    if (!username && !email) {
        return res
        .status(400)
        .json( new ApiError(400, "username or email is required"));
    }

    let searchCriteria = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (username) {
        if (emailRegex.test(username)) {
            searchCriteria.email = username;
        } else {
            searchCriteria.username = username;
        }
    } else if (email) {
        searchCriteria.email = email;
    }

    const user = await User.findOne(searchCriteria);
    // console.log(user)
    if (!user) {
        return res
        .status(404)
        .json( new ApiError(404, "User does not exist"));
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        return res
            .status(401)
            .json( new ApiError(401, "Invalid user credentials"))
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )

})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        return res
        .status(401)
        .json( new ApiError(401, "unauthorized request"));
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )

        const user = await User.findById(decodedToken?._id)

        if (!user) {
            return res
            .status(401)
            .json( new ApiError(401, "Invalid refresh token"));
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            return res
            .status(401)
            .json( new ApiError(401, "Refresh token is expired or used"));
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefereshTokens(user._id)

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newRefreshToken },
                    "Access token refreshed"
                )
            )
    } catch (error) {
        return res
        .status(401)
        .json( new ApiError(401, error?.message || "Invalid refresh token"));
    }

})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    // console.log(req)
    const { oldPassword, newPassword } = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        return res
        .status(400)
        .json( new ApiError(400, "Invalid old password"));
    }

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Password changed successfully"))
})


const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            req.user,
            "User fetched successfully"
        ))
})

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body

    if (!fullName || !email) {
        return res
        .status(400)
        .json( new ApiError(400, "All fields are required"));
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullName,
                email: email
            }
        },
        { new: true }

    ).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Account details updated successfully"))
});

const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
        return res
        .status(400)
        .json( new ApiError(400, "Avatar file is missing"));
    }

    const user = await User.findById(req.user?._id);

    if (!user) {
        return res
        .status(404)
        .json( new ApiError(404, "User not found"));
    }

    const oldAvatarUrl = user.avatar;

    if (oldAvatarUrl) {
        const publicIdOfOldAvatar = oldAvatarUrl.split('/').pop().split('.')[0];
        await deleteOnCloudinary(publicIdOfOldAvatar);
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath,{ secure: true });

    if (!avatar.secure_url) {
        return res
        .status(400)
        .json( new ApiError(400, "Error while uploading avatar"));
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.secure_url
            }
        },
        { new: true }
    ).select("-password");

    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedUser, "Avatar image updated successfully")
        );
});


const updateUserCoverImage = asyncHandler(async (req, res) => {
    const coverImageLocalPath = req.file?.path

    if (!coverImageLocalPath) {
        return res
        .status(400)
        .json( new ApiError(400, "Cover image file is missing"));
    }

    const user = await User.findById(req.user?._id);
    //TODO: delete old image - assignment
    if (!user) {
        return res
        .status(404)
        .json( new ApiError(404, "User not found"));
    }


    const oldCoverImage = user.coverImage;

    if (oldCoverImage) {
        const publicIdOfOldCoverImage = oldCoverImage.split('/').pop().split('.')[0];
        await deleteOnCloudinary(publicIdOfOldCoverImage);
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath,{ secure: true });

    if (!coverImage.secure_url) {
        return res
        .status(400)
        .json( new ApiError(400, "Error while uploading on avatar"));
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                coverImage: coverImage.secure_url
            }
        },
        { new: true }
    ).select("-password")

    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedUser, "Cover image updated successfully")
        )
})


const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params

    if (!username?.trim()) {
        return res
        .status(400)
        .json( new ApiError(400, "username is missing"));
    }

    const channel = await User.aggregate([
        {
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelsSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: { $in: [req.user?._id, "$subscribers.subscriber"] },
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                subscribersCount: 1,
                channelsSubscribedToCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1

            }
        }
    ])

    if (!channel?.length) {
        return res
        .status(404)
        .json( new ApiError(404, "channel does not exists"));
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, channel[0], "User channel fetched successfully")
        )
})

const getWatchHistory = asyncHandler(async (req, res) => {
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullName: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user[0].watchHistory,
                "Watch history fetched successfully"
            )
        )
})

const getAllComments= asyncHandler(async (req, res)=>{
    const {userId} = req.params;
    if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
    }
    // console.log("userid",userId);
    const userVideos = await Video.find({ owner: userId }).select('_id');
    if (userVideos.length === 0) {
        return res.status(200).json({ totalComments: 0, message: "No videos found for this user" });
    }
    const videoIds = userVideos.map(video => video._id);    
    const totalComments = await Comment.countDocuments({ video: { $in: videoIds } });
    const comments = await Comment.find({ video: { $in: videoIds } })
        .populate("owner", "name") // Populate owner details (e.g., user's name)
        .populate("video", "title") // Populate video details (e.g., video's title)
        .sort({ createdAt: -1 }); // Sort comments by latest first

    // console.log("Total Comments Found:", totalComments); // Debugging: See if any comments were found
    // console.log("Comments:", comments);
    return res
    .status(200)
    .json(new ApiResponse(200,totalComments,comments,"Total Comments found for user's channel"))

})

// const findUser = asyncHandler(async(req,res)=>{
//     const {channelId} = req.params;
//     if(!channelId){
//         return res
//         .status(400)
//         .json(new ApiError(400,"Channel Id is missing !!"));
//     }


// })

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getWatchHistory,
    getAllComments,
    // findUser,
}