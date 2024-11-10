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
import paginationStore from 'stores/PaginationStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Characters.module.scss';

const Characters: FC = () => {
  const { characters, loading } = characterStore;
  const { currentPage, total, offset } = paginationStore;

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      characterStore.getCharactersListBySearch(debouncedSearchTerm);
    } else {
      characterStore.getCharactersList(offset);
    }
  }, [currentPage, debouncedSearchTerm]);

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
                <CharacterCard {...character} key={character.id} />
              </Link>
            ))}
        </section>
        {!loading && debouncedSearchTerm && characters.length === 0 && (
          <NothingFound />
        )}
        <Pagination currentPage={currentPage} />
      </div>
    </main>
  );
};

export default observer(Characters);
