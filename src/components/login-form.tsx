import { useState } from "react";
import { useLoginMutation } from "@/hooks/use-login";
import { AuthWrapper } from "./auth-wrapper";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, isSuccess, error, data } =
    useLoginMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <AuthWrapper title="Sign in to your account to continue">
      <Form onSubmit={handleSubmit}>
        <Input
          prefix={<UserOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          disabled={isPending}
        />

        <Input.Password
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={isPending}
        />

        {isError && <p style={{ color: "red" }}>{error?.message}</p>}
        {isSuccess && <p style={{ color: "green" }}>{data?.message}</p>}

        <Button type="primary" htmlType="submit" loading={isPending}>
          Log in
        </Button>
      </Form>
    </AuthWrapper>
  );
}
