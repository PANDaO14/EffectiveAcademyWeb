import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Localization
import i18n from 'localization/index';

import './styles/index.scss';

import Toast from 'components/Toast';
import Marvel from './Marvel';

i18n.init();

// Components

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Marvel />
    <Toast />
  </BrowserRouter>
  // </React.StrictMode>
);
