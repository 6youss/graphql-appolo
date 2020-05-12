import { Error, NormalizedErrorMap } from "../types/NormalizedErrorMap";

export const normalizeErrors = (errors: Error[]): NormalizedErrorMap => {
  const errMap: NormalizedErrorMap = {};

  errors.forEach((err) => {
    errMap[err.path] = err.message;
  });

  return errMap;
};
