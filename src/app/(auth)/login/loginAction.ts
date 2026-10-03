'use server';

import { signIn } from "@/lib/auth";
import type { PrevState } from "@/types/type";

export async function loginAction(prevState: PrevState, formData: FormData) {
  const usernameOrEmail = formData.get('usernameOrEmail');
  const password = formData.get('password');
  
  if (!usernameOrEmail || !password) {
    return { error: 'Wrong password or invalid username or email.' };
  }

  try {
    await signIn('credentials', {
      usernameOrEmail,
      password,
      redirectTo: '/'
    });
  } catch(err) {
    console.error(err);
    return { error: 'Wrong password or invalid username or email.' };
  }
}