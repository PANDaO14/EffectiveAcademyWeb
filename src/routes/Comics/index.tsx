import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import ComicsCard from 'components/Cards/ComicsCard/ComicsCard';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination/Pagination';

// Stores
import comicsStore from 'stores/ComicsStore';
import paginationStore from 'stores/PaginationStore';

import classes from './Comics.module.scss';

const Comics: FC = () => {
  const { AllComics, loading } = comicsStore;
  const { currentPage, total, offset } = paginationStore;

  useEffect(() => {
    comicsStore.getComicsList(offset);
  }, [currentPage]);

  if (!AllComics) {
    return <div>Нет карт</div>;
  }

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Comics" count={total} />
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
        <Pagination currentPage={currentPage} />
      </div>
    </main>
  );
};

export default observer(Comics);
