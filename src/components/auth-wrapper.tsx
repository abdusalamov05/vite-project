import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { Card } from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const CardTitle = styled.h3`
  font-weigth: 600;
  font-size: 24px;
  line-heigth: 32px;
  color: #000;
  opacity: 0.88;
`;

const CardDescription = styled.p`
  font-weigth: 400;
  font-size: 16px;
  line-heigth: 24px;
  color: #000;
  opacity: 0.88;
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
    <Wrapper>
      <Card>
        <img src="/assets/images/logo.png" alt="logo" />

        <main>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}

          {children}
        </main>
      </Card>
    </Wrapper>
  );
}
