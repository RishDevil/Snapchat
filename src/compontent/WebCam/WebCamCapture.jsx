import React, { useState, useEffect, useRef, useCallback } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Webcam from "react-webcam";
import { setCameraImage } from "../../feature/CamerSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";

const WebCamCapture = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const webref = useRef(null);
  const [front, setfront] = useState(true);
  const [image, setimage] = useState(null);
  const vedioConstraint = {
    width: 250,
    height: 400,
    facingMode: "environment",
    mirrored: false,
    screenshotQuality: 0.95,
  };
  useEffect(() => {
    dispatch(setCameraImage(null));
  }, []);
  const capture = useCallback(() => {
    const srcimage = webref.current.getScreenshot();
    dispatch(setCameraImage(srcimage));
    history.push("/pre");
  }, [webref]);
  const camera = () => {
    setfront(!front);
  };
  return (
    <div className="webcam">
      {/* <div className="camera" onClick={camera}>
        {front ? "F" : "B"}
      </div> */}
      <Webcam
        audio={false}
        height={vedioConstraint.height}
        width={vedioConstraint.width}
        ref={webref}
        screenshotFormat="image/jpeg"
        vedioConstraints={vedioConstraint}
      ></Webcam>
      <RadioButtonUncheckedIcon onClick={capture} />
    </div>
  );
};

export default WebCamCapture;
