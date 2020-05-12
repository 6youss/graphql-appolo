import { generateNamespace } from "@gql2ts/from-schema";
import fs from "fs";
import path from "path";

import { genSchema } from "../utils/genSchema";

const typescriptTypes = generateNamespace("GQL", genSchema());

fs.writeFile(path.join(__dirname, "../types/schema.d.ts"), typescriptTypes, (err) => {
  console.log(err);
});
