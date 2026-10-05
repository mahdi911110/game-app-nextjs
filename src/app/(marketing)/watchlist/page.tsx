import WatchlistCardComponent from "@/components/card/WatchlistCardComponent";
import { getTotalItems } from "@/lib/gamedb";
import { getCurrentUser } from "@/lib/user";
import { Box, Typography } from "@mui/material";
import {
  dehydrate,
  HydrationBoundary,
  noop,
  QueryClient,
} from "@tanstack/react-query";
import FavoriteIcon from '@mui/icons-material/Favorite';

async function getWatchlistGames(page = 1) {
  const response = await fetch(`/api/watchlist?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to load watchlist.");
  }
  return response.json();
}

export default async function WatchlistPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const queryClient = new QueryClient();
  await queryClient
    .query({
      queryKey: ["watchlist-list", Number(page)],
      queryFn: () => getWatchlistGames(Number(page)),
    }).catch(noop);
  const user = await getCurrentUser();
  let totalPages = 0;
  if (user) {
    totalPages = Math.ceil(getTotalItems(Number(user.id)) / 20);
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Box sx={{ pt: 1, px: 1, bgcolor: "darkSurface.bg", minHeight: '80vh' }}>
        <Typography sx={{ color: 'darkSurface.text', textTransform: 'uppercase', pb: 1, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
          <FavoriteIcon color="error" fontSize="small" />
          WATCHLIST
        </Typography>
        <WatchlistCardComponent
          page={page !== "" && page !== undefined ? Number(page) : 1}
          totalPages={totalPages}
        />
      </Box>
    </HydrationBoundary>
  );
}
