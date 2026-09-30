'use client';

import type { Screenshots } from "@/types/type";
import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

async function getScreenShots(id: string) {
  const response = await fetch(`/api/screenshots?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch screenshots.');
  }
  return response.json();
}

export default function GameScreenShots({ id, name }: { id: string, name: string }) {
  const { data, isLoading, isError } = useQuery<Screenshots>({
    queryKey: ['screenshots', id],
    queryFn: () => getScreenShots(id)
  });
  if (isLoading) {
    return (
      <Box>
        Loading...
      </Box>
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
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {data.results.map((result) => (
        <Box
          key={result.id}
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              sm: "calc(50% - 8px)",
              lg: "calc(33.333% - 11px)",
            },
            aspectRatio: "16 / 9",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={result.image}
            alt={name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}