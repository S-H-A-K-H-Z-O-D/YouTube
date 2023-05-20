import { Button, Layout, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./header.css";
import App from "./search";
const { Header } = Layout;

export const HeaderWrapper = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="head">
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <span className="icon">
          <b>YouTube</b>
        </span>
      </Header>
      <App />
    </div>
  );
};
