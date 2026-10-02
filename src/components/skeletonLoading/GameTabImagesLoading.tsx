import { Box, Skeleton, Stack } from "@mui/material";

export default function GameTabImagesLoading() {
  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {Array.from({ length: 6 }, (_, index) => (
        <Box
          key={index}
          sx={{
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
        >
          <Skeleton
            variant="rounded"
            width='100%'
            height='100%'
            animation="wave"
            sx={{ bgcolor: 'skeleton.main' }}
          />
        </Box>
      ))}
    </Stack>
  );
}