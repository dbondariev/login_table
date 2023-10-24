import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageCount,
  onPageChange,
}) => {
  return (
    <MuiPagination
      count={pageCount}
      page={page}
      onChange={(_, newPage) => onPageChange(newPage)}
      color="primary"
    />
  );
};

export default Pagination;
