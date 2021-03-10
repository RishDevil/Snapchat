import { Route } from "react-router-dom";
import WebCamCapture from "../compontent/WebCam/WebCamCapture";
import Preview from "../compontent/Preview";
import ChatScreen from "../compontent/ChatScreen";
import People from "../compontent/People";
import PreviewPost from "../compontent/PreviewPost";
import Navbar from "../compontent/NavBar";

const Router = () => {
  return (
    <>
      <Navbar></Navbar>
      <Route exact path="/camera" component={WebCamCapture}></Route>
      <Route exact path="/pre" component={Preview}></Route>
      <Route exact path="/chat" component={ChatScreen}></Route>
      <Route exact path="/post" component={PreviewPost}></Route>
      <Route exact path="/" component={People}></Route>
    </>
  );
};

export default Router;
