import { getCurrentUser } from "@/lib/user";
import { Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  return (
    <Stack sx={{ width: "100vh", height: "100vh", alignItems: "center" }}>
      <Stack
        sx={{
          bgcolor: "darkSurface.main",
          color: "darkSurface.text",
          width: 300,
          p: 2,
          borderRadius: 5,
          mt: 5,
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", mx: "auto", color: "darkSurface.bgGold" }}
        >
          PROFILE
        </Typography>
        <Typography>ID: {user.id}</Typography>
        <Typography>Username: {user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
      </Stack>
    </Stack>
  );
}
