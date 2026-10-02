import { Box, Grid, Skeleton, Stack } from "@mui/material";

export default function GamesLoading() {
  return (
    <>
      <Grid spacing={2} container>
        {Array.from({ length: 20 }, (_, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{
              transition: "transform 0.3s",
              aspectRatio: "16/9",
              bgcolor: "skeleton.bg",
              textDecoration: "none",
              pb: 1,
              borderRadius: 3,
            }}
          >
            <Skeleton
              variant="rounded"
              animation="wave"
              width="100%"
              height="100%"
              sx={{ bgcolor: "skeleton.main" }}
            />
            <Stack spacing={1}>
              <Box sx={{ pl: 2 }}>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem", bgcolor: "skeleton.main" }}
                  width="50%"
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem", bgcolor: "skeleton.main" }}
                  width="30%"
                />
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack
        direction="row"
        sx={{ width: "100%", justifyContent: "center", py: 2 }}
      >
        {Array.from({ length: 7 }, (_, index) => (
          <Skeleton
            key={index}
            animation="wave"
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: "skeleton.main", mr: 1 }}
          />
        ))}
      </Stack>
    </>
  );
}
