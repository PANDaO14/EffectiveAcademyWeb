import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import Card from 'components/Cards/Card';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination/Pagination';
import NothingFound from 'components/NothingFound';

// Stores
import comicsStore from 'stores/ComicsStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Comics.module.scss';

const Comics: FC = () => {
  const { t } = useTranslation();

  const { AllComics, loading, total, limit } = comicsStore;
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const offset = (currentPage - 1) * limit;

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      comicsStore.getComicsList(offset, debouncedSearchTerm);
    } else {
      comicsStore.getComicsList(offset);
    }
  }, [debouncedSearchTerm, offset]);

  return (
    <main>
      <div className="inner_container">
        <FormSearch
          type={t('Comics')}
          count={total}
          setSearchTerm={setSearchTerm}
        />
        <hr className="divider" />
        {loading && <Loading />}
        <section className={classes.comics_cards}>
          {!loading &&
            AllComics.length > 0 &&
            AllComics.map((com) => (
              <Card {...com} cardType="comic" key={com.id} />
            ))}
        </section>
        {!loading && debouncedSearchTerm && AllComics.length === 0 && (
          <NothingFound />
        )}
        <Pagination
          currentPage={currentPage}
          itemsPerPage={limit}
          totalItems={total}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default observer(Comics);
