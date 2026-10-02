import { dehydrate, HydrationBoundary, noop, QueryClient } from "@tanstack/react-query";
import GameDetail from "./GameDetail";

async function getGameDetail(gameSlug: string) {
  const response = await fetch(`/api/game-detail/${gameSlug}`);
  if (!response.ok) {
    throw new Error("Failed to load game detail");
  }
  return response.json();
}

export default async function GameDetailPage({ params }: { params: Promise<{ gameSlug: string }> }) {
  const { gameSlug } = await params;
  const queryClient = new QueryClient();
  await queryClient.query({
    queryKey: ["gameDetail", gameSlug],
    queryFn: () => getGameDetail(gameSlug)
  }).catch(noop);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GameDetail gameSlug={gameSlug} />
    </HydrationBoundary>
  );
}