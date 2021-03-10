import React, { useState, useEffect } from "react";
import "./App.css";
import WebCamCapture from "./compontent/WebCam/WebCamCapture";
import Login from "./compontent/Login";
import { userdata } from "./feature/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser, logout } from "./feature/userSlice";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
  const dispatch = useDispatch();
  const { uuid } = useSelector(userdata);
  useEffect(() => {
    if (!uuid)
      auth.onAuthStateChanged((auth) => {
        if (auth) {
          dispatch(
            setUser({
              uuid: auth.uid,
              displayName: auth.displayName,
              imageUrl: auth.photoURL,
            })
          );
        } else {
          dispatch(logout());
        }
      });
  }, [uuid]);
  return (
    <BrowserRouter>
      {/* <div className="App">{uuid ? <Router /> : <Login />}</div> */}
      <div className="App">
        <div className="container">{uuid ? <Router /> : <Login />}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
