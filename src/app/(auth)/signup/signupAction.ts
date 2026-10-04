"use server";

import { signup } from "@/lib/gamedb";
import z from "zod";

type PrevState = {
  errors?: {
    username?: string;
    email?: string;
    password?: string;
    passwordAgain?: string;
    form?: string;
  };
};

const SignupData = z
  .object({
    username: z.string().min(1, "Fields must not be empty."),
    email: z.string().min(1, "Fields must not be empty."),
    password: z.string().min(1, "Fields must not be empty."),
    passwordAgain: z.string().min(1, "Fields must not be empty."),
  })
  .refine((data) => data.password === data.passwordAgain,
  {
    message: 'Passwords don\'t match.',
    path: ['passwordAgain']
  });

export async function signupAction(
  prevState: PrevState | null | undefined,
  formData: FormData,
) {
  const userSignupData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordAgain: formData.get("passwordAgain"),
  };

  const result = SignupData.safeParse(userSignupData);

  if (!result.success) {
    const errors: PrevState["errors"] = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0];

      if (
        field === "username" ||
        field === "email" ||
        field === "password" ||
        field === "passwordAgain"
      ) {
        errors[field] ??= issue.message;
      }
    }

    return { errors };
  }

  const data = result.data;

  const signupResult = await signup(data.username, data.email, data.password);

  if (signupResult?.error) {
    return { error: signupResult.error };
  }
}
