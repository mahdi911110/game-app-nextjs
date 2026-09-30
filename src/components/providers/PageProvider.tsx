"use client";

import { useSidebarStore } from "@/store/store";
import { Box } from "@mui/material";

export default function PageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const open = useSidebarStore((state) => state.openSidebar);
  return (
    <Box sx={{ pl: { xs: 0, md: open ? "175px" : "60px" }, transition: 'padding 0.3s' }}>
      {children}
    </Box>
  );
}
