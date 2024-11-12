import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';

import Toast from 'components/Toast';
import Marvel from './Marvel';

// Components

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Marvel />
    <Toast />
  </BrowserRouter>
  // </React.StrictMode>
);
