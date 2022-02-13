import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { RecoilRoot } from 'recoil';

import './i18n'

ReactDOM.render(
  <Suspense fallback="Loading...">
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>
  ,
  document.querySelector('#root'),
);
