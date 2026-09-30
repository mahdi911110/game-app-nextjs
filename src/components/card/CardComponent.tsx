'use client';

import { Box, Grid, Stack } from "@mui/material";
import type { Game, GameItem } from "@/types/type";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/footer/Pagination";
import { usePathname } from "next/navigation";

async function getGames(page: number, genre = '', filter = '') {
  const response = await fetch(`/api/games?page=${page}${genre ? `&genre=${genre}` : ''}${filter ? `&filter=${filter}` : ''}`);
  if (!response.ok) {
    throw new Error('Failed to load games');
  }
  return response.json();
}

export default function CardComponent({ page = 1, genre = '', filter = '' }: { page: number, genre: string, filter: string }) {
  const { data, isError, isLoading } = useQuery<Game>({
    queryKey: ['games', page, genre, filter],
    queryFn: () => getGames(page, genre, filter)
  });
  const gameItems: GameItem[] = data?.results ?? [];
  const pathName = usePathname();
  const url = `${pathName}?${genre ? `genre=${genre}&` : ''}${filter ? `filter=${filter}&` : ''}`;
  if (isLoading) {
    return (
      <Box>
        Loading...
      </Box>
    );
  }
  if (isError) {
    return (
      <Box>
        Error
      </Box>
    );
  }
  return (
    <>
      <Grid spacing={2} container>
        {gameItems?.map((gameItem: GameItem) => (
          <Card key={gameItem.id} gameItem={gameItem} />
        ))}
      </Grid>
      <Stack direction="row" sx={{ width: '100%', justifyContent: 'center', py: 2 }}>
        <PaginationComponent
          url={url}
          page={page}
          totalPage={100}
        />
      </Stack>
    </>
  );
}