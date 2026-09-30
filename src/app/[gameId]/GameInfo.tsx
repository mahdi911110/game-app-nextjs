import { Box, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import type { GameDetail } from "@/types/type";

export default function GameInfo({ data }: { data: GameDetail }) {
  return (
    <Stack>
      <Stack
        direction="row"
        sx={{ alignItems: "center", fontWeight: "bold", color: "white" }}
        spacing={1}
      >
        <InfoIcon
          sx={{
            color: "gold",
            fontSize: "30px",
            p: 1,
            bgcolor: "rgba(180, 175, 113, 0.68)",
            borderRadius: "100%",
          }}
        />
        <Typography sx={{ fontSize: "30px" }}>Detail</Typography>
      </Stack>
      <Stack
        sx={{
          bgcolor: "rgb(28, 25, 28)",
          borderRadius: 3,
          p: 2,
          width: { xs: "100%", md: "300px", lg: "400px" },
        }}
        spacing={2}
      >
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Platforms</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.platforms.map((item, index) =>
                data.platforms.length - 1 === index ? (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.platform.name}
                  >
                    {item.platform.name}
                  </Box>
                ) : (
                  <Box
                    sx={{ whiteSpace: "nowrap", fontSize: 12 }}
                    key={item.platform.name}
                  >
                    {`${item.platform.name},`}&nbsp;
                  </Box>
                ),
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Creators Count</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.creators_count}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Playtime</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {`${data.playtime}h`}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Achivment Count</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.achievements_count}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Suggestion Count</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.suggestions_count}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ComputerIcon
            fontSize="large"
            sx={{
              color: "white",
              bgcolor: "black",
              p: 1,
              borderRadius: "100%",
            }}
          />
          <Stack>
            <Box sx={{ color: "white" }}>Addistions Count</Box>
            <Stack direction="row" sx={{ color: "gray", flexWrap: "wrap" }}>
              {data.additions_count}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}