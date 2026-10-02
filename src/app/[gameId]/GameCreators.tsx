'use client';

import type { Creators } from "@/types/type";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

async function getCreators(id: string, page: number) {
  const response = await fetch(`/api/creators?id=${id}&page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch screenshots.');
  }
  return response.json();
}

export default function GameCreators({ id }: { id: string }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery<Creators>({
    queryKey: ['creators', id, page],
    queryFn: () => getCreators(id, page)
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
    <>
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
                alt={result.name}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: !result.image? 'contain' : "cover",
                }}
              />
            </Box>
            <Typography sx={{ color: 'darkSurface.text' }}>
              {result.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Pagination
          page={page}
          count={Math.ceil(data.count / 10)}
          onChange={(_, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: 'darkSurface.text',
              ':hover': {
                bgcolor: 'darkSurface.textGray'
              }
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "darkSurface.bgGold",
              color: "darkSurface.text",
              transition: 'opacity 0.2s',
              '&:hover': {
                bgcolor: 'darkSurface.bgGold',
                opacity: 0.7
              }
            },
          }}
        />
      </Stack>
    </>
  );
}