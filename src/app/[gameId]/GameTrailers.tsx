"use client";

import type { Trailers } from "@/types/type";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import BrowserNotSupportedIcon from "@mui/icons-material/BrowserNotSupported";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

async function getGameTrailers(id: string) {
  const response = await fetch(`/api/trailers?id=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch trailers.");
  }
  return response.json();
}

export default function GameTrailers({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery<Trailers>({
    queryKey: ["GameTrailers", id],
    queryFn: () => getGameTrailers(id),
  });
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  if (isError || !data) {
    return <Box>Error</Box>;
  }
  if (data.results.length === 0) {
    return (
      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
        <BrowserNotSupportedIcon fontSize="small" sx={{ color: "darkSurface.text" }} />
        <Box sx={{ color: "darkSurface.text" }}>No videos found</Box>
      </Stack>
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
            },
          }}
        >
          <MediaPlayer
            title={result.name}
            src={result.data["480"]}
            poster={result.preview}
            aspectRatio="16/9"
          >
            <MediaProvider />
            <DefaultVideoLayout
              icons={defaultLayoutIcons}
            />
          </MediaPlayer>
            <Typography sx={{ color: 'darkSurface.text' }}>
              {result.name}
            </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
