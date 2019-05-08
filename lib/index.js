import { initialize } from "ldclient-js";
import { useState } from "react";
export const useVariation = (clientId, user, flag, defaultValue) => {
    const [val, setVal] = useState(defaultValue);
    const client = initialize(clientId, user);
    client.on("initialized", () => {
        setVal(client.variation(flag, defaultValue));
    });
    return val;
};
