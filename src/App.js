import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { Normalize } from 'styled-normalize';
import api from './services/api';

import Routes from './routes';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Theme>
      <ApolloProvider client={api}>
        <Routes />
      </ApolloProvider>
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
