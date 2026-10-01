import { getGameCreators } from "@/lib/rawg";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const page = searchParams.get('page') ?? '1';
    if (!id) {
      return Response.json(
        { message: 'Game ID is required.' },
        { status: 400 }
      );
    }
    const response = await getGameCreators(id, page);
    return Response.json(response);
  } catch(err) {
    console.error(err);
    return Response.json(
      { message: 'Failed to fetch creators.' },
      { status: 500 }
    );
  }
}