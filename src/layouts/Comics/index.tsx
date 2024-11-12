import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Routes
import Comics from 'routes/Comics';

// Stores
import comicsStore from 'stores/ComicsStore';

const ComicsLayout: FC = () => {
  const { id } = useParams();

  const { AllComics } = comicsStore;
  const comicsDetails = AllComics.find((com) => com.id === Number(id));

  return <>{comicsDetails ? <Outlet /> : <Comics />}</>;
};

export default ComicsLayout;
