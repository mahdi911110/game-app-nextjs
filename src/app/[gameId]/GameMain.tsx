import type { GameDetail } from "@/types/type";
import { Stack, Typography } from "@mui/material";
import MediaTabs from "./MediaTabs";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DOMPurify from "dompurify";


export default function GameMain({ data }: { data: GameDetail }) {
  const cleanDescription = DOMPurify.sanitize(data.description);
  return (
    <Stack sx={{ pt: { xs: 2 } }} spacing={1}>
      <Stack
        direction="row"
        sx={{ alignItems: "center", fontWeight: "bold", color: "white" }}
        spacing={1}
      >
        <AutoStoriesIcon
          sx={{
            color: "gold",
            fontSize: "30px",
            p: 1,
            bgcolor: "rgba(180, 175, 113, 0.68)",
            borderRadius: "100%",
          }}
        />
        <Typography sx={{ fontSize: "30px" }}>Summary</Typography>
      </Stack>
      <Typography
        sx={{ color: "white", bgcolor: "black", p: 4, borderRadius: 5 }}
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      >
      </Typography>
      <Stack
        direction="row"
        sx={{ alignItems: "center", fontWeight: "bold", color: "white" }}
        spacing={1}
      >
        <OndemandVideoIcon
          sx={{
            color: "gold",
            fontSize: "30px",
            p: 1,
            bgcolor: "rgba(180, 175, 113, 0.68)",
            borderRadius: "100%",
          }}
        />
        <Typography sx={{ fontSize: "30px" }}>Media</Typography>
      </Stack>
      <MediaTabs id={String(data.id)} name={data.name} />
    </Stack>
  );
}