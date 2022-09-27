export interface iClient {
    id: string;
    name: string;
    status: string;
    services: Array<iService>;
}

interface iService {
    id: string;
    name: string;
}
