import { FC } from 'react';

// Hooks
import usePagination from 'hooks/usePagination';

import classes from './Pagination.module.scss';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = usePagination(totalPages, currentPage, '...');

  return (
    <nav className={classes.pagination}>
      <ul className={classes.pagination__nums}>
        <li>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={classes.pagination__nums_prev_btn}
            type="button"
          >
            <img
              className={classes.pagination__nums_prev_btn_icon}
              src="/public/left_arrow.svg"
              alt="left_arrow"
            />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                if (typeof number === 'number') {
                  setCurrentPage(number);
                }
              }}
              className={`${classes.pagination__nums_btn} ${
                currentPage === number ? classes.active : ''
              }`}
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className={classes.pagination__nums_next_btn}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages <= 1}
            type="button"
          >
            <img
              className={classes.pagination__nums_next_btn_icon}
              src="/public/right_arrow.svg"
              alt="right_arrow"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
