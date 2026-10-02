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
          color: 'pagination.text',
          ':hover': {
            bgcolor: 'pagination.bgHover'
          }
        },
         "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "pagination.bg",
            color: "pagination.text",
          },
      }}
      renderItem={(item) => (
        <PaginationItem
          sx={{
            color: 'pagination.text'
          }}
          {...item}
          component={Link}
          href={`${url}page=${item.page}`}
        />
      )}
    />
  );
}
