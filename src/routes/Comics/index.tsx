import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { ListProps, VirtuosoGrid } from 'react-virtuoso';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import Card from 'components/Cards/Card';
import Loading from 'components/Loading';
import NothingFound from 'components/NothingFound';

// Stores
import comicsStore from 'stores/ComicsStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Comics.module.scss';

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props} className={classes.comics_cards}>
      {children}
    </div>
  )
);
const Comics: FC = () => {
  const { t } = useTranslation();

  const { AllComics, loading, total, limit } = comicsStore;
  const [offset, setOffset] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const loadMoreComics = useCallback(() => {
    if (AllComics.length < total) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  }, [AllComics.length, total, limit]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setOffset(0);
      comicsStore.clearComics();
      comicsStore.getComicsList(0, debouncedSearchTerm);
    } else {
      setOffset(0);
      comicsStore.clearComics();
      comicsStore.getComicsList(0);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (offset > 0) {
      comicsStore.getComicsList(offset, debouncedSearchTerm);
    }
  }, [offset, debouncedSearchTerm]);
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
        <VirtuosoGrid
          useWindowScroll
          data={AllComics}
          increaseViewportBy={limit}
          itemContent={(index, character) => {
            return <Card {...character} cardType="character" key={index} />;
          }}
          components={{
            List,
            Footer: AllComics.length < total && loading ? Loading : () => null
          }}
          endReached={loadMoreComics}
          style={{ minHeight: '100vh' }}
        />
        {!loading && debouncedSearchTerm && AllComics.length === 0 && (
          <NothingFound />
        )}
      </div>
    </main>
  );
};

export default observer(Comics);
