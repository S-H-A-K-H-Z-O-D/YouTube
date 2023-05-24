import { Avatar, Card, Col, Row } from "antd";
import { useState } from "react";
import { useContext } from "react";
import { AboutChannelContext } from "../../../contexts/aboutChannel";
const { Meta } = Card;

export const Skaleton = () => {
  // const { data } = useContext(AboutChannelContext);
  let arr = "asdfghjkasdf".split("");
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };

  return (
    <Row gutter={[20, 20]}>
      {arr.map((s, i) => (
        <Col key={i}>
          <Card
            style={{
              width: 290,
              marginTop: 16,
            }}
            loading={loading}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
