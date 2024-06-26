"use server";

import { FormState } from "@/components/auth-form";
import supabase from "@/supabase/supabaseClient";

export async function signup(
  prevData: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;
  const nickname = formData.get("nickname") as string;
  const password = formData.get("password") as string;

  let errors: { email?: string; password?: string } = {};

  if (!email.includes("@")) {
    console.log("이메일에러!!");
    errors.email = "Please enter a valid email address";
  } else {
    errors.email = "";
  }

  if (password.trim().length < 6) {
    console.log("비밀번호 길이 에러!!");
    errors.password = "Password must be at least 6 characters long";
  } else {
    errors.password = "";
  }

  // if (Object.keys(errors).length > 0) {
  //   return {
  //     data: { email, password, nickname },
  //     errors,
  //     isSubmitting: false,
  //   };
  // }

  console.log("nnnn");
  try {
    console.log("후후후");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    console.log("회원가입 성공!!");

    await supabase.from("USER-DATA").insert({
      email,
      nickname,
      created_at: data.user?.created_at,
      uuid: data.user?.id,
    });

    console.log("성공!!!");
  } catch (error) {
    console.log(error);
    return {
      data: { email, password, nickname },
      errors: { email: error.message },
      isSubmitting: false,
    };
  }

  return {
    data: { email, password, nickname },
    errors: {},
    isSubmitting: false,
  };
}
