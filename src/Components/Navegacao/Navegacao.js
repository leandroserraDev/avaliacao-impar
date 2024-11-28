import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Navegacao = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Botão de página anterior */}
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="p-2 bg-gray-300 rounded-full disabled:opacity-50"
      >
        <FaChevronLeft />
      </button>

      {/* Números das páginas */}
      {generatePageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`p-2 rounded-full ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botão de próxima página */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="p-2 bg-gray-300 rounded-full disabled:opacity-50"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Navegacao;