import { Stack } from "@mui/material";
import GameDetailHeroLoading from "./GameDetailHeroLoading";
import GameInfoLoading from "./GameInfoLoading";
import GameMainLoading from "./GameMainLoading";

export default function GameDetailLoading() {
  return (
    <Stack
      sx={{ bgcolor: "darkSurface.bgGameDetail", pt: 1, px: 1, pb: 2 }}
      spacing={5}
    >
      <GameDetailHeroLoading />
      <Stack
        direction="row"
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" }, width: "100%" }}
        spacing={{ md: 3 }}
      >
        <GameInfoLoading />
        <GameMainLoading />
      </Stack>
    </Stack>
  );
}
