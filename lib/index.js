import { initialize } from "ldclient-js";
import { useState } from "react";
//type Context = { [clientId: string]: LDClient };
export function createClient(clientId) {
    // TODO: Consider initilazining here
    return {
        id: clientId
    };
}
export const useVariation = (client, user, flag, defaultValue) => {
    const [val, setVal] = useState(defaultValue);
    const ldclient = client.c || initialize(client.id, user);
    client.c = ldclient;
    ldclient.waitForInitialization().then(() => {
        setVal(ldclient.variation(flag, defaultValue));
    });
    return val;
};
