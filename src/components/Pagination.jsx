import React, { useEffect, useMemo } from "react";
import "./Pagination.css";

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  //Calculates the number of pages
  const getPages = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalItems, itemsPerPage]);

  useEffect(() => {
    if (currentPage > getPages.length) {
      setCurrentPage(1);
    }
  }, [setCurrentPage, currentPage, getPages.length]);

  return (
    <div className="pagination">
      <button onClick={() => (currentPage > 1 ? setCurrentPage(currentPage - 1) : "")}>
        {"<<"}
      </button>

      {getPages.map((number) => (
        <button
          className={`${number === Number(currentPage) ? "active" : ""}`}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => (currentPage < getPages.length ? setCurrentPage(currentPage + 1) : "")}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
