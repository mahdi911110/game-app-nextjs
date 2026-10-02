import { theme } from "@/theme/theme";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  const rawg = theme.palette.footer.rawg;
  const rawgText = theme.palette.footer.rawgText;
  return (
    <Typography
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
        bgcolor: "footer.bg",
        color: "footer.text",
        py: 2,
      }}
      variant="body2"
    >
      Data provided by
      <Link
        href="https://rawg.io/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: rawg,
          color: rawgText,
          textDecoration: "none",
          fontWeight: "bold",
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 2,
          paddingBottom: 2,
          borderRadius: 5,
        }}
      >
        RAWG
      </Link>
    </Typography>
  );
}
