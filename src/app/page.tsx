import CardComponent from "@/components/card/CardComponent";
import { Box } from "@mui/material";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string, genre?: string, filter?: string }>;
}) {
  const { page, genre, filter } = await searchParams;
  return (
    <Box sx={{ pt: 1, px: 1, bgcolor: 'rgb(30, 30, 30)' }}>
      <CardComponent
        page={((page !== "") && (page !== undefined)) ? Number(page) : 1}
        genre={(genre && (genre !== '')) ? genre : ''}
        filter={filter ?? ''}
      />
    </Box>
  );
}
