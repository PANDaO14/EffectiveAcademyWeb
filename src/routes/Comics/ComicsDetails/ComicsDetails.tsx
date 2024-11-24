import { FC } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

// Types
import ComicsCardDetailsDTO from 'types/ComicsCardDetailsDTO';
import characterData from '../../Characters/CharactersData';

// Styles
import classes from './ComicsDetails.module.scss';

const ComicsDetails: FC = () => {
  const comics: ComicsCardDetailsDTO = useOutletContext();

  return (
    <main>
      <section className={classes.comics_img_section}>
        <img src={comics.img} alt={comics.img} />
      </section>
      <div className="inner_container">
        <section className={classes.comics_details_info_section}>
          <div className={classes.comics_details_info}>
            <h3 className={classes.comics_details_name}>{comics.title}</h3>
            <p className={classes.comics_details_desc}>{comics.description}</p>
          </div>
          <div className={classes.comics_details_info_comics}>
            <h3 className={classes.comics_details_comics_title}>Characters:</h3>
            <ul className={classes.comics_details_comics}>
              {characterData
                .filter((character) =>
                  comics.charactersId.includes(character.id)
                )
                .map((character) => (
                  <li key={character.id}>
                    <Link
                      className={classes.comics_details_comics_links}
                      to={`/characters/${character.id}`}
                    >
                      {character.title}
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

export default ComicsDetails;
