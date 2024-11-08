import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import CharacterCard from 'components/Cards/CharacterCard/CharacterCard';
import Loading from 'components/Loading';

// Styles
import characterStore from 'stores/CharacterStore';
import classes from './Characters.module.scss';

// Stores

const Characters: FC = () => {
  const { characters, loading } = characterStore;

  useEffect(() => {
    characterStore.getCharactersList();
  }, []);

  if (!characters) {
    return <div>Нет карт</div>;
  }

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Characters" count={characters.length} />
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
      </div>
    </main>
  );
};

export default observer(Characters);
