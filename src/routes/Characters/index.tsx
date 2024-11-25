import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import Card from 'components/Cards/Card';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination/Pagination';
import NothingFound from 'components/NothingFound';

// Stores
import charactersStore from 'stores/CharacterStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Characters.module.scss';

const Characters: FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const { characters, loading, total, limit } = charactersStore;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const offset = (currentPage - 1) * limit;

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      charactersStore.getCharactersList(offset, debouncedSearchTerm);
    } else {
      charactersStore.getCharactersList(offset);
    }
  }, [debouncedSearchTerm, offset]);

  return (
    <main>
      <div className="inner_container">
        <FormSearch
          type={t('Characters')}
          count={total}
          setSearchTerm={setSearchTerm}
        />
        <hr className="divider" />
        {loading && <Loading />}
        <section className={classes.characters_cards}>
          {!loading &&
            characters.length > 0 &&
            characters.map((character) => (
              <Link to={`/characters/${character.id}`} key={character.id}>
                <Card {...character} key={character.id} />
              </Link>
            ))}
        </section>
        {!loading && debouncedSearchTerm && characters.length === 0 && (
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

export default observer(Characters);
