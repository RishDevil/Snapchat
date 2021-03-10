import React, { useState, useEffect } from "react";
import { selectImage } from "../feature/CamerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCameraImage } from "../feature/CamerSlice";

const Preview = () => {
  const image = useSelector(selectImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const close = () => {
    dispatch(setCameraImage(null));
    history.push("/");
  };
  useEffect(() => {
    if (!image) history.push("/camera");
  });
  return (
    <div className="preview">
      {" "}
      <div className="image">
        <div onClick={close} className="previewClose">
          x
        </div>
        <img src={image}></img>
      </div>
      <button
        onClick={() => {
          history.push("/chat");
        }}
      >
        send
      </button>
    </div>
  );
};

export default Preview;
