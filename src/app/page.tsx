import CardComponent from "@/components/card/CardComponent";
import { Box } from "@mui/material";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string, genre?: string, search?: string }>;
}) {
  const { page, genre, search } = await searchParams;
  return (
    <Box sx={{ pt: 1, px: 1, bgcolor: 'darkSurface.bg' }}>
      <CardComponent
        page={((page !== "") && (page !== undefined)) ? Number(page) : 1}
        genre={(genre && (genre !== '')) ? genre : ''}
        search={search ?? ''}
      />
    </Box>
  );
}
