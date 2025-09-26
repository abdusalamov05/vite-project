import { AuthWrapper } from "./auth-wrapper";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function LoginForm() {
  return (
    <AuthWrapper title="Sign in to your account to continue">
      <Form>
        <Input prefix={<UserOutlined />} placeholder="Email" />
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />

        <Button disabled>Log in</Button>
      </Form>
    </AuthWrapper>
  );
}
