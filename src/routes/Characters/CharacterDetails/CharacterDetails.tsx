import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Styles

// Stores
import characterStore from 'stores/CharacterStore';

// Components
import Loading from 'components/Loading';
import classes from './CharacterDetails.module.scss';

const CharacterDetails: FC = () => {
  const { id } = useParams();
  const { character, loading } = characterStore;

  useEffect(() => {
    characterStore.getCharacter(Number(id));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={classes.character_details}>
      {!character ? null : (
        <>
          <section className={classes.character_img_section}>
            <img
              className={classes.character_img}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </section>
          <div className="inner_container">
            <section className={classes.character_details_info_section}>
              <div className={classes.character_details_info}>
                <h3 className={classes.character_details_name}>
                  {character.name}
                </h3>
                <p className={classes.character_details_desc}>
                  {character.description}
                </p>
              </div>
              <div className={classes.character_details_info_comics}>
                <h3 className={classes.character_details_comics_title}>
                  Comics:
                </h3>
                <ul className={classes.character_details_comics}>
                  {character.comics.items.map((com) => (
                    <li key={com.resourceURI}>
                      <Link
                        className={classes.character_details_comics_links}
                        to={`/comics/${com.resourceURI.split('/').pop()}`}
                      >
                        {com.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default observer(CharacterDetails);
