"use client";

import { useQuery } from "@tanstack/react-query";
import ButtonAdd from "./ButtonAdd";
import ButtonDelete from "./ButtonDelete";

async function getGame() {
  const response = await fetch('/api/get-game');
  if (!response.ok) {
    throw new Error('Failed to load buttons status.');
  }
  return response.json();
}

export default function ButtonForm({
  gameId,
}: {
  gameId: number;
}) {
  const { data } = useQuery<{ game_id: number }[]>({
    queryKey: ['watchlist-status'],
    queryFn: getGame
  });
  if (data?.length === 0) {
    return <ButtonAdd id={gameId} />;
  }
  const added = data?.some((item) => item.game_id === gameId);
  return (
    <>{added ? <ButtonDelete id={gameId} /> : <ButtonAdd id={gameId} />}</>
  );
}
