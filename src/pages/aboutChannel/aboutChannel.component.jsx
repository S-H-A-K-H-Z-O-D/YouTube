import { useContext } from "react";
import { AboutChannelContext } from "../../contexts/aboutChannel";
import { Card, Col, Row } from "antd";
import "./aboutChannel.css";
import { Skaleton } from "./skeleton/skeleton.component";
import { Link } from "react-router-dom";
const { Meta } = Card;

export const AboutChannel = () => {
  const { data, loading, OnNavigate } = useContext(AboutChannelContext);

  return loading ? (
    <Skaleton />
  ) : (
    <Row justify={"center"} gutter={[20, 20]}>
      {data.map(({ video }) => (
        <Col key={video.videoId}>
          <Card
            onClick={OnNavigate.bind(null, video.videoId)}
            hoverable
            style={{
              width: 290,
            }}
            bodyStyle={{
              padding: "16px",
            }}
            cover={<img alt="example" src={video.thumbnails[0].url} />}
          >
            <Meta title={video.title} />
            <div className="mt-1">
              <Link className="text-dark">{video.channelName}</Link>
              <p className="mb-0 ">
                {video.viewCountText}
                <span className="published_time">
                  {video.publishedTimeText}
                </span>
              </p>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
