import { getGameDetail } from "@/lib/rawg";

export async function GET(
  requset: Request,
  { params }: { params: Promise<{ gameSlug: string }> },
) {
  try {
    const { gameSlug } = await params;
    const response = await getGameDetail(gameSlug);
    return Response.json(response);
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: "Failed to load game detail." },
      { status: 500 },
    );
  }
}
