import { useParams } from "react-router-dom";
import { VideoInfo } from "../videoInfo/videoInfo.component";
import { VideoRelated } from "../videoRelated/videoRelated.component";
import "./video.css";

export const Video = () => {
  const { id } = useParams();

  return (
    <div className="d-flex">
      <div>
        <div>
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${id}`}
            title="Emir + Reyhan - Dandelions||Gokberk Demirci ve OzgeYagiz"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <VideoInfo id={id} />
        </div>
      </div>

      <div className="ms-4">
        <VideoRelated />
      </div>
    </div>
  );
};
