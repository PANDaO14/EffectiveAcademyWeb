import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Loading: FC = () => {
  const { t } = useTranslation();

  return <div className="loading">{t('Loading')}...</div>;
};

export default Loading;
