import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useLocation, Link } from "react-router-dom";
import "./WatchVideo.scss";
import useVideosStore from "../../store/useVideosStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEllipsisVertical,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useStore from "../../store/userStore";
import useCommentsStore from "../../store/useCommentsStore";
import useSubscriptionStore from "../../store/useSubscriptionStore";
import useLikesStore from "../../store/useLikesStore";
import { useForm } from "react-hook-form";
import Loader from "../../components/Loader/Loader";
import defaultImage from "../../assets/profile_pic.webp";

function WatchVideo() {
  const videoRef = useRef(null);
  const [commentContent, setCommentContent] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isEditComment, setIsEditComment] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);
  const [minLoading, setMinLoading] = useState(true);
  const [showComments, setShowComments] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("videoId");

  // Stores
  const { user } = useStore();
  const {
    video,
    getVideoById,
    isLoading: videoLoadingStore,
    error,
    userWatchHistory,
    incrementVideoViews,
    getAllVideos,
    videos,
    watchHistorys,
  } = useVideosStore();

  const {
    commentsOfVideo,
    getVideoComments,
    addCommentOnVideo,
    deleteCommentOnVideo,
    updateCommentOnVideo,
    isLoading: commentsLoadingStore,
  } = useCommentsStore();

  const { getUserChannelSubscribers, channelSubscribers, toggleSubscription } =
    useSubscriptionStore();

  const {
    toggleVideoLike,
    getVideoLikes,
    likesOfVideo,
    likesOfVideoNumber,
    likesOfComments,
    toggleCommentLike,
    getLikesOfComment,
    setCurrentUserId,
  } = useLikesStore();

  // Derived states
  const channelId = useMemo(() => video?.owner?._id, [video]);
  const isSubscribed = useMemo(
    () => user && channelSubscribers.some((sub) => sub._id === user._id),
    [channelSubscribers, user]
  );

  const isVideoLiked = useMemo(
    () => user && likesOfVideo?.some((like) => like.likedBy === user._id),
    [likesOfVideo, user]
  );

  // Format views helper
  const formatViews = useCallback((views) => {
    if (views >= 1_000_000_000) return (views / 1_000_000_000).toFixed(1) + "B";
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M";
    if (views >= 1_000) return (views / 1_000).toFixed(1) + "K";
    return views;
  }, []);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      if (!videoId) return;

      try {
        // Check if video is in watch history
        const isVideoInHistory = watchHistorys.some(
          (history) => history._id === videoId
        );
        if (user && !isVideoInHistory) {
          await userWatchHistory(videoId);
        }

        // Fetch all necessary data
        await Promise.all([
          getVideoById(videoId),
          incrementVideoViews(videoId),
          getVideoComments(videoId),
          getAllVideos(),
          getVideoLikes(videoId),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => setMinLoading(false), 1000);
      }
    };

    fetchData();
  }, [videoId, user]);

  // Fetch channel subscribers when channelId is available
  useEffect(() => {
    if (!channelId) return;

    const fetchSubscribers = async () => {
      await getUserChannelSubscribers(channelId);
    };

    fetchSubscribers();
  }, [channelId]);

  // Set current user ID for likes
  useEffect(() => {
    if (user?._id) setCurrentUserId(user._id);
  }, [user]);

  // Fetch comment likes when comments change
  useEffect(() => {
    const fetchCommentLikes = async () => {
      if (!commentsOfVideo?.length) return;
      await Promise.all(
        commentsOfVideo.map((comment) => getLikesOfComment(comment._id))
      );
    };

    fetchCommentLikes();
  }, [commentsOfVideo]);

  // Handlers
  const handleAddComment = async () => {
    if (!videoId || !commentContent.trim()) return;

    try {
      await addCommentOnVideo(videoId, commentContent);
      setCommentContent("");
      await getVideoComments(videoId);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleSubscription = async () => {
    if (!channelId) return;
    await toggleSubscription(channelId);
    await getUserChannelSubscribers(channelId);
  };

  const handleVideoLike = async () => {
    if (!videoId) return;
    await toggleVideoLike(videoId);
    await getVideoLikes(videoId);
  };

  const handleCommentLike = async (commentId) => {
    if (!commentId) return;
    await toggleCommentLike(commentId);
    await getLikesOfComment(commentId);
  };

  const toggleDropdown = (commentId) => {
    setIsDropdownOpen((prev) => (prev === commentId ? null : commentId));
  };

  const handleCommentDelete = async (commentId) => {
    await deleteCommentOnVideo(commentId);
    await getVideoComments(videoId);
  };

  const handleCommentEdit = (comment) => {
    setIsEditComment(true);
    setCurrentComment(comment);
  };

  const handleEditSubmit = async (data) => {
    try {
      await updateCommentOnVideo(currentComment?._id, {
        content: data.content,
      });
      reset();
      setIsEditComment(false);
      await getVideoComments(videoId);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleCloseEdit = () => {
    setIsEditComment(false);
    reset();
  };

  const handleDoubleClick = (event) => {
    if (!videoRef.current) return;

    const rect = videoRef.current.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const videoWidth = rect.width;

    if (clickX < videoWidth / 3) {
      videoRef.current.currentTime -= 5;
    } else if (clickX > (videoWidth * 2) / 3) {
      videoRef.current.currentTime += 5;
    }
  };

  const toggleComments = () => setShowComments((prev) => !prev);

  // Extend dayjs with relativeTime plugin
  dayjs.extend(relativeTime);

  if (videoLoadingStore || minLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="box">
        <div className="watchVideo-container">
          <div className="watchVideo-left-side">
            <div>
              {video ? (
                <video
                  ref={videoRef}
                  src={video?.videoFile}
                  controls
                  style={{ borderRadius: "10px" }}
                  onDoubleClick={handleDoubleClick}
                />
              ) : (
                <p>No video found.</p>
              )}
            </div>
            <div>
              <p className="video-title">
                {video?.title || "Video Title Here"}
              </p>
            </div>
            <div className="subscribeSection">
              <div className="section1">
                <Link to={`/${video?.owner?.username}/${channelId}`}>
                  <div className="section11">
                    <div className="section111">
                      <img
                        src={video?.owner?.avatar || defaultImage}
                        alt="Channel"
                      />
                    </div>
                    <div className="section112">
                      <p className="ownerName">{video?.owner?.fullName}</p>
                      <p className="ownerSubscribers">
                        {channelSubscribers.length} subscribers
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="section12">
                  <button
                    className="subscribeButton"
                    onClick={handleSubscription}
                  >
                    {isSubscribed ? "Subscribed" : "Subscribe"}
                  </button>

                  <div className="likeButton">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      onClick={handleVideoLike}
                      className={isVideoLiked ? "likeIcon" : "unLikeIcon"}
                    />
                    <p>{likesOfVideoNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="description">
              <div className="section21">
                <p className="views">{formatViews(video?.views || 0)} views</p>
                <p className="time">{dayjs(video?.createdAt).fromNow()}</p>
              </div>
              <div className="section22">
                <p className="section221">Description</p>
                <p className="descriptionContent">{video?.description}</p>
              </div>
            </div>
            <div className="commentSection">
              <div className="commentSection1">
                <p className="commentSection12">
                  {commentsOfVideo?.length || 0} Comments
                </p>
                <div className="commentSection2" onClick={toggleComments}>
                  <FontAwesomeIcon icon={faSort} />
                  <p className="commentSection21">
                    {showComments ? "Hide Comments" : "Show Comments"}
                  </p>
                </div>
              </div>
            </div>

            {showComments && (
              <div className="comments">
                <div className="comments1">
                  <div className="comments11">
                    <img src={user?.avatar || defaultImage} alt="User" />
                    <input
                      type="text"
                      placeholder="Add a Comment"
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <button onClick={() => setCommentContent("")}>
                      Cancel
                    </button>
                    <button
                      onClick={handleAddComment}
                      disabled={!commentContent.trim()}
                    >
                      Comment
                    </button>
                  </div>
                  <div className="divider"></div>
                </div>

                <div className="channelComments">
                  {commentsOfVideo?.length > 0 ? (
                    commentsOfVideo.map((comment) => {
                      const commentLikeData = likesOfComments[comment._id] || {
                        likes: 0,
                        likedByUser: false,
                      };

                      return (
                        <div
                          key={comment?._id}
                          className="channelCommentsSection"
                        >
                          <div className="channelCommentsSection1">
                            <img
                              src={comment?.owner?.avatar || defaultImage}
                              alt="Commenter"
                            />
                          </div>
                          <div className="channelCommentsSection2">
                            <div className="channelCommentsSection21">
                              <p className="channelCommentsSection211">
                                {comment?.owner?.username}
                              </p>
                              <p className="channelCommentsSection212">
                                {dayjs(comment?.createdAt).fromNow()}
                              </p>
                              <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="channelCommentsSection213"
                                onClick={() => toggleDropdown(comment._id)}
                              />
                              {isDropdownOpen === comment._id &&
                                (comment?.owner?._id === user?._id ||
                                  channelId === user?._id) && (
                                  <div className="commentDropdown">
                                    <button
                                      onClick={() => handleCommentEdit(comment)}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleCommentDelete(comment?._id)
                                      }
                                    >
                                      Delete
                                    </button>
                                  </div>
                                )}
                            </div>
                            <div className="channelCommentsSecton22">
                              <p className="channelCommentsSection221">
                                {comment?.content}
                              </p>
                            </div>
                            <div className="channelCommensSection23">
                              <div className="channelCommensSection231">
                                <FontAwesomeIcon
                                  icon={faThumbsUp}
                                  className={
                                    commentLikeData.likedByUser
                                      ? "likeIcon"
                                      : "unLikeIcon"
                                  }
                                  onClick={() =>
                                    handleCommentLike(comment?._id)
                                  }
                                />
                              </div>
                              <p>{commentLikeData.likes}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>No Comments</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="watchVideo-right-side">
            {videos
              .filter((v) => v?._id !== videoId)
              .map((video) => (
                <Link
                  key={video._id}
                  to={`/watchvideo?videoId=${encodeURIComponent(video?._id)}`}
                >
                  <div className="watchVideoSection">
                    <div className="watchVideoSection1">
                      <img
                        src={video?.thumbnail}
                        className="watchVideoSection11"
                        alt="Thumbnail"
                      />
                    </div>
                    <div className="watchVideoSection2">
                      <div className="watchVideoSection21">
                        <p className="watchVideoSection211">{video?.title}</p>
                      </div>
                      <div className="watchVideoSection22">
                        <p className="watchVideoSection221">
                          {video?.owner?.username}
                        </p>
                      </div>
                      <div className="watchVideoSection23">
                        <p className="views">
                          {formatViews(video?.views || 0)} views
                        </p>
                        <p className="dot">•</p>
                        <p className="time">
                          {dayjs(video?.createdAt).fromNow()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {isEditComment && currentComment?.owner?._id === user?._id && (
        <div className="editCommentContainer">
          <form
            onSubmit={handleSubmit(handleEditSubmit)}
            className="editCommentContainer1"
          >
            <p className="editCommentContainer11">Edit Comment</p>
            <div className="editCommentContainer12">
              <label className="editCommentContainer121">Content</label>
              <input
                type="text"
                {...register("content")}
                defaultValue={currentComment.content}
                className="editCommentContainer122"
              />
            </div>
            <div className="formButtons">
              <button className="formButtons1" type="submit">
                Submit
              </button>
              <button
                className="formButtons2"
                type="button"
                onClick={handleCloseEdit}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default WatchVideo;
