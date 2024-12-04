import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
const uploadLink = createUploadLink({
  uri: "https://localhost:7082/graphql/", 
  headers: {
    'GraphQL-Preflight': 'true', // Esse cabeçalho é necessário para multi-part requests
  },// Atualize para o URI do seu servidor
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

export default client;