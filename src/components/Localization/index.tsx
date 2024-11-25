import { ChangeEventHandler, FC } from 'react';

// Hooks
import { useTranslation } from 'react-i18next';

// Localization
import { localesKeys } from 'localization/index';

// Styles
import classes from './Localization.module.scss';

const languages: Record<string, string> = {
  en: 'English',
  ru: 'Русский'
};

const Localization: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguageHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem('LOCALE', newLang);
  };

  return (
    <select
      className={classes.custom_select}
      onChange={changeLanguageHandler}
      value={i18n.language}
    >
      {localesKeys.map((language) => (
        <option key={language} value={language}>
          {languages[language]}
        </option>
      ))}
    </select>
  );
};

export default Localization;
