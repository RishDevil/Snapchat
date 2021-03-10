import React, { useState, useEffect } from "react";
import { auth, provider, db } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../feature/userSlice";
const Login = () => {
  const dispatch = useDispatch();

  const login = async () => {
    await auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUser({
          uuid: result.user.uid,
          displayName: result.user.displayName,
          imageUrl: result.user.photoURL,
        })
      );
      db.collection("user")
        .doc(result.user.uid)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            db.collection("user").doc(result.user.uid).set({
              uid: result.user.uid,
              displayName: result.user.displayName,
              imageUrl: result.user.photoURL,
            });
          }
        });
    });
  };
  return (
    <div className="login">
      <div>snapsnap </div>
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default Login;
