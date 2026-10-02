'use client';

import { Box, Grid, Stack } from "@mui/material";
import type { Game, GameItem } from "@/types/type";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/footer/Pagination";
import { usePathname } from "next/navigation";
import GamesLoading from "../skeletonLoading/GamesLoading";

async function getGames(page: number, genre = '', search = '') {
  const response = await fetch(`/api/games?page=${page}${genre ? `&genre=${genre}` : ''}${search ? `&search=${search}` : ''}`);
  if (!response.ok) {
    throw new Error('Failed to load games');
  }
  return response.json();
}

export default function CardComponent({ page = 1, genre = '', search = '' }: { page: number, genre: string, search: string }) {
  const { data, isError, isLoading } = useQuery<Game>({
    queryKey: ['games', page, genre, search],
    queryFn: () => getGames(page, genre, search)
  });
  const gameItems: GameItem[] = data?.results ?? [];
  const pathName = usePathname();
  const url = `${pathName}?${genre ? `genre=${genre}&` : ''}${search ? `search=${search}&` : ''}`;
  if (isLoading) {
    return (
      <GamesLoading />
    );
  }
  if (isError || !data) {
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
          totalPage={Math.ceil(data.count / 20)}
        />
      </Stack>
    </>
  );
}