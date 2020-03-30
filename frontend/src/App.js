import React from 'react';

import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';

import { persistor, store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}
