import { iClient } from './iclient';
import { iProperty } from './iproperty';

export interface iUser {
    uid: string;
    name: string;
    email: string;
    clients: Array<iClient>;
    properties: Array<iProperty>;
}
