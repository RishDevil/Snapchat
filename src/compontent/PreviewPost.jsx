import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPostImage, postImage, postId } from "../feature/CamerSlice";
import { userdata } from "../feature/userSlice";
const PreviewPost = (props) => {
  const { uuid, imageUrl, displayName } = useSelector(userdata);
  const image = useSelector(postImage);
  const postid = useSelector(postId);
  console.log(postid);
  const history = useHistory();
  const dispatch = useDispatch();
  
  const close = () => {
    // dispatch(setPostImage(null));
    db.collection("post")
      .doc(uuid + postid)
      .update({ read: true });
    history.push("/");
  };

  return (
    <div className="preview">
      {" "}
      <div className="image">
        <div onClick={close} className="previewClose">
          x
        </div>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default PreviewPost;
