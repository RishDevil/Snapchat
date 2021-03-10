import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userdata } from "../feature/userSlice";
import Navbar from "./NavBar";
const ChatScreen = () => {
  let newlist = [];
  const { uuid, imageUrl, displayName } = useSelector(userdata);
  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    // db.collection("user").onSnapshot((snap) => {
    //   snap.docChanges().forEach((doc) => {
    //     if (doc.type == "added") {
    //       if (uuid != doc.doc.data().uid) newlist.push(doc.doc.data());
    //     } else {
    //       newlist = newlist.filter((id) => {
    //         console.log(id.uid, " ", doc.doc.data().uid);
    //         return id.uid != doc.doc.data().uid;
    //       });
    //     }
    //   });
    //   setuserlist(newlist);
    // });

    db.collection("user").onSnapshot((snap) => {
      snap.docChanges().forEach((doc) => {
        if (doc.type == "added") {
          if (uuid != doc.doc.data().uid) newlist.push(doc.doc.data());
        } else {
          newlist = newlist.filter((id) => {
            console.log(id.uid, " ", doc.doc.data().uid);
            return id.uid != doc.doc.data().uid;
          });
        }
      });
      setuserlist(newlist);
    });
  }, []);
  console.log("user", userlist);
  const history = useHistory();
  return (
    <div className="chatscreen">
      <div className="chatlist">
        {userlist.map((doc) => (
          <ChatList data={doc} send={true} key={doc._id}></ChatList>
        ))}
      </div>
    </div>
  );
};

export default ChatScreen;
