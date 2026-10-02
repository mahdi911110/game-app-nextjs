"use client";

import type { Screenshots } from "@/types/type";
import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

async function getScreenShots(id: string) {
  const response = await fetch(`/api/screenshots?id=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch screenshots.");
  }
  return response.json();
}

export default function GameScreenShots({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const { data, isLoading, isError } = useQuery<Screenshots>({
    queryKey: ["screenshots", id],
    queryFn: () => getScreenShots(id),
  });
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(
    null,
  );
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  if (isError || !data) {
    return <Box>Error</Box>;
  }
  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {data.results.map((result, index) => (
        <Button
          key={result.id}
          sx={{
            ':hover': {
              transform: 'scale(1.03)'
            },
            transition: 'transform 0.3s',
            p: 0,
            borderRadius: 2,
            overflow: 'hidden',
            width: {
              xs: "100%",
              sm: "calc(50% - 8px)",
              lg: "calc(33.333% - 11px)",
            },
            aspectRatio: "16 / 9",
          }}
          onClick={() => setSelectedScreenshot(index)}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
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
        </Button>
      ))}
      <Modal
        open={selectedScreenshot !== null}
        onClose={() => setSelectedScreenshot(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "95vw",
              md: "80vw",
            },
            maxWidth: 1400,
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: 2,
            outline: "none",
          }}
        >
          {selectedScreenshot !== null && (
            <>
              <Image
                src={data.results[selectedScreenshot].image}
                alt={name}
                fill
                sizes="95vw"
                style={{
                  objectFit: "contain",
                }}
              />
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <IconButton
                  onClick={() =>
                    setSelectedScreenshot((prev) =>
                      prev !== null ? prev - 1 : prev,
                    )
                  }
                  disabled={selectedScreenshot === 0}
                >
                  <KeyboardArrowLeftIcon sx={{ color: "white" }} />
                </IconButton>
                <Box
                  sx={{
                    color: "darkSurface.text",
                    zIndex: 1,
                    mt: "auto",
                    bgcolor: "darkSurface.sidebarText",
                    px: 1,
                    borderRadius: 1,
                    mb: 1,
                    opacity: 0.7,
                  }}
                >
                  pic: {selectedScreenshot + 1} / {data.results.length}
                </Box>
                <IconButton
                  onClick={() =>
                    setSelectedScreenshot((prev) =>
                      prev !== null ? prev + 1 : prev,
                    )
                  }
                  disabled={selectedScreenshot === data.results.length - 1}
                >
                  <KeyboardArrowRightIcon sx={{ color: "darkSurface.text" }} />
                </IconButton>
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </Stack>
  );
}
