import { FC } from 'react';

// Styles
import classes from './FormSearch.module.scss';

interface FormSearchProps {
  type: string;
  count: number;
}

const FormSearch: FC<FormSearchProps> = ({ type, count }) => {
  return (
    <section className={classes.search_section}>
      <h2 className={classes.search_section_title}>
        {type}{' '}
        <span className={classes.search_section_title_num}>({count})</span>
      </h2>

      <form className={classes.search_section_form}>
        <input
          className={classes.search_section_input}
          type="text"
          placeholder={`Search for ${type} by Name`}
        />
        <button className={classes.search_section_btn} type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default FormSearch;
