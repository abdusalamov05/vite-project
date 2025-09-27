import { useState, useEffect } from "react";
import { useTwoFactorMutation } from "@/hooks/use-two-factor";
import { AuthWrapper } from "./auth-wrapper";
import { Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import styled from "@emotion/styled";

const ArrowLeft = styled(Link)`
  position: absolute;
  top: 32px;
  left: 32px;
  color: #000;
  opacity: 0.88;
`;

const TimerText = styled.p`
  margin-top: 16px;
  color: #000;
  opacity: 0.88;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: red;
  text-align: start;
`;

const SuccessMessage = styled.p`
  margin-top: 5px;
  color: green;
  text-align: start;
`;

export function TwoFactorForm() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const { mutate, isPending, isSuccess, isError, error, data } =
    useTwoFactorMutation();

  useEffect(() => {
    if (isSuccess || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSuccess, timeLeft]);

  const handleSubmit = () => mutate({ email: "user@example.com", code });
  const handleResend = () => setTimeLeft(60);

  return (
    <AuthWrapper
      title="Two-Factor Authentication"
      description="Enter the 6-digit code from the Google Authenticator app"
    >
      <ArrowLeft to="/">
        <ArrowLeftOutlined />
      </ArrowLeft>

      <Input.OTP
        size="large"
        length={6}
        autoFocus
        value={code}
        onChange={setCode}
        status={isError ? "error" : undefined}
      />

      {isError && <ErrorMessage>{error?.message}</ErrorMessage>}
      {isSuccess && <SuccessMessage>{data?.message}</SuccessMessage>}

      {timeLeft > 0 && code.length < 6 ? (
        <TimerText>
          Get a new code in {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
          :{String(timeLeft % 60).padStart(2, "0")}
        </TimerText>
      ) : null}

      {code.length === 6 ? (
        <StyledButton
          onClick={handleSubmit}
          loading={isPending}
          disabled={isError}
          type="primary"
          block
        >
          Continue
        </StyledButton>
      ) : null}

      {timeLeft === 0 ? (
        <StyledButton onClick={handleResend} block>
          Get new code
        </StyledButton>
      ) : null}
    </AuthWrapper>
  );
}
