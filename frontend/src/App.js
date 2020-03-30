import React from 'react';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Routes from './routes';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Routes />
      <GlobalStyle />
    </MuiPickersUtilsProvider>
  );
}
