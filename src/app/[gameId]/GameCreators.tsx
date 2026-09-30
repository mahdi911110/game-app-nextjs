'use client';

import type { Creators } from "@/types/type";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

async function getCreators(id: string) {
  const response = await fetch(`/api/creators?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch screenshots.');
  }
  return response.json();
}

export default function GameCreators({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery<Creators>({
    queryKey: ['creators', id],
    queryFn: () => getCreators(id)
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
        <Stack
          key={result.id}
          spacing={1}
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 8px)",
              lg: "calc(33.333% - 11px)",
            }
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: '100%',
              aspectRatio: "16 / 9",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={!result.image ? 'no-image.svg' : result.image}
              alt="test"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Typography sx={{ color: 'white' }}>
            {result.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}