import { Row, Typography, Form, Input, Button } from "antd";
import { blue } from "@ant-design/colors";
import "./login.css";
import { hoc } from "../../utils";
import { useLoginProps } from "../../hooks/useLoginProps";

const { Title } = Typography;

export const Login = hoc(
  useLoginProps,
  ({ onLogin, emailRef, passwordRef, wrong }) => {
    return (
      <Row className="login_body" align={"middle"} justify={"center"}>
        <Row className="login_wrapper" align={"middle"} justify={"center"}>
          <Title level={2}>Login</Title>
          <Form className="login_form" layout="vertical" onFinish={onLogin}>
            <Form.Item
              label={"email"}
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Please, input your email",
                },
              ]}
            >
              <Input ref={emailRef} className="login_input" type="email" />
            </Form.Item>

            <Form.Item
              label={"password"}
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Please, input your password",
                },
              ]}
            >
              <Input
                ref={passwordRef}
                className="login_input"
                type="password"
              />
            </Form.Item>

            {wrong ? (
              <p className="wrongInput">Check your email or password</p>
            ) : null}

            <Row className="form_btn" justify={"center"}>
              <Button htmlType="submit">Login</Button>
            </Row>
          </Form>
        </Row>
      </Row>
    );
  }
);
