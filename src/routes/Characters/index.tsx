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
import charactersStore from 'stores/CharacterStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Characters.module.scss';

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props} className={classes.characters_cards}>
      {children}
    </div>
  )
);

const Characters: FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(0);

  const { characters, loading, total, limit } = charactersStore;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const loadMoreCharacters = useCallback(() => {
    if (characters.length < total) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  }, [characters.length, total, limit]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setOffset(0);
      charactersStore.clearCharacters();
      charactersStore.getCharactersList(0, debouncedSearchTerm);
    } else {
      setOffset(0);
      charactersStore.clearCharacters();
      charactersStore.getCharactersList(0);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (offset > 0) {
      charactersStore.getCharactersList(offset, debouncedSearchTerm);
    }
  }, [offset, debouncedSearchTerm]);

  return (
    <main>
      <div className="inner_container">
        <FormSearch
          type={t('Characters')}
          count={total}
          setSearchTerm={setSearchTerm}
        />
        <hr className="divider" />
        {!loading && debouncedSearchTerm && characters.length === 0 && (
          <NothingFound />
        )}
        <VirtuosoGrid
          useWindowScroll
          data={characters}
          increaseViewportBy={limit}
          itemContent={(index, character) => {
            return <Card {...character} cardType="character" key={index} />;
          }}
          components={{
            List,
            Footer: Loading
          }}
          endReached={loadMoreCharacters}
          style={{ minHeight: '100vh' }}
        />
      </div>
    </main>
  );
};

export default observer(Characters);
