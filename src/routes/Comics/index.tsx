import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import ComicsCard from 'components/Cards/ComicsCard/ComicsCard';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination/Pagination';
import NothingFound from 'components/NothingFound';

// Stores
import comicsStore from 'stores/ComicsStore';
import paginationStore from 'stores/PaginationStore';

// Hooks
import useDebounce from 'hooks/useDebounce';

import classes from './Comics.module.scss';

const Comics: FC = () => {
  const { AllComics, loading } = comicsStore;
  const { currentPage, total, offset } = paginationStore;

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      comicsStore.getComicsListBySearch(debouncedSearchTerm);
    } else {
      comicsStore.getComicsList(offset);
    }
  }, [currentPage, debouncedSearchTerm]);

  return (
    <main>
      <div className="inner_container">
        <FormSearch type="Comics" count={total} setSearchTerm={setSearchTerm} />
        <hr className="divider" />
        {loading && <Loading />}
        <section className={classes.comics_cards}>
          {!loading &&
            AllComics.length > 0 &&
            AllComics.map((com) => (
              <Link to={`/comics/${com.id}`} key={com.id}>
                <ComicsCard {...com} key={com.id} />
              </Link>
            ))}
        </section>
        {!loading && debouncedSearchTerm && AllComics.length === 0 && (
          <NothingFound />
        )}
        <Pagination currentPage={currentPage} />
      </div>
    </main>
  );
};

export default observer(Comics);
