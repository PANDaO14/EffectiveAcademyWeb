import { FC } from 'react';
import { Link } from 'react-router-dom';

import characterData from './CharactersData';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import CharacterCard from 'components/Cards/CharacterCard/CharacterCard';

// Styles
import classes from './Characters.module.scss';

const Characters: FC = () => {
  const characters = characterData;

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Characters" count={characters.length} />
        <hr className="divider" />
        <section className={classes.characters_cards}>
          {characters.length > 0 ? (
            characters.map((character) => (
              <Link to={`/characters/${character.id}`} key={character.id}>
                <CharacterCard {...character} key={character.id} />
              </Link>
            ))
          ) : (
            <div>Нет карт</div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Characters;
