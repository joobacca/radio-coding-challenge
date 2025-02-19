import { useEffect, useState } from "react";

function usePagination(array: Array<unknown>, amountPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(0);

  const hasPrevious = currentPage > 0;

  const previous = () => {
    const newPage = hasPrevious ? currentPage - 1 : 0
    setCurrentPage(newPage);
  };

  const hasNext = currentPage * amountPerPage + amountPerPage < array.length;

  const next = () => {
    const newPage = hasNext ? currentPage + 1 : currentPage;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [amountPerPage]);

  return {
    currentPage,
    hasPrevious,
    previous,
    next,
    hasNext,
  };
}

export default usePagination;
