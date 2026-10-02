"use client";

import type { GameDetail } from "@/types/type";
import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Hero from "./Hero";
import GameInfo from "./GameInfo";
import GameMain from "./GameMain";
import GameDetailLoading from "@/components/skeletonLoading/GameDetailLoading";

async function getGameDetail(gameSlug: string) {
  const response = await fetch(`/api/game-detail/${gameSlug}`);
  if (!response.ok) {
    throw new Error("Failed to load game detail");
  }
  return response.json();
}

export default function GameDetail({ gameSlug }: { gameSlug: string }) {
  const { data, isLoading, isError } = useQuery<GameDetail>({
    queryKey: ["gameDetail", gameSlug],
    queryFn: () => getGameDetail(gameSlug),
  });
  if (isLoading) {
    return (
      <GameDetailLoading />
    );
  }
  if (isError || !data) {
    return <Box>Error</Box>;
  }
  return (
    <Stack sx={{ bgcolor: "darkSurface.bgGameDetail", pt: 1, px: 1 }} spacing={5}>
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
