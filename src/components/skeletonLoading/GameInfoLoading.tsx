import { Box, Skeleton, Stack } from "@mui/material";

export default function GameInfoLoading() {
  return (
    <Stack sx={{ width: { xs: "100%", md: "auto" } }} spacing={0.5}>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          fontWeight: "bold",
          color: "darkSurface.text",
        }}
        spacing={1}
      >
        <Skeleton
          variant="circular"
          animation="wave"
          width={40}
          height={40}
          sx={{ bgcolor: "skeleton.main" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "1.6rem", width: "100px", bgcolor: "skeleton.main" }}
        />
      </Stack>
      <Stack
        sx={{
          bgcolor: "darkSurface.bgDetails",
          borderRadius: 3,
          p: 2,
          width: { xs: "100%", md: "300px", lg: "400px" },
        }}
        spacing={2}
      >
        {Array.from({ length: 11 }, (_, index) => (
          <Stack direction="row" key={index} spacing={1}>
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
              sx={{ bgcolor: "skeleton.main" }}
            />
            <Stack>
              <Box sx={{ color: "darkSurface.text" }}>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    fontSize: "1rem",
                    width: "100px",
                    bgcolor: "skeleton.main",
                  }}
                />
              </Box>
              <Stack
                direction="row"
                sx={{ color: "darkSurface.textGray", flexWrap: "wrap" }}
              >
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    fontSize: "1rem",
                    width: "200px",
                    bgcolor: "skeleton.main",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
