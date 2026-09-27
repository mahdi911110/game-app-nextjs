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
import WhatshotIcon from "@mui/icons-material/Whatshot";
import StarIcon from "@mui/icons-material/Star";
import { Dispatch, SetStateAction, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const menuItems = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Games", icon: <SportsEsportsIcon /> },
  { label: "Trending", icon: <WhatshotIcon /> },
  { label: "Top Rated", icon: <StarIcon /> },
  { label: "Watchlist", icon: <FavoriteIcon /> },
];

const genreItems = [
  "Action",
  "Simulator",
  "Driving",
  "Shooter",
  "Adventure",
  "Open world",
  "Sony",
  "Nintendo",
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [openGenres, setOpenGenres] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <Drawer
      open={open}
      variant={isMd ? "permanent" : "persistent"}
      anchor="left"
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "black",
          borderColor: "gray",
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
            backgroundColor: "gray",
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
              color: "rgb(216, 206, 3)",
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
                  onClick={handleDrawerClose}
                  sx={{ mr: 2 }}
                >
                  <KeyboardArrowLeftIcon sx={{ color: "gray" }} />
                </IconButton>
              </>
            )}
          </Stack>
        </ListItem>

        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <Stack
                direction="row"
                sx={{
                  gap: 1,
                  color: "gray",
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
                  "linear-gradient(to left, transparent, #666, transparent)",
              }}
            />
            <ListItemButton onClick={() => setOpenGenres(!openGenres)}>
              <Stack
                sx={{
                  color: "gray",
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
              sx={{ color: "gray" }}
              unmountOnExit
            >
              <List component="div" disablePadding>
                {genreItems.map((item) => (
                  <ListItemButton key={item} sx={{ pl: 4 }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </List>
    </Drawer>
  );
}
