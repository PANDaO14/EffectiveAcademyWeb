import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Routes
import Characters from 'routes/Characters';
import characterStore from 'stores/CharacterStore';

const CharacterLayout: FC = () => {
  const { id } = useParams();

  const { characters } = characterStore;
  const characterDetails = characters.find(
    (character) => character.id === Number(id)
  );

  return <>{characterDetails ? <Outlet /> : <Characters />}</>;
};

export default CharacterLayout;
