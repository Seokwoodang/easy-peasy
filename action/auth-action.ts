"use server";

import { FormState } from "@/components/auth-form";

export async function signup(formData: FormState): Promise<FormState> {
  // const email = formData.get("email") as string;
  // const password = formData.get("password") as string;
  const { email, password } = formData.data;

  let errors: { email?: string; password?: string } = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return {
      data: { email, password },
      errors,
      isSubmitting: false,
    };
  }

  return {
    data: { email, password },
    errors: {},
    isSubmitting: false,
  };
}
