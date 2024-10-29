import { FC } from 'react';

// Styles
import classes from './Footer.module.scss';

const Footer: FC = () => {
  const CURRENT_YEAR = 2024;

  return (
    <footer className={classes.marvel_footer}>
      <div className="container">
        <div className={classes.footer_container}>
          <img
            src="/public/marvel_logo.svg"
            alt="marvel_logo"
            className={classes.marvel_footer_logo}
          />
          <p className={classes.marvel_footer_text}>
            Data provided by Marvel. {`© ${CURRENT_YEAR} MARVEL`}
          </p>
          <a
            href="http://developer.marvel.com/"
            className={classes.marvel_footer_link}
            target="_blank"
            rel="noreferrer"
          >
            developer.marvel.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
