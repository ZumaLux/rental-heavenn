import React, { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  //Calculates the number of pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (currentPage > pageNumbers.length) {
      setCurrentPage(1);
    }
  }, [setCurrentPage]);

  return (
    <div className="pagination">
      <button onClick={() => (currentPage > 1 ? setCurrentPage(currentPage - 1) : "")}>
        {"<<"}
      </button>

      {pageNumbers.map((number) => (
        <button
          className={`${number == currentPage ? "active" : ""}`}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => (currentPage < pageNumbers.length ? setCurrentPage(currentPage + 1) : "")}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
