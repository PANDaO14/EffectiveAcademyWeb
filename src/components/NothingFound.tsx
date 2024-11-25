import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const NothingFound: FC = () => {
  const { t } = useTranslation();

  return <div className="loading">{t(`Nothing found`)}</div>;
};

export default NothingFound;
