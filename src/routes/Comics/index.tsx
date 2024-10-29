import { FC } from 'react';
import { Link } from 'react-router-dom';

import comicsData from './ComicsData';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import ComicsCard from 'components/Cards/ComicsCard/ComicsCard';

// Styles
import classes from './Comics.module.scss';

const Comics: FC = () => {
  const comics = comicsData;

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Comics" count={comics.length} />
        <hr className="divider" />
        <section className={classes.comics_cards}>
          {comics.length > 0 ? (
            comics.map((com) => (
              <Link to={`/comics/${com.id}`} key={com.id}>
                <ComicsCard {...com} key={com.id} />
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

export default Comics;
