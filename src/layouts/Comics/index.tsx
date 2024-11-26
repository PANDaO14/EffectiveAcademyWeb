import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Routes
import Comics from 'routes/Comics';

// Stores
import comicsStore from 'stores/ComicsStore';

const ComicsLayout: FC = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    comicsStore.reset();

    comicsStore.getComics(Number(id));
  }, [id]);

  return <>{id ? <Outlet /> : <Comics />}</>;
};

export default observer(ComicsLayout);
