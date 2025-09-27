import { useMutation } from "@tanstack/react-query";
import { TwoFactor } from "@/api";

export const useTwoFactorMutation = () => {
  return useMutation({
    mutationFn: TwoFactor,
  });
};
