import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";


const uploadLink = createUploadLink({
  uri: "https://app-leandroserra-api.azurewebsites.net/graphql/", 
  headers: {
    'GraphQL-Preflight': 'true'
  }
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

export default client;