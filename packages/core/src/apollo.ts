import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { Platform } from "react-native";

const host = "http://localhost:4000";

export const client = new ApolloClient({
  link: createUploadLink({
    uri: host,
  }),
  cache: new InMemoryCache(),
});
