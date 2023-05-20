import { Layout, theme } from "antd";
import { useState } from "react";
import { HeaderWrapper } from "../headerWrapper/headerWrapper.component";
import { Sidebar } from "../sidebar/sidebar.component";
import "./layoutWrapper.css";
const { Content } = Layout;

export const LayoutWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <HeaderWrapper collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className="layout">
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
