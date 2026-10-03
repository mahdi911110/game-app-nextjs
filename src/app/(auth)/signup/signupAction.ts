'use server';

import { signup } from "@/lib/gamedb";
import type { PrevState } from "@/types/type";

export async function signupAction(prevState: PrevState, formData: FormData) {
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const passwordAgain = formData.get('passwordAgain') as string;

  if (password !== passwordAgain) {
    return { error: "Passwords dosen't match." };
  }

  if (!username || !email || !password || !passwordAgain) {
    return { error: 'Fields must not be empty.' };
  }

  const result = await signup(
    username,
    email,
    password
  );

  if (result?.error) {
    return { error: result.error };
  }
}