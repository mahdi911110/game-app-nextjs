import { getAllGames, getCreators } from "@/lib/rawg";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const genre = searchParams.get('genre');
    const filter = searchParams.get('filter');
    let response;
    if (genre) {
      response = await getAllGames(page ?? '1', genre);
    } else if (filter === 'creators') {
      response = await getCreators(page ?? '1');
    } else {
      response = await getAllGames(page ?? '1');
    }
    return Response.json(response);
  } catch(err) {
    console.error(err);
    return Response.json(
      { message: 'Failed to fetch games.' },
      { status: 500 }
    );
  }
}