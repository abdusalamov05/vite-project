import { AuthWrapper } from "./auth-wrapper";
import { Input } from "antd";

export function TwoFactorForm() {
  return (
    <AuthWrapper
      title="Two-Factor Authentication"
      description="Enter the 6-digit code from the Google Authenticator app"
    >
      <Input.OTP length={6} autoFocus />
    </AuthWrapper>
  );
}
