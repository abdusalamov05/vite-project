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

const User = styled(UserOutlined)`
  color: #000;
  opacity: 0.45;
`;

const Lock = styled(LockOutlined)`
  color: #000;
  opacity: 0.45;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: start;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: start;
`;

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, isSuccess, error, data } =
    useLoginMutation();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    mutate({ email, password });
  };

  return (
    <AuthWrapper title="Sign in to your account to continue">
      <Form onSubmit={handleSubmit}>
        <Input
          prefix={<User />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          disabled={isPending}
        />

        <Input.Password
          prefix={<Lock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={isPending}
        />

        {isError && <ErrorMessage>{error?.message}</ErrorMessage>}

        {isSuccess && <SuccessMessage>{data?.message}</SuccessMessage>}

        <Button
          type="primary"
          htmlType="submit"
          loading={isPending}
          disabled={!isFormValid}
        >
          Log in
        </Button>
      </Form>
    </AuthWrapper>
  );
}
