import { FC } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import comicsData from '../../Comics/ComicsData';

// Styles
import classes from './CharacterDetails.module.scss';

// Types
import CharacterCardDetailsDTO from '../../../types/CharacterCardDetailsDTO';

const CharacterDetails: FC = () => {
  const character: CharacterCardDetailsDTO = useOutletContext();

  return (
    <main className={classes.character_details}>
      <section className={classes.character_img_section}>
        <img
          className={classes.character_img}
          src={character.img}
          alt={character.img}
        />
      </section>
      <div className="inner_container">
        <section className={classes.character_details_info_section}>
          <div className={classes.character_details_info}>
            <h3 className={classes.character_details_name}>
              {character.title}
            </h3>
            <p className={classes.character_details_desc}>
              {character.description}
            </p>
          </div>
          <div className={classes.character_details_info_comics}>
            <h3 className={classes.character_details_comics_title}>Comics:</h3>
            <ul className={classes.character_details_comics}>
              {comicsData
                .filter((com) => character.comicsId.includes(com.id))
                .map((com) => (
                  <li key={com.id}>
                    <Link
                      className={classes.character_details_comics_links}
                      to={`/comics/${com.id}`}
                    >
                      {com.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CharacterDetails;
