import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({
  uri: 'https://localhost:7082/graphql/', // Substitua com a URL do seu servidor GraphQL
});

const Client = new ApolloClient({
  link: ApolloLink.from([uploadLink]),
  cache: new InMemoryCache(),
});

export default Client;