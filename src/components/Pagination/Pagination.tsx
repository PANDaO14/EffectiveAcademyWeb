import { FC } from 'react';
import paginationStore from 'stores/PaginationStore';

import usePagination from 'hooks/usePagination';
import classes from './Pagination.module.scss';

// Hooks

type PaginationProps = {
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({ currentPage }) => {
  const { totalPages } = paginationStore;
  const pageNumbers = usePagination(totalPages, currentPage, '...');

  return (
    <nav className={classes.pagination}>
      <ul className={classes.pagination__nums}>
        <li>
          <button
            onClick={() => paginationStore.setPage(currentPage - 1)}
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
                  paginationStore.setPage(number);
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
            onClick={() => paginationStore.setPage(currentPage + 1)}
            disabled={currentPage === totalPages}
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
