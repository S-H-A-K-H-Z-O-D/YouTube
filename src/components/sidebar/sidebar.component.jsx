import { Layout } from "antd";
import {
  HomeOutlined,
  PlayCircleOutlined,
  InfoCircleOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { useContext } from "react";
import { AboutChannelContext } from "../../contexts/aboutChannel";
const { Sider } = Layout;

export const Sidebar = ({ collapsed }) => {
  const { aside } = useContext(AboutChannelContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let onNavigate = ({ key }) => {
    navigate(key);
  };

  return (
    <>
      <Sider
        style={{ backgroundColor: "white" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          theme="light"
          mode="inline"
          onClick={onNavigate}
          selectedKeys={[`/${pathname.split("/")[1]}`]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "About channel",
            },
            {
              key: "/channel",
              icon: <NotificationOutlined />,
              label: "Channel",
            },
            {
              key: "/video-related",
              icon: <PlayCircleOutlined />,
              label: "Video related",
            },
            {
              key: "/video-comments",
              icon: <PlayCircleOutlined />,
              label: "Video comments",
            },
            {
              key: "/trending",
              icon: <PlayCircleOutlined />,
              label: "Trending",
            },
            {
              key: "/video-info",
              icon: <InfoCircleOutlined />,
              label: "Video info",
            },
            {
              key: "/playlist",
              icon: <PlayCircleOutlined />,
              label: "Playlist",
            },
          ]}
        />
      </Sider>
    </>
  );
};
