import { useContext } from "react";
import { AboutChannelContext } from "../../contexts/aboutChannel";
import { Card, Col, Row } from "antd";
import "./aboutChannel.css";
import { Skaleton } from "./skeleton/skeleton.component";
const { Meta } = Card;

export const AboutChannel = () => {
  const { data } = useContext(AboutChannelContext);
  console.log(data);

  return (
    <Row justify={"center"} gutter={[20, 20]}>
      <Skaleton />
      {data.map(({ video }) => (
        <Col key={video.videoId}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            bodyStyle={{
              padding: "16px",
            }}
            cover={<img alt="example" src={video.thumbnails[0].url} />}
          >
            <Meta title={video.title} />
            <p>{video.channelName}</p>
            <p>
              {video.viewCountText}
              <span className="published_time">{video.publishedTimeText}</span>
            </p>
            <Meta description="www.instagram.com" />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
