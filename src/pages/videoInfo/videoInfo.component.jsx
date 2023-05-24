import { Avatar } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AboutChannelContext } from "../../contexts/aboutChannel";
import { SubscribedButton } from "./subscribedButton/subscribedButton.component";
import "./videoInfo.css";

export const VideoInfo = () => {
  const { videoInfo } = useContext(AboutChannelContext);
  const [subscribtion, setSubscribtion] = useState(true);
  console.log(videoInfo);

  let ChangeSubscribtionButton = () => {
    setSubscribtion(false);
  };

  return (
    <div className="mt-2 d-flex flex-column justify-center">
      <h5>{videoInfo.title}</h5>
      <div className="d-flex">
        <Avatar size="large" icon={<img src="" />} />
        <div className="ms-2">
          <h6 className="m-0">{videoInfo.author}</h6>
          <p className="m-0">55.2K subscribers</p>
        </div>
        <div className="d-flex align-items-center ms-4">
          {subscribtion ? (
            <button
              onClick={setSubscribtion.bind(null, false)}
              className="subscribe_btn"
            >
              Subscribe
            </button>
          ) : (
            <SubscribedButton setSubscribtion={setSubscribtion} />
          )}
        </div>
      </div>
    </div>
  );
};
