import { AuthWrapper } from "./auth-wrapper";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const User = styled(UserOutlined)`
  color: #000;
  opacity: 0.45;
`;

const Lock = styled(LockOutlined)`
  color: #000;
  opacity: 0.45;
`;

export function LoginForm() {
  return (
    <AuthWrapper title="Sign in to your account to continue">
      <Form>
        <Input prefix={<User />} placeholder="Email" />

        <Input.Password prefix={<Lock />} placeholder="Password" />

        <Button type="primary">Log in</Button>
      </Form>
    </AuthWrapper>
  );
}
