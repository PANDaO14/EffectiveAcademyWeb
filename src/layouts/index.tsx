import { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
