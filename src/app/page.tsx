import CardComponent from "@/components/card/CardComponent";
import { Box } from "@mui/material";
import { dehydrate, HydrationBoundary, noop, QueryClient } from "@tanstack/react-query";

async function getGames(page: number, genre = '', search = '') {
  const response = await fetch(`/api/games?page=${page}${genre ? `&genre=${genre}` : ''}${search ? `&search=${search}` : ''}`);
  if (!response.ok) {
    throw new Error('Failed to load games');
  }
  return response.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string, genre?: string, search?: string }>;
}) {
  const { page, genre, search } = await searchParams;
  let newGenre = genre;
  let newSearch = search;
  if (genre === undefined) {
    newGenre = '';
  }
  if (search === undefined) {
    newSearch = '';
  }
  const queryClient = new QueryClient();
  await queryClient.query({
    queryKey: ['games', page, newGenre, newSearch],
    queryFn: () => getGames(Number(page), newGenre, newSearch)
  }).catch(noop);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Box sx={{ pt: 1, px: 1, bgcolor: 'darkSurface.bg' }}>
        <CardComponent
          page={((page !== "") && (page !== undefined)) ? Number(page) : 1}
          genre={(genre && (genre !== '')) ? genre : ''}
          search={search ?? ''}
        />
      </Box>
    </HydrationBoundary>
  );
}
