import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";

export default function PaginationComponent({
  url,
  page,
  totalPage,
}: {
  url: string;
  page: number;
  totalPage: number;
}) {
  return (
    <Pagination
      page={page}
      count={totalPage}
      sx={{
        "& .MuiPaginationItem-root": {
          color: 'white',
          ':hover': {
            bgcolor: 'gray'
          }
        },
         "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "gold",
            color: "white",
          },
      }}
      renderItem={(item) => (
        <PaginationItem
          sx={{
            color: 'white'
          }}
          {...item}
          component={Link}
          href={`${url}page=${item.page}`}
        />
      )}
    />
  );
}
