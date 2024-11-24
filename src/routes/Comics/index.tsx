import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import FormSearch from 'components/FormSearch/FormSearch';
import Card from 'components/Cards/Card';
import comicsData from './ComicsData';

// Styles
import classes from './Comics.module.scss';

const Comics: FC = () => {
  const { t } = useTranslation();

  const comics = comicsData;

  return (
    <main>
      <div className="inner_container">
        <FormSearch type={t('Comics')} count={comics.length} />
        <hr className="divider" />
        <section className={classes.comics_cards}>
          {comics.length > 0 ? (
            comics.map((com) => (
              <Link to={`/comics/${com.id}`} key={com.id}>
                <Card {...com} key={com.id} />
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
