import { Avatar } from "@nextui-org/react";
import React from "react";
import "./Post.css";
import { deleteEvent } from "../api";
import { message } from "antd";

const Post = ({ id, profilePic, imageURL, username, timestamp, title, isPresident, callback }) => {
  const handleDeletePost = () => {
    deleteEvent(id).then((res) => {
      message.success(res.data.message);
      callback();
    }).catch((err) => {
      message.error(err.response.data.message);
    });
  };

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__top">
          <Avatar size="lg" src={profilePic} className="post__avatar" />

          <div className="post__topInfo">
            <h4>{username}</h4>
            <p>{`${new Date(parseInt(timestamp)).toDateString()} ${new Date(
              parseInt(timestamp)
            ).toLocaleTimeString()}`}</p>
          </div>
          {isPresident && (
            <button className="delete_btn" onClick={handleDeletePost}>
              Delete Post
            </button>
          )}
        </div>

        <div className="post__bottom">
          <p>{title}</p>
        </div>
        <img src={imageURL} alt={title} className="post__image" />
      </div>
    </div>
  );
};

export default Post;
