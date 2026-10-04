import { getAllGamesWithPage } from "@/lib/gamedb";
import { getGameDetail } from "@/lib/rawg";
import { getCurrentUser } from "@/lib/user";
import { GameDetail } from "@/types/type";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      redirect("/login");
    }

    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') ?? '1';

    const gameIds = getAllGamesWithPage(Number(user.id), Number(page));

    const games: GameDetail[] = await Promise.all(
      gameIds.map(async (game) => {
        return await getGameDetail(String(game.game_id)) as GameDetail;
      })
    );

    return Response.json(games);
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Failed to load games" },
      { status: 500 }
    );
  }
}