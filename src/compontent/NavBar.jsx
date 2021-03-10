import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectImage } from "../feature/CamerSlice";
import { userdata } from "../feature/userSlice";
import { auth } from "../firebase";
const Navbar = () => {
  const [current, setcurrent] = useState(0);
  const history = useHistory();
  const menu = useRef();
  menu.current = 0;
  console.log(menu.current, "current");
  const signout = () => {
    auth.signOut();
  };
  const { displayName, imageUrl } = useSelector(userdata);

  return (
    <div className="nav">
      <div className="avatar anav">
        {" "}
        <img alt="dp" src={imageUrl} onClick={() => signout()} />
      </div>{" "}
      <div className="displayname">{displayName}</div>
      <div className="left">
        <div
          onClick={
            current == 2
              ? () => {
                  return;
                }
              : () => {
                  setcurrent(2);
                  history.push("/chat");
                  return;
                }
          }
          className={current == 2 ? "menu active" : "menu"}
        >
          send
        </div>
        <div
          onClick={
            current == 1
              ? () => {
                  return;
                }
              : () => {
                  setcurrent(1);
                  history.push("/camera");
                  return;
                }
          }
          className={current == 1 ? "menu active" : "menu"}
        >
          camera
        </div>
        <div
          onClick={
            current == 0
              ? () => {
                  return;
                }
              : () => {
                  setcurrent(0);
                  return history.push("/");
                }
          }
          className={current == 0 ? "menu active" : "menu"}
        >
          post
        </div>
      </div>
    </div>
  );
};

export default Navbar;
