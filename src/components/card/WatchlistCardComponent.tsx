'use client';

import { Box, Grid, Stack } from "@mui/material";
import type { GameItem } from "@/types/type";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/footer/Pagination";
import { usePathname } from "next/navigation";
import GamesLoading from "../skeletonLoading/GamesLoading";

async function getWatchlistGames(page = 1) {
  const response = await fetch(`/api/watchlist?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to load watchlist');
  }
  return response.json();
}

export default function WatchlistCardComponent({ page = 1, totalPages }: { page: number, totalPages: number }) {
  const { data, isError, isPending } = useQuery<GameItem[]>({
    queryKey: ['watchlist-list', page],
    queryFn: () => getWatchlistGames(page)
  });
  const pathName = usePathname();
  const url = `${pathName}?`;
  if (isPending) {
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
  if (data.length === 0) {
    return (
      <Box sx={{ minHeight: '80vh', color: 'darkSurface.text' }}>
        your watchlist is empty.
      </Box>
    );
  }
  return (
    <Stack sx={{ minHeight: '80vh' }}>
      <Grid spacing={2} container>
        {data.map((gameItem) => (
          <Card key={gameItem.id} gameItem={gameItem} />
        ))}
      </Grid>
      <Stack direction="row" sx={{ width: '100%', justifyContent: 'center', py: 2, mt: 'auto' }}>
        <PaginationComponent
          url={url}
          page={page}
          totalPage={totalPages}
        />
      </Stack>
    </Stack>
  );
}