import { FC } from 'react';

// Types
import CardDTO from 'types/CardDTO';

// Styles
import classes from './Card.module.scss';

const Card: FC<CardDTO> = ({ thumbnail, name, title, description }) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <div className={classes.card_container}>
        <h3 className={classes.card_title}>{name || title}</h3>
        <p className={classes.card_desc}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
