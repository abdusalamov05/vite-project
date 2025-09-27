import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { LoginForm, TwoFactorForm } from "@/components";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginForm,
  },
  {
    path: "/2fa",
    Component: TwoFactorForm,
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
