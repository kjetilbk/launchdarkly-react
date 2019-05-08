import * as LD from "ldclient-js";
export const useVariation = (clientId, user, _flag, defaultValue) => {
    const _c = LD.initialize(clientId, user);
    return defaultValue;
};
