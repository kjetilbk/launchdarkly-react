import { LDUser, LDClient } from "ldclient-js";
declare type Client = {
    id: string;
    c?: LDClient;
};
export declare function createClient(clientId: string): Client;
export declare const useVariation: (client: Client, user: LDUser, flag: string, defaultValue: any) => any;
export {};
