import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import classes from './FormSearch.module.scss';

interface FormSearchProps {
  type: string;
  count: number;
}

const FormSearch: FC<FormSearchProps> = ({ type, count }) => {
  const { t } = useTranslation();

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
          placeholder={t(`Search for ${type} by Name`)}
        />
        <button className={classes.search_section_btn} type="submit">
          {t('Search')}
        </button>
      </form>
    </section>
  );
};

export default FormSearch;
