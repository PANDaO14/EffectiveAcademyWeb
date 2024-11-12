import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes';

const Marvel: FC = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Marvel;
