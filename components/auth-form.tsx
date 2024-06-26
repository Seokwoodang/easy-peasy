"use client";
import Link from "next/link";
import { useFormState } from "react-dom";

import { signup } from "@/action/auth-action";
import { testing } from "@/action/test-action";

export type FormState = {
  data: {
    email: string;
    password: string;
    nickname: string;
  };
  errors?: {
    email?: string;
    password?: string;
  };
  isSubmitting: boolean;
};

export default function AuthForm() {
  const [formState, formAction] = useFormState<FormState>(signup, {
    data: { email: "ssssss", password: "", nickname: "" },
    errors: {},
    isSubmitting: false,
  });

  console.log(formState);

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        <label htmlFor="nickname">Nickname</label>
        <input name="nickname" id="nickname" />
      </p>
      {formState.errors && (
        <ul>
          {Object.keys(formState.errors).map((error) => {
            const errorMessage =
              formState.errors![error as keyof typeof formState.errors];
            return errorMessage && <li key={error}>{errorMessage}</li>;
          })}
        </ul>
      )}
      <p>
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
