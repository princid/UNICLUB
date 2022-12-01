import { Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { message } from "antd";
import "./CreatePost.css";
import { postEvent } from "../api";

const CreatePost = ({ clubId, callback }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const resetForm = () => {
    setTitle("");
    setImage("");
    document.getElementById("file-input").value = "";
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const formDetails = new FormData();
    formDetails.append("title", title);
    formDetails.append("club", clubId);
    formDetails.append("image", image);
    postEvent(formDetails)
      .then((res) => {
        message.success(res.data.message);
        resetForm();
        callback();
      })
      .catch((err) => {
        message.error(err.response.data.message);
      });
  };

  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar
          className="avatar"
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
          size="lg"
        />
        <form>
          <input
            type="text"
            className="createPost__input"
            placeholder="Let's make a post!"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="createPost__fileUpload">
            <input
              type="file"
              setImage={setImage}
              className="createPost__fileSelector"
              onChange={handleChange}
              id="file-input"
            />
          </div>
          {/* <Button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </Button> */}
        </form>
      </div>

      <div className="createPost__bottom">
        <div className="createPost__option">
          <Button type="submit" onClick={handleSubmit}>
            SUBMIT POST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;