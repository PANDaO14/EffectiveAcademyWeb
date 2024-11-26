import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

// Types
import CardDTO from 'types/CardDTO';

// Stores
import favouriteStore from 'stores/FavouriteStore';

// Styles
import classes from './Card.module.scss';

const Card: FC<CardDTO> = ({ id, thumbnail, name, title, description }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleSaveFavouritesToLocalStorage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    favouriteStore.toggleFavorite({ id, thumbnail, name, title, description });

    setIsFavourite(favouriteStore.isFavourite(id));
  };

  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <button
        className={`${classes.card_like_btn} ${
          isFavourite || favouriteStore.isFavourite(id) ? classes.active : ''
        }`}
        onClick={handleSaveFavouritesToLocalStorage}
        type="button"
      >
        <svg
          className={classes.card_like_btn_icon}
          width="64px"
          height="64px"
          viewBox="0 0 48 48"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {' '}
            <rect width="48" height="48" fill="white" fillOpacity="0.01" />{' '}
            <path
              d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{' '}
          </g>
        </svg>
      </button>
      <div className={classes.card_container}>
        <h3 className={classes.card_title}>{name || title}</h3>
        <p className={classes.card_desc}>{description}</p>
      </div>
    </div>
  );
};

export default observer(Card);
