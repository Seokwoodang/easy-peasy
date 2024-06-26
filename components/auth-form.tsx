"use client";
import Link from "next/link";
import { useFormState } from "react-dom";

import { signup } from "@/action/auth-action";

export type FormState = {
  data: {
    email: string;
    password: string;
  };
  errors?: {
    email?: string;
    password?: string;
  };
  isSubmitting: boolean;
};

export default function AuthForm() {
  const [formState, formAction] = useFormState<FormState>(signup, {
    data: { email: "", password: "" },
    errors: {},
    isSubmitting: false,
  });
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
      {formState.errors && (
        <ul>
          {Object.keys(formState.errors).map((key) => {
            const errorMessage =
              formState.errors![key as keyof typeof formState.errors];
            return errorMessage && <li key={key}>{errorMessage}</li>;
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
