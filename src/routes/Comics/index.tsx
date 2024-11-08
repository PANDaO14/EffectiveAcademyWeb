import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import ComicsCard from 'components/Cards/ComicsCard/ComicsCard';
import Loading from 'components/Loading';

// Styles
import comicsStore from 'stores/ComicsStore';
import classes from './Comics.module.scss';

// Stores

const Comics: FC = () => {
  const { AllComics, loading } = comicsStore;

  useEffect(() => {
    comicsStore.getComicsList();
  }, []);

  if (!AllComics) {
    return <div>Нет карт</div>;
  }

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Comics" count={AllComics.length} />
        <hr className="divider" />
        <section className={classes.comics_cards}>
          {!loading ? (
            AllComics.map((com) => (
              <Link to={`/comics/${com.id}`} key={com.id}>
                <ComicsCard {...com} key={com.id} />
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

export default observer(Comics);
