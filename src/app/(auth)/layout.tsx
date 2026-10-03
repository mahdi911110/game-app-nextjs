import { getCurrentUser } from "@/lib/user";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";


export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (user) {
    redirect('/profile');
  }
  return (
    <Box sx={{ bgcolor: 'darkSurface.main' }}>
      {children}
    </Box>
  );
}