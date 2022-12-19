import React from "react";

export const Paginate = ({ dataPerPage, totalData, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="pagination">
        <ul className="pagination__container">
          {pageNumbers.map((number) => (
            <li key={number} className="pagination__item">
              <button
                onClick={() => paginate(number)}
                type="button"
                className="pagination__number"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
