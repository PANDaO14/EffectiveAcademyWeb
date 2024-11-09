import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import CharacterCard from 'components/Cards/CharacterCard/CharacterCard';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination/Pagination';

// Stores
import characterStore from 'stores/CharacterStore';
import paginationStore from 'stores/PaginationStore';

import classes from './Characters.module.scss';

const Characters: FC = () => {
  const { characters, loading } = characterStore;
  const { currentPage, total, offset } = paginationStore;

  useEffect(() => {
    characterStore.getCharactersList(offset);
  }, [currentPage]);

  if (!characters) {
    return <div>Нет карт</div>;
  }

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Characters" count={total} />
        <hr className="divider" />
        <section className={classes.characters_cards}>
          {!loading ? (
            characters.map((character) => (
              <Link to={`/characters/${character.id}`} key={character.id}>
                <CharacterCard {...character} key={character.id} />
              </Link>
            ))
          ) : (
            <Loading />
          )}
        </section>
        <Pagination currentPage={currentPage} />
      </div>
    </main>
  );
};

export default observer(Characters);
