import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Styles
import Localization from 'components/Localization';
import classes from './Header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.marvel_header}>
      <div className="container">
        <div className={classes.header_container}>
          <img
            className={classes.marvel_logo}
            src="/public/marvel_logo.svg"
            alt="marvel_logo"
          />
          <nav id="Navbar" className={classes.marvel_nav}>
            <ul className={classes.marvel_nav_list}>
              <Localization />

              <li>
                <NavLink
                  className={classes.marvel_links}
                  to="/characters"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none'
                  })}
                >
                  {t('Characters')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={classes.marvel_links}
                  to="/comics"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none'
                  })}
                >
                  {t('Comics')}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
