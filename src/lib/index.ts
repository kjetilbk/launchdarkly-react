import * as LD from "ldclient-js";
export const useVariation = (
  clientId: string,
  user: string,
  _flag: string,
  defaultValue: any
) => {
  const _c = LD.initialize(clientId, user);
  return defaultValue;
};
