'use client';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useActionState, useState } from "react";
import { signupAction } from "./signupAction";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(
    signupAction,
    null
  );
  return (
    <Box
      sx={{
        backgroundImage: (theme) => (
          `linear-gradient(to right top, ${theme.palette.darkSurface.bg}, ${theme.palette.darkSurface.button}, ${theme.palette.darkSurface.logo})`
        ),
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ minWidth: 375, maxWidth: 400, color: "darkSurface.text" }}>
        <form action={formAction}>
          <CardContent>
            <Stack
              sx={{
                color: "darkSurface.logo",
                fontWeight: "bold",
                justifyContent: "center",
                textTransform: "uppercase",
                mb: 1,
              }}
              direction="row"
            >
              SIGNUP
            </Stack>
            <Typography
              component={Link}
              href='/'
              sx={{
                bgcolor: 'darkSurface.textGray',
                color: 'darkSurface.main',
                py: 1,
                px: 1,
                pr: 2,
                borderRadius: 10,
                textDecoration: 'none',
                display: 'inline-flex',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)'
                },
                '&:active': {
                  transform: 'scale(0.95)'
                }
              }}
            >
              <KeyboardArrowLeftIcon />
              Back to home
            </Typography>
            <Typography sx={{ mt: 2 }}>Username:</Typography>
            <TextField
              placeholder="Enter username..."
              fullWidth
              size="small"
              type="text"
              name="username"
              required
              sx={{
                borderRadius: 20,
                borderColor: 'darkSurface.textGray',
                "& .MuiOutlinedInput-root": {
                  bgcolor: 'darkSurface.bg',
                  color: 'darkSurface.text',
                  borderRadius: 20,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                },
                my: 1,
              }}
            ></TextField>
            <Typography>Email:</Typography>
            <TextField
              placeholder="Enter email..."
              fullWidth
              size="small"
              type="email"
              name="email"
              required
              sx={{
                borderRadius: 20,
                borderColor: 'darkSurface.textGray',
                "& .MuiOutlinedInput-root": {
                  bgcolor: 'darkSurface.bg',
                  color: 'darkSurface.text',
                  borderRadius: 20,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                },
                my: 1,
              }}
            ></TextField>
            <Typography>Password:</Typography>
            <TextField
              placeholder="Enter password..."
              fullWidth
              type={showPassword ? 'text' : "password"}
              size="small"
              name="password"
              required
              slotProps={{
                input: {
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword(prev => !prev)}
                      >
                        {showPassword ?
                          <VisibilityOffIcon sx={{ color: 'darkSurface.icon' }} />
                        :
                          <VisibilityIcon sx={{ color: 'darkSurface.icon' }} />
                        }
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
              sx={{
                borderRadius: 20,
                borderColor: 'darkSurface.textGray',
                "& .MuiOutlinedInput-root": {
                  bgcolor: 'darkSurface.bg',
                  color: 'darkSurface.text',
                  borderRadius: 20,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                },
                my: 1,
              }}
            ></TextField>
            <Typography>Type password again:</Typography>
            <TextField
              placeholder="Enter password again..."
              fullWidth
              type={showNewPassword ? 'text' : "password"}
              size="small"
              name="passwordAgain"
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label={showPassword ? "Hide password again" : "Show password again"}
                        onClick={() => setShowNewPassword(prev => !prev)}
                      >
                        {showNewPassword ?
                          <VisibilityOffIcon sx={{ color: 'darkSurface.icon' }} />
                        :
                          <VisibilityIcon sx={{ color: 'darkSurface.icon' }} />
                        }
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
              sx={{
                borderRadius: 20,
                borderColor: 'darkSurface.textGray',
                "& .MuiOutlinedInput-root": {
                  bgcolor: 'darkSurface.bg',
                  color: 'darkSurface.text',
                  borderRadius: 20,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "darkSurface.logo",
                  },
                },
                my: 1,
              }}
            ></TextField>
            {state &&
              <Typography color="error">
                {state.error}
              </Typography>
            }
            <Stack direction="row" spacing={0.5}>
              <Typography>Have account?</Typography>
              <Typography
                component={Link}
                href='/login'
                sx={{
                  color: 'darkSurface.link',
                  textDecoration: "none",
                  textTransform: 'capitalize'
                }}
              >
                Login
              </Typography>
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                mx: "auto",
                bgcolor: "darkSurface.logo",
                color: "darkSurface.main",
                fontWeight: "bold",
                textTransform: "capitalize",
                px: 2
              }}
              size="small"
              type="submit"
              disabled={isPending}
              onClick={() => {
                setShowPassword(false);
                setShowNewPassword(false);
              }}
            >
              {isPending ?
                  <CircularProgress sx={{ color: 'darkSurface.main' }} aria-label="Loading…" size="20px" />
                :
                  'Register'
              }
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
}
