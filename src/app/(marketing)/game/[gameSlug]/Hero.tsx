import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { GameDetail } from "@/types/type";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";
import { theme } from "@/theme/theme";

export default function Hero({ data }: { data: GameDetail }) {
  const text = theme.palette.darkSurface.text;
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
          <Image src={data.background_image} alt={data.name} fill />
        </Box>
      </Box>
      <Stack sx={{ justifyContent: "end" }}>
        <Typography
          sx={{ color: "darkSurface.text", fontWeight: "bold", fontSize: "30px" }}
        >
          {data.name}
        </Typography>
        <Stack
          direction="row"
          sx={{ color: "darkSurface.textGray", flexWrap: "wrap" }}
          spacing={0.5}
        >
          {data.alternative_names.length !== 0 && (
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
          )}
        </Stack>
        <Stack direction="row" sx={{ color: "darkSurface.textGray", pt: 1 }} spacing={0.5}>
          <Stack
            direction="row"
            sx={{ bgcolor: "darkSurface.main", px: 2, py: 0.5, borderRadius: 10 }}
          >
            <CalendarMonthIcon fontSize="small" />
            <Typography>{data.released}</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ color: "darkSurface.text", alignItems: "center", mt: 1 }}
          spacing={0.5}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              bgcolor: "darkSurface.main",
              px: 2,
              borderRadius: 10,
            }}
            spacing={0.5}
          >
            <StarRoundedIcon sx={{ color: "darkSurface.bgGold" }} fontSize="medium" />
            <Typography
              sx={{ color: "darkSurface.textGreen", fontWeight: "bold", fontSize: 25 }}
            >
              {data.rating}
            </Typography>
            <Typography>/ {data.rating_top}</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ color: "darkSurface.textGray", pt: 1, borderRadius: 10 }}
          spacing={0.5}
        >
          <Link
            style={{
              color: text,
              textDecoration: "none",
              display: "flex",
              gap: 2,
              borderRadius: 80,
            }}
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Stack
              direction="row"
              sx={{
                bgcolor: "darkSurface.main",
                px: 2,
                py: 1,
                borderRadius: 10,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.03)" },
                "&:active": { transform: "scale(0.95)" },
              }}
            >
              <HomeRoundedIcon fontSize="small" />
              <Typography>View Game Main Page</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
