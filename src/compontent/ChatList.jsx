import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { selectImage, setPostId, setPostImage } from "../feature/CamerSlice";
import { userdata } from "../feature/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider, db, storage } from "../firebase";
import { useHistory } from "react-router-dom";
import Block from "./Block";

const ChatList = (props) => {
  const image = useSelector(selectImage);
  const { uuid, imageUrl, displayName } = useSelector(userdata);
  const [sending, setsending] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const send = () => {
    if (image != null) {
      setsending(true);
      const upload = storage.ref(`post/${uuid}`).putString(image, "data_url");

      upload.on(
        "state_changed",
        null,
        (error) => {},
        () => {
          storage
            .ref("post")
            .child(uuid)
            .getDownloadURL()
            .then((url) => {
              db.collection("post")
                .doc(props.data.uid + uuid)
                .set({
                  receiver: props.data.uid,
                  postimage: url,
                  displayName: displayName,
                  read: false,
                  imageUrl: imageUrl,
                  uid: uuid,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
            });
        }
      );
    }
    setTimeout(() => {
      setsending(false);
    }, 1000);
  };

  const posts = () => {
    dispatch(setPostImage(props.data.postimage));
    dispatch(setPostId(props.data.uid));
    history.push("/post");
  };
  return (
    <div
      className="chatContainer"
      onClick={
        props.send ? () => send() : !props.data.read ? () => posts() : () => {}
      }
    >
      <div className="avatar">
        <img alt="dp" src={props.data.imageUrl} />
      </div>
      <div className="left lchat">
        <div className="disName">{props.data.displayName}</div>
        {!props.send && !props.data.read ? (
          <div>
            <Block />{" "}
          </div>
        ) : (
          ""
        )}
        {sending ? <div>sending</div> : ""}
      </div>
    </div>
  );
};

export default ChatList;
