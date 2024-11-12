import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Styles

// Stores
import comicsStore from 'stores/ComicsStore';

// Components
import Loading from 'components/Loading';
import classes from './ComicsDetails.module.scss';

const ComicsDetails: FC = () => {
  const { id } = useParams();
  const { comics, loading } = comicsStore;

  useEffect(() => {
    console.log('Comics Details');
    if (id) {
      comicsStore.getComics(Number(id));
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={classes.comics_details}>
      {!comics ? null : (
        <>
          <section className={classes.comics_img_section}>
            <img
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt={comics.title}
            />
          </section>
          <div className="inner_container">
            <section className={classes.comics_details_info_section}>
              <div className={classes.comics_details_info}>
                <h3 className={classes.comics_details_name}>{comics.title}</h3>
                <p className={classes.comics_details_desc}>
                  {comics.description}
                </p>
              </div>
              <div className={classes.comics_details_info_comics}>
                <h3 className={classes.comics_details_comics_title}>
                  Characters:
                </h3>
                <ul className={classes.comics_details_comics}>
                  {comics.characters.items.map((character) => (
                    <li key={character.name}>
                      <Link
                        className={classes.comics_details_comics_links}
                        to={`/characters/${character.resourceURI
                          .split('/')
                          .pop()}`}
                      >
                        {character.name}
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

export default observer(ComicsDetails);
