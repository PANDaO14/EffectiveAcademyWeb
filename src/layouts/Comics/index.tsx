import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Routes
import Comics from 'routes/Comics';
import comicsData from 'routes/Comics/ComicsData';

const ComicsLayout: FC = () => {
  const { id } = useParams();
  const comicsDetails = comicsData.find((comics) => comics.id === Number(id));

  return <>{comicsDetails ? <Outlet context={comicsDetails} /> : <Comics />}</>;
};

export default ComicsLayout;
