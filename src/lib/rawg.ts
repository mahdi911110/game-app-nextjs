import '@/lib/proxyAgent';

export async function getAllGames(page: string = '1', genre: string = '', search = '') {
  const url = new URL('https://api.rawg.io/api/games');
  url.searchParams.set('key', process.env.API_KEY as string);
  url.searchParams.set('page', page);
  if (genre !== '') {
    url.searchParams.set('genres', genre);
  }
  if (search !== '') {
    url.searchParams.set('search', search);
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch games.');
  }
  return response.json();
}

export async function getGameDetail(slug: string) {
  const url = new URL(`https://api.rawg.io/api/games/${slug}`);
  url.searchParams.set('key', process.env.API_KEY as string);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch game detail.');
  }
  return response.json();
}

export async function getGameScreenShots(id: string) {
  const url = new URL(`https://api.rawg.io/api/games/${id}/screenshots`);
  url.searchParams.set('key', process.env.API_KEY as string);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch screenshots.');
  }
  return response.json();
}

export async function getGamesTrailer(id: string) {
  const url = new URL(`https://api.rawg.io/api/games/${id}/movies`);
  url.searchParams.set('key', process.env.API_KEY as string);
  const response  = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch trailers.');
  }
  return response.json();
}

export async function getGameCreators(id: string, page: string) {
  const url = new URL(`https://api.rawg.io/api/games/${id}/development-team`);
  url.searchParams.set('key', process.env.API_KEY as string);
  url.searchParams.set('page', String(page));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch game creators.');
  }
  return response.json();
}