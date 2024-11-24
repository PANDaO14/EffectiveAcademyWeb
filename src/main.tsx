import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Localization
import i18n from 'localization/index';

import './styles/index.scss';

import Marvel from './Marvel';

i18n.init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Marvel />
    </BrowserRouter>
  </React.StrictMode>
);
