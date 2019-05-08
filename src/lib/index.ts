import { initialize, LDUser } from "ldclient-js";
import { useState } from "react";
export const useVariation = (
  clientId: string,
  user: LDUser,
  flag: string,
  defaultValue: any
) => {
  const [val, setVal] = useState(defaultValue);
  const client = initialize(clientId, user);
  client.on("initialized", () => {
    setVal(client.variation(flag, defaultValue));
  });
  return val;
};
