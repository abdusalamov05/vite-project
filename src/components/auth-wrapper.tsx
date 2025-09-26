import type { PropsWithChildren } from "react";
import { Card } from "antd";
import styled from "@emotion/styled";

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// `;

const CardHeader = styled.header`
  text-align: center;
`;

const CardTitle = styled.h3`
  margin-top: 24px;
  font-weigth: 600;
  font-size: 24px;
  line-heigth: 32px;
  color: #000;
  opacity: 0.88;
`;

const CardDescription = styled.p`
  margin-top: 4px;
  font-weigth: 400;
  font-size: 16px;
  line-heigth: 24px;
  color: #000;
  opacity: 0.88;
`;

const CardContent = styled.main`
  margin-top: 24px;
  text-align: center;
`;

type AuthWrapperProps = {
  title: string;
  description?: string;
};

export function AuthWrapper({
  title,
  description,
  children,
}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <Card>
      <CardHeader>
        <img src="/assets/images/logo.png" alt="logo" />
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
