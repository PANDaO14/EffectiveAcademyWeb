import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Routes
import Characters from 'routes/Characters';

// Stores
import characterStore from 'stores/CharacterStore';

const CharacterLayout: FC = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    characterStore.reset();

    characterStore.getCharacter(Number(id));
  }, [id]);

  return <>{id ? <Outlet /> : <Characters />}</>;
};

export default observer(CharacterLayout);
