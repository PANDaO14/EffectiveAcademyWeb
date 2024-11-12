import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import CharacterCard from 'components/Cards/CharacterCard/CharacterCard';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination/Pagination';
import NothingFound from 'components/NothingFound';

// Stores
import characterStore from 'stores/CharacterStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Characters.module.scss';

const Characters: FC = () => {
  const { characters, loading, total, limit } = characterStore;
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const offset = (currentPage - 1) * limit;

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      characterStore.getCharactersList(offset, debouncedSearchTerm);
    } else {
      characterStore.getCharactersList(offset);
    }
  }, [debouncedSearchTerm, offset]);

  return (
    <main>
      <div className="inner_container">
        <FormSearch
          type="Characters"
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
                <CharacterCard {...character} />
              </Link>
            ))}
        </section>
        {!loading && debouncedSearchTerm && characters.length === 0 && (
          <NothingFound />
        )}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={total}
          itemsPerPage={limit}
        />
      </div>
    </main>
  );
};

export default observer(Characters);
