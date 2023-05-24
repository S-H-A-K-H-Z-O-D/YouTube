import { useContext } from "react";
import { Link } from "react-router-dom";
import { AboutChannelContext } from "../../contexts/aboutChannel";

export const VideoRelated = () => {
  const { data } = useContext(AboutChannelContext);

  return (
    <ul className="list-unstyled">
      {data.map(({ video }) => (
        <li key={video.videoId} className="d-flex">
          <div className="mb-2 me-2">
            <img
              className="related_video_img"
              src={video.thumbnails[0].url}
              alt="pic"
              width={180}
            />
          </div>
          <div className="d-flex flex-column justify-between">
            <h6 title={video.title} className="related_video_title mt-1">
              {video.title}
            </h6>
            <div>
              <Link className="text-dark">{video.channelName}</Link>
              <p className="mb-0">
                {video.viewCountText}
                <span className="published_time">
                  {video.publishedTimeText}
                </span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
