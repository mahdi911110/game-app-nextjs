'use server';

import { addGame } from "@/lib/gamedb";
import { getCurrentUser } from "@/lib/user";
import { redirect } from "next/navigation";

type PrevState = {
  error: string;
} | {
  success: boolean;
} | null;

export async function buttonAddAction(id: number, prevState: PrevState, formData: FormData) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  const game = addGame(Number(user.id), id);

  if (game?.error) {
    return { error: game.error };
  }
  return { success: true };
}