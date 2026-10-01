import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarRoundedIcon from '@mui/icons-material/StarRounded';import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { GameDetail } from "@/types/type";

export default function Hero({ data }: { data: GameDetail }) {
  return (
    <Stack sx={{ flexWrap: "wrap" }} direction="row" spacing={3}>
      <Box
        sx={{
          display: { md: "flex" },
          width: { sm: "100%", md: "100%", lg: "calc(33.333% - 11px)" },
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
          <Image src={data.background_image} alt={data.name} fill />
        </Box>
      </Box>
      <Stack sx={{ justifyContent: "end" }}>
        <Typography
          sx={{ color: "white", fontWeight: "bold", fontSize: "30px" }}
        >
          {data.name}
        </Typography>
        <Stack
          direction="row"
          sx={{ color: "gray", flexWrap: "wrap" }}
          spacing={0.5}
        >
          {data.alternative_names.length !== 0 &&
            <Stack direction="row" sx={{ flexWrap: "wrap" }}>
              Also known as
              {data.alternative_names.map((name, index) =>
                data.alternative_names.length - 1 === index ? (
                  <Typography key={name} sx={{ fontWeight: "bold", pl: 1 }}>
                    {name}
                  </Typography>
                ) : (
                  <Typography key={name} sx={{ fontWeight: "bold", pl: 1 }}>
                    {`${name},`}
                  </Typography>
                ),
              )}
            </Stack>
          }
        </Stack>
        <Stack direction="row" sx={{ color: "gray", pt: 1 }} spacing={0.5}>
          <Stack
            direction="row"
            sx={{ bgcolor: "black", px: 2, py: 0.5, borderRadius: 10 }}
          >
            <CalendarMonthIcon fontSize="small" />
            <Typography>{data.released}</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ color: "white", alignItems: "center", mt: 1 }}
          spacing={0.5}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              bgcolor: "black",
              px: 2,
              borderRadius: 10,
            }}
            spacing={0.5}
          >
            <StarRoundedIcon sx={{ color: "gold" }} fontSize="medium" />
            <Typography
              sx={{ color: "green", fontWeight: "bold", fontSize: 25 }}
            >
              {data.rating}
            </Typography>
            <Typography>/ {data.rating_top}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}