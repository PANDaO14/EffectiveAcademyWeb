import { FC } from 'react';

// Types
import CardDTO from 'types/CardDTO';

// Styles
import classes from './CharacterCard.module.scss';

const CharacterCard: FC<CardDTO> = ({ img, title, description }) => {
  return (
    <div className={classes.character_card}>
      <img className={classes.character_card_img} src={img} alt={title} />
      <div className={classes.character_card_container}>
        <h3 className={classes.character_card_title}>{title}</h3>
        <p className={classes.character_card_desc}>{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
