import type { LoginCredentials, TwoFactorCredentials } from "@/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Login = async (credentials: LoginCredentials) => {
  await delay(1000);

  if (
    credentials.email === "user@example.com" &&
    credentials.password === "123456"
  ) {
    return {
      success: true,
      message: "Login successful",
      data: {
        token: "mock-jwt-token",
        user: {
          id: "1",
          name: "Demo User",
          email: credentials.email,
        },
      },
    };
  }

  throw new Error("Invalid email or password");
};

export const TwoFactor = async (credentials: TwoFactorCredentials) => {
  await delay(800);

  if (credentials.code === "123456") {
    return {
      success: true,
      message: "2FA successful",
      data: {
        token: "mock-jwt-token",
        user: {
          id: "1",
          name: "Demo User",
          email: credentials.email,
        },
      },
    };
  }

  throw new Error("Invalid 2FA code");
};
