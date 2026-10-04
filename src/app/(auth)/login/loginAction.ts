"use server";

import { signIn } from "@/lib/auth";
import z from "zod";

const LoginData = z.object({
  usernameOrEmail: z.string().min(1, 'Fields must not be empty.'),
  password: z.string().min(1, 'Fields must not be empty.'),
});

type PrevState = {
  errors?: {
    usernameOrEmail?: string;
    password?: string;
  };
  error?: string;
};

export async function loginAction(
  prevState: PrevState | null | undefined,
  formData: FormData,
) {
  const userLoginData = {
    usernameOrEmail: formData.get("usernameOrEmail"),
    password: formData.get("password"),
  };

  const result = LoginData.safeParse(userLoginData);

  if (!result.success) {
    const errors: PrevState['errors'] = {};
    
    for (const issue of result.error.issues) {
      const field = issue.path[0];

      if (
        field === 'usernameOrEmail' ||
        field === 'password'
      ) {
        errors[field] ??= issue.message;
      }
    }

    return { errors };
  }

  const data = result.data;

  try {
    await signIn("credentials", {
      usernameOrEmail: data.usernameOrEmail,
      password: data.password,
      redirectTo: "/",
    });
  } catch (err) {
    console.error(err);
    return { error: "Wrong password or invalid username or email." };
  }
}
