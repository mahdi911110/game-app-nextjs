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
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          href={`${url}page=${item.page}`}
        />
      )}
    />
  );
}
