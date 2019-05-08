import LD from "ldclient-js";
export const useVariation = (_clientId, _user, _flag, defaultValue) => {
    LD();
    //var ldclient = LDClient.initialize("YOUR_CLIENT_SIDE_ID", user);
    return defaultValue;
};
