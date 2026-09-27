"use client";

import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction, useState } from "react";

export default function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [openSearchInput, setOpenSearchInput] = useState(false);
  function handleDrawerOpen() {
    setOpen(true);
  }
  return (
    <Stack direction="column">
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "black",
          pl: {
            xs: 0,
            md: open ? "175px" : "60px",
          },
          transition: "padding-left 0.3s ease",
        }}
      >
        <Toolbar>
          {!open && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: "auto" }}
              onClick={() => {
                handleDrawerOpen();
                setOpenSearchInput(false);
              }}
            >
              <ViewSidebarIcon />
            </IconButton>
          )}
          {isMd || openSearchInput ? (
            <>
              <TextField
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "gray" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  flexGrow: "1",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 100,
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(128, 128, 128, 0.33)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(230, 228, 230, 0.33)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#d0bd46",
                    },
                  },
                  mr: 2,
                }}
                size="small"
                id="outlined-basic"
                placeholder="Search a game..."
                variant="outlined"
              />
              {!isMd && (
                <IconButton
                  onClick={() => setOpenSearchInput(false)}
                  sx={{ bgcolor: "rgba(37, 37, 37, 0.67)", ml: "auto", mr: 1 }}
                >
                  <CloseIcon sx={{ color: "gray" }} />
                </IconButton>
              )}
            </>
          ) : (
            !open && (
              <IconButton
                onClick={() => setOpenSearchInput(true)}
                sx={{ bgcolor: "rgba(37, 37, 37, 0.67)", mr: 1 }}
              >
                <SearchIcon sx={{ color: "gray" }} />
              </IconButton>
            )
          )}
          <Stack
            sx={{
              display: openSearchInput && !isMd ? "none" : "",
              ml: open ? "auto" : "",
            }}
            direction="row"
            spacing={1}
          >
            <Link style={{ textDecoration: "none" }} href="/">
              <Stack
                direction="row"
                sx={{
                  p: 1,
                  borderRadius: 10,
                  alignItems: "center",
                  gap: 1,
                  color: "gray",
                  bgcolor: "rgba(37, 37, 37, 0.67)",
                }}
              >
                <PersonIcon sx={{ color: "gray" }} />
                <Box>Name</Box>
              </Stack>
            </Link>
            <IconButton sx={{ bgcolor: "rgba(37, 37, 37, 0.67)" }}>
              <LogoutIcon sx={{ color: "gray" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      {open && (
        <Box
          role="presentation"
          onClick={() => setOpen(false)}
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            inset: 0,
            bgcolor: "black",
            opacity: 0.2,
            zIndex: (theme) => theme.zIndex.drawer - 1,
          }}
        />
      )}
    </Stack>
  );
}
