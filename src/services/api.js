import ApolloClient from 'apollo-boost';

const api = new ApolloClient({
  uri: 'http://localhost:5000/',
});

export default api;
