'use server';

import { deleteGame } from "@/lib/gamedb";
import { getCurrentUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function buttonDeleteAction(gameId: number, prevState: null, formData: FormData) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  deleteGame(Number(user.id), gameId);
  return null;
}