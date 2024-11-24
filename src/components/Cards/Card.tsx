import { FC } from 'react';

// Types
import CardDTO from 'types/CardDTO';

// Styles
import classes from './Card.module.scss';

const Card: FC<CardDTO> = ({ img, title, description }) => {
  return (
    <div className={classes.card}>
      <img className={classes.card_img} src={img} alt={title} />
      <div className={classes.card_container}>
        <h3 className={classes.card_title}>{title}</h3>
        <p className={classes.card_desc}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
