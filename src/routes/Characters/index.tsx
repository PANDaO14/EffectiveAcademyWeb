import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import Card from 'components/Cards/Card';
import characterData from './CharactersData';

// Styles
import classes from './Characters.module.scss';

const Characters: FC = () => {
  const { t } = useTranslation();

  const characters = characterData;

  return (
    <main>
      <div className="inner_container">
        <FormSearch type={t('Characters')} count={characters.length} />
        <hr className="divider" />
        <section className={classes.characters_cards}>
          {characters.length > 0 ? (
            characters.map((character) => (
              <Link to={`/characters/${character.id}`} key={character.id}>
                <Card {...character} key={character.id} />
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
