import { FC } from 'react';

// Styles
import classes from './FormSearch.module.scss';

interface FormSearchProps {
  type: string;
  count: number;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const FormSearch: FC<FormSearchProps> = ({ type, count, setSearchTerm }) => {
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const searchTerm = formData.get('search') as string;
    setSearchTerm(searchTerm);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section className={classes.search_section}>
      <h2 className={classes.search_section_title}>
        {type}{' '}
        <span className={classes.search_section_title_num}>({count})</span>
      </h2>

      <form
        className={classes.search_section_form}
        onSubmit={handleSubmitSearch}
      >
        <input
          className={classes.search_section_input}
          type="search"
          placeholder={`Search for ${type} by Name`}
          onChange={handleChangeSearch}
        />
        <button className={classes.search_section_btn} type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default FormSearch;
