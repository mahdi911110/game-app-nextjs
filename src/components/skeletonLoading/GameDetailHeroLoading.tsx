import { Box, Skeleton, Stack } from "@mui/material";

export default function GameDetailHeroLoading() {
  return (
    <Stack sx={{ flexWrap: "wrap" }} direction="row" spacing={3}>
      <Box
        sx={{
          display: { md: "flex" },
          width: { xs: "100%", md: "100%", lg: "calc(33.333% - 11px)" },
          justifyContent: { md: "center", lg: "start" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              md: "calc(70% - 8px)",
              lg: "100%",
            },
            aspectRatio: "16/9",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height="100%"
            sx={{ bgcolor: "skeleton.main" }}
          />
        </Box>
      </Box>
      <Stack sx={{ justifyContent: "end" }}>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "2rem", width: "300px", bgcolor: "skeleton.main" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "2rem", width: "400px", bgcolor: "skeleton.main" }}
        />
        <Stack sx={{ color: "darkSurface.textGray", pt: 1 }} spacing={2}>
          <Skeleton
            variant="circular"
            animation="wave"
            sx={{
              fontSize: "1.5rem",
              width: "150px",
              bgcolor: "skeleton.main",
              borderRadius: 6,
            }}
          />
          <Skeleton
            variant="circular"
            animation="wave"
            sx={{
              fontSize: "1.5rem",
              width: "150px",
              bgcolor: "skeleton.main",
              borderRadius: 6,
            }}
          />
          <Skeleton
            variant="circular"
            animation="wave"
            sx={{
              fontSize: "1.5rem",
              width: "150px",
              bgcolor: "skeleton.main",
              borderRadius: 6,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
