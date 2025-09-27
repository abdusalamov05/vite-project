import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { Login } from "@/api";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: Login,
    onSuccess: () => {
      setTimeout(() => {
        navigate("/2fa");
      }, 1500);
    },
  });
};
