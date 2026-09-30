import { getGameScreenShots } from "@/lib/rawg";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return Response.json(
        { message: "Game ID is required." },
        { status: 400 }
      );
    }
    const response = await getGameScreenShots(id);
    return Response.json(response);
  } catch(err) {
    console.error(err);
    return Response.json(
      { message: 'Failed to load screenshots.' },
      { status: 500 }
    );
  }
}