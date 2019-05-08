import { initialize, LDUser, LDClient } from "ldclient-js";
import { useState } from "react";

export type Client = {
  id: string;
  c?: LDClient;
};

//type Context = { [clientId: string]: LDClient };

export function createClient(clientId: string): Client {
  // TODO: Consider initilazining here
  return {
    id: clientId
  };
}

export const useVariation = (
  client: Client,
  user: LDUser,
  flag: string,
  defaultValue: any
) => {
  const [val, setVal] = useState(defaultValue);
  const ldclient = client.c || initialize(client.id, user);
  client.c = ldclient;
  ldclient.waitForInitialization().then(() => {
    setVal(ldclient.variation(flag, defaultValue));
  });
  return val;
};
