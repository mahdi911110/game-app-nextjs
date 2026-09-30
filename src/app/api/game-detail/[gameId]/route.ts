import { getGameDetail } from "@/lib/rawg";

export async function GET(
  requset: Request,
  { params }: { params: Promise<{ gameId: string }> },
) {
  try {
    const { gameId } = await params;
    const response = await getGameDetail(Number(gameId));
    return Response.json(response);
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: "Failed to load game detail." },
      { status: 500 },
    );
  }
}
