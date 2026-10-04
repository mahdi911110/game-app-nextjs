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
import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { useSidebarStore } from "@/store/store";
import { useRouter } from "next/navigation";
import LoginIcon from '@mui/icons-material/Login';
import { logout } from "@/action/logout";
import { User } from "next-auth";

export default function Header({ user }: { user: User | null }) {
  const open = useSidebarStore((state) => state.openSidebar);
  const handleDrawer = useSidebarStore((state) => state.setOpenSidebar);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function handleOnKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key.trim() === 'Escape') {
      setSearch('');
    }
    if (event.key.trim() === 'Enter') {
      handleSearchRedirect();
    }
  }
  function handleSearchRedirect() {
    router.push(`/?page=1&search=${search}`);
  }
  return (
    <Stack direction="column">
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "darkSurface.main",
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
                handleDrawer(true);
                setOpenSearchInput(false);
              }}
            >
              <ViewSidebarIcon />
            </IconButton>
          )}
          {isMd || openSearchInput ? (
            <>
              <TextField
                onChange={handleSearch}
                value={search}
                onKeyDown={handleOnKeyDown}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "darkSurface.icon" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  flexGrow: "1",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 100,
                    color: "darkSurface.text",
                    "& fieldset": {
                      borderColor: "search.main",
                    },
                    "&:hover fieldset": {
                      borderColor: "search.hover",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "search.select",
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
                  sx={{ bgcolor: "darkSurface.button", ml: "auto", mr: 1 }}
                >
                  <CloseIcon sx={{ color: "darkSurface.icon" }} />
                </IconButton>
              )}
            </>
          ) : (
            !open && (
              <IconButton
                onClick={() => setOpenSearchInput(true)}
                sx={{ bgcolor: "darkSurface.button", mr: 1 }}
              >
                <SearchIcon sx={{ color: "darkSurface.icon" }} />
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
            {user ?
              <>
                <Link style={{ textDecoration: "none" }} href="/profile">
                  <Stack
                    direction="row"
                    sx={{
                      p: 1,
                      borderRadius: 10,
                      alignItems: "center",
                      gap: 1,
                      color: "darkSurface.icon",
                      bgcolor: "darkSurface.button",
                    }}
                  >
                    <PersonIcon sx={{ color: "darkSurface.icon" }} />
                    <Box>{user.name ? user.name : 'Name'}</Box>
                  </Stack>
                </Link>
                <form action={logout}>
                  <IconButton type="submit" sx={{ bgcolor: "darkSurface.button" }}>
                    <LogoutIcon sx={{ color: "darkSurface.icon" }} />
                  </IconButton>
                </form>
              </>
            :
              <Link style={{ textDecoration: "none" }} href="/login">
                <Stack
                  direction="row"
                  sx={{
                    p: 1,
                    borderRadius: 10,
                    alignItems: "center",
                    gap: 1,
                    color: "darkSurface.icon",
                    bgcolor: "darkSurface.button",
                  }}
                >
                  <LoginIcon sx={{ color: "darkSurface.icon" }} />
                </Stack>
              </Link>
            }
          </Stack>
        </Toolbar>
      </AppBar>
      {open && (
        <Box
          role="presentation"
          onClick={() => handleDrawer(false)}
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            inset: 0,
            bgcolor: "darkSurface.main",
            opacity: 0.2,
            zIndex: (theme) => theme.zIndex.drawer - 1,
          }}
        />
      )}
    </Stack>
  );
}
