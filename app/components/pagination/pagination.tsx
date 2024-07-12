import React from 'react';
import style from './pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }:any) => {
  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button key={1} onClick={() => onPageChange(1)} className="page-number">
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="start-ellipsis" className="ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="end-ellipsis" className="ellipsis">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="page-number"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={`${style.pagination} pagination`}>
      <button
        className={style.navPrev}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        
      </button>
      {renderPageNumbers()}
      <button
        className={style.navNext}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
       
      </button>
    </div>
  );
};

export default Pagination;
