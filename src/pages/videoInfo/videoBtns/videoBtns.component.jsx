import { Button } from "antd";

export const VideoBtns = () => {
  return (
    <>
      <div className="ms-auto d-flex align-items-center">
        <Button style={{ borderRadius: "50px" }}>4.4K</Button>
        <Button style={{ borderRadius: "50px" }}>Share</Button>
        <Button style={{ borderRadius: "50px" }}>Download</Button>
        <Button style={{ borderRadius: "50px" }}>...</Button>
      </div>
    </>
  );
};
