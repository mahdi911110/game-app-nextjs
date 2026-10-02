"use client";

import {
  Box,
  Collapse,
  Divider,
  IconButton,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { useSidebarStore } from "@/store/store";

const menuItems = [
  { label: "Home", icon: <HomeIcon />, link: '/' },
  { label: "Games", icon: <SportsEsportsIcon />, link: '/' },
  { label: "Top Rated", icon: <StarIcon />, link: '/' },
  { label: "Watchlist", icon: <FavoriteIcon />, link: '/' },
];

const genreItems = [
  { name: "Action", slug: "action" },
  { name: "Indie", slug: "indie" },
  { name: "Adventure", slug: "adventure" },
  { name: "RPG", slug: "role-playing-games-rpg" },
  { name: "Strategy", slug: "strategy" },
  { name: "Shooter", slug: "shooter" },
  { name: "Casual", slug: "casual" },
  { name: "Simulation", slug: "simulation" },
  { name: "Puzzle", slug: "puzzle" },
  { name: "Arcade", slug: "arcade" },
  { name: "Platformer", slug: "platformer" },
  { name: "Massively Multiplayer", slug: "massively-multiplayer" },
  { name: "Racing", slug: "racing" },
  { name: "Sports", slug: "sports" },
  { name: "Fighting", slug: "fighting" },
  { name: "Family", slug: "family" },
  { name: "Board Games", slug: "board-games" },
  { name: "Educational", slug: "educational" },
  { name: "Card", slug: "card" },
];

export default function Sidebar() {
  const open = useSidebarStore((state) => state.openSidebar);
  const handleDrawer = useSidebarStore((state) => state.setOpenSidebar);
  const [openGenres, setOpenGenres] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Drawer
      open={open}
      variant={isMd ? "permanent" : "persistent"}
      anchor="left"
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "darkSurface.main",
          borderColor: "darkSurface.sidebarText",
          width: open ? 175 : 60,
          transition: "width 0.3s ease",
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },

          "&:hover::-webkit-scrollbar": {
            width: "10px",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkSurface.icon",
          },
        },
      }}
    >
      <List>
        <ListItem sx={{ gap: 0.5, textTransform: "uppercase" }}>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              color: "darkSurface.logo",
            }}
          >
            <VideogameAssetIcon fontSize="large" />
            {open && (
              <>
                <Box>Gamehub</Box>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  onClick={() => handleDrawer(false)}
                  sx={{ mr: 2 }}
                >
                  <KeyboardArrowLeftIcon sx={{ color: "darkSurface.sidebarText" }} />
                </IconButton>
              </>
            )}
          </Stack>
        </ListItem>

        {menuItems.map((item) => (
          <ListItem key={item.label} component={Link} href={item.link} disablePadding>
            <ListItemButton>
              <Stack
                direction="row"
                sx={{
                  gap: 1,
                  color: "darkSurface.sidebarText",
                  alignItems: "center",
                }}
              >
                {item.icon}
                <Box
                  sx={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                    transition: "opacity 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
        {open && (
          <>
            <Divider
              sx={{
                height: "1px",
                border: 0,
                background:
                  `linear-gradient(to left, transparent, ${theme.palette.background.divider}, transparent)`,
              }}
            />
            <ListItemButton onClick={() => setOpenGenres(!openGenres)}>
              <Stack
                sx={{
                  color: "darkSurface.sidebarText",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                direction="row"
              >
                <Box>Genre</Box>
                {openGenres ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </Stack>
            </ListItemButton>

            <Collapse
              in={openGenres}
              timeout="auto"
              sx={{ color: "darkSurface.sidebarText" }}
              unmountOnExit
            >
              <List component="div" disablePadding>
                {genreItems.map((item) => (
                  <Link key={item.name} style={{ textDecoration: 'none', color: theme.palette.darkSurface.sidebarText }} href={`/?genre=${item.slug}&page=1`}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={item.name} sx={{ fontSize: { xs: '10px', md: '15px' } }} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </List>
    </Drawer>
  );
}
