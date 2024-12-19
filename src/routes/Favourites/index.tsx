import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

// Components
import Card from 'components/Cards/Card';

// Stores
import favouriteStore from 'stores/FavouriteStore';

// Styles
import classes from './Favourites.module.scss';

const Favourites: FC = () => {
  const { t } = useTranslation();
  const { favourites } = favouriteStore;

  return (
    <main>
      <div className="inner_container">
        <h3 className={classes.favourite_title}>
          {t('Favourites')} <span>({favourites.length})</span>
        </h3>
        {favourites.length === 0 && (
          <div className="loading">{t('Nothing added to Favourites.')}</div>
        )}
        <section className={classes.favourites_cards}>
          {favourites.map((favourite) => (
            <Card
              {...favourite}
              cardType={favourite.cardType}
              key={favourite.id}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default observer(Favourites);
