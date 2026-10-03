import { dehydrate, HydrationBoundary, noop, QueryClient } from "@tanstack/react-query";
import GameDetail from "./GameDetail";
import { getGameDetail } from "@/lib/rawg";

async function getGame(gameSlug: string) {
  const response = await fetch(`/api/game-detail/${gameSlug}`);
  if (!response.ok) {
    throw new Error("Failed to load game detail");
  }
  return response.json();
}

export async function generateMetadata({ params }: { params: Promise<{ gameSlug: string }> }) {
  const { gameSlug } = await params;
  const game = await getGameDetail(gameSlug);
  return {
    title: game.name,
    description: game.description_raw,
    alternates: {
      canonical: `/${gameSlug}`,
    },
    openGraph: {
      title: game.name,
      description: game.description,
      images: [game.image],
    },
  };
}

export default async function GameDetailPage({ params }: { params: Promise<{ gameSlug: string }> }) {
  const { gameSlug } = await params;
  const queryClient = new QueryClient();
  await queryClient.query({
    queryKey: ["gameDetail", gameSlug],
    queryFn: () => getGame(gameSlug)
  }).catch(noop);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GameDetail gameSlug={gameSlug} />
    </HydrationBoundary>
  );
}