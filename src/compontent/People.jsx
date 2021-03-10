import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";
import { db } from "../firebase";

import { useHistory } from "react-router-dom";
import { userdata } from "../feature/userSlice";
import { setCameraImage } from "../feature/CamerSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./NavBar";
const ChatScreen = () => {
  const dispatch = useDispatch();
  let newlist = [];
  const { uuid, imageUrl, displayName } = useSelector(userdata);
  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    dispatch(setCameraImage(null));

    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        // snap.docChanges().forEach((doc) => {
        //   if (doc.type == "removed") {
        //     newlist = newlist.filter((id) => {
        //       return id.uid != doc.doc.data().uid;
        //     });
        //   } else {
        //     console.log(doc.doc.data().receiver, uuid);
        //     if (doc.doc.data().receiver == uuid) {
        //       let data = doc.doc.data();
        //       // data["postid"] = doc.doc.id;
        //       newlist.push(data);
        //     }
        //   }
        // });
        newlist = [];
        snap.docs.map((doc) => {
          if (doc.data().receiver == uuid) {
            newlist.push(doc.data());
          }
        });
        setuserlist(newlist);
      });
  }, []);

  const history = useHistory();
  return (
    <div className="chatscreen">
      <div className="chatlist">
        {userlist.length > 0 &&
          userlist.map((doc) => (
            <ChatList data={doc} send={false} key={doc._id}></ChatList>
          ))}
      </div>
    </div>
  );
};

export default ChatScreen;
