import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";
import fs from "fs";
import { makeExecutableSchema } from "graphql-tools";
import glob from "glob";

export const genSchema = () => {
  const pathToModules = path.join(__dirname, "../modules");
  const graphqlTypes = glob.sync(`${pathToModules}/**/*.graphql`).map((x) => fs.readFileSync(x, { encoding: "utf8" }));

  const resolvers = glob.sync(`${pathToModules}/**/resolvers.?s`).map((resolver) => require(resolver).resolvers);

  return makeExecutableSchema({
    typeDefs: mergeTypes(graphqlTypes),
    resolvers: mergeResolvers(resolvers),
  });
};
