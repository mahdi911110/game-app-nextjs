import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
import type { GameItem } from "@/types/type";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";

export default function Card({ gameItem }: { gameItem: GameItem }) {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      sx={{
        ":hover": { transform: "scale(1.03)" },
        transition: "transform 0.3s",
        bgcolor: "darkSurface.main",
        color: "darkSurface.text",
        textDecoration: "none",
        pb: 1,
        overflow: "hidden",
        borderRadius: 3,
      }}
      component={Link}
      href={`/${gameItem.slug}`}
    >
      <Stack spacing={1}>
        <Box
          sx={{ position: "relative", minWidth: "100px", aspectRatio: "16/9" }}
        >
          <Image
            src={gameItem.background_image ?? "/no-image.svg"}
            alt={gameItem.name}
            fill
          />
        </Box>
        <Box sx={{ pl: 2 }}>
          <Box>{gameItem.name}</Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: 13,
            }}
          >
            <StarIcon sx={{ color: "darkSurface.bgGold", fontSize: 13 }} />
            {gameItem.rating}({gameItem.reviews_count})
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
}
