import { Skeleton, Stack } from "@mui/material";

export default function GameMainLoading() {
  return (
    <Stack sx={{ pt: { xs: 2, md: 0 }, width: "100%" }} spacing={0.5}>
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
          width={40}
          height={40}
          sx={{ bgcolor: "skeleton.main" }}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1.5rem", bgcolor: "skeleton.main", width: "150px" }}
        />
      </Stack>
      <Stack
        sx={{
          bgcolor: "darkSurface.main",
          height: "100%",
          borderRadius: 5,
          p: 4,
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <Skeleton
            key={index}
            variant="text"
            sx={{ fontSize: "1.5rem", bgcolor: "skeleton.main" }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
