import { FC } from 'react';

// Types
import CardDTO from 'types/CardDTO';

// Styles
import classes from './ComicsCard.module.scss';

const ComicsCard: FC<CardDTO> = ({ img, title, description }) => {
  return (
    <div className={classes.comics_card}>
      <img className={classes.comics_card_img} src={img} alt={title} />
      <div className={classes.comics_card_container}>
        <h3 className={classes.comics_card_title}>{title}</h3>
        <p className={classes.comics_card_desc}>{description}</p>
      </div>
    </div>
  );
};

export default ComicsCard;
