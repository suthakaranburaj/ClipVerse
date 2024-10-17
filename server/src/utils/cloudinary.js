import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import { ApiError } from "./ApiError.js";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        console.log(localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        // return null;
    }
}

const deleteOnCloudinary = async (publicId , resourceType = 'image') => {
    if (!publicId) {
        throw new ApiError(400, "Public ID is missing for deletion");
    }

    try {
        // Handle deletion of both videos and images
        const response = await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
        console.log("Cloudinary Deletion Response: ", response);

        if (response.result !== "ok") {
            throw new ApiError(400, `Error while deleting the ${resourceType} on Cloudinary: ${response.result}`);
        }

        return response;
    } catch (error) {
        console.error("Cloudinary Deletion Error: ", error);
        throw new ApiError(500, `Failed to delete ${resourceType} on Cloudinary`);
    }
}




export {
    uploadOnCloudinary,
    deleteOnCloudinary
}