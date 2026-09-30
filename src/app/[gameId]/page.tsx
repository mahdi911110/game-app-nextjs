import GameDetail from "./GameDetail";

export default async function GameDetailPage({ params }: { params: Promise<{ gameId: number }> }) {
  const { gameId } = await params;
  return (
    <GameDetail gameId={gameId} />
  );
}