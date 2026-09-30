"use client";

import type { GameDetail } from "@/types/type";
import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Hero from "./Hero";
import GameInfo from "./GameInfo";
import GameMain from "./GameMain";

async function getGameDetail(gameId: number) {
  const response = await fetch(`/api/game-detail/${gameId}`);
  if (!response.ok) {
    throw new Error("Failed to load game detail");
  }
  return response.json();
}

export default function GameDetail({ gameId }: { gameId: number }) {
  const { data, isLoading, isError } = useQuery<GameDetail>({
    queryKey: ["gameDetail", gameId],
    queryFn: () => getGameDetail(gameId),
  });
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  if (isError || !data) {
    return <Box>Error</Box>;
  }
  return (
    <Stack sx={{ bgcolor: "rgb(30, 30, 30)", pt: 1, px: 1 }} spacing={5}>
      <Hero data={data} />
      <Stack
        direction="row"
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        spacing={{ md: 3 }}
      >
        <GameInfo data={data} />
        <GameMain data={data} />
      </Stack>
    </Stack>
  );
}
