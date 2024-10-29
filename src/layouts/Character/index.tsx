import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Routes
import Characters from '../../routes/Characters';
import characterData from '../../routes/Characters/CharactersData';

const CharacterLayout: FC = () => {
  const { id } = useParams();
  const characterDetails = characterData.find(
    (character) => character.id === Number(id)
  );

  return (
    <>
      {characterDetails ? (
        <Outlet context={characterDetails} />
      ) : (
        <Characters />
      )}
    </>
  );
};

export default CharacterLayout;
