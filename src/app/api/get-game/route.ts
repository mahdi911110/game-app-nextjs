import { getAllGames } from "@/lib/gamedb";
import { getCurrentUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      redirect('/login');
    }
    const game = getAllGames(Number(user.id));
    return Response.json(game);
  } catch(err) {
    console.log(err);
    return Response.json(
      { message: 'Failed to load button status' },
      { status: 500 }
    );
  }
}