"use server";

import { FormState } from "@/components/auth-form";

export const testing = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  console.log(formData.get("email"));
  console.log("ndndndn");
  return {
    data: {
      email: "sss",
      password: "sss",
      nickname: "sss",
    },
    errors: {},
    isSubmitting: false,
  };
};
