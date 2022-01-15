export interface TitleList{
    certifier :Certifier | null;
    _id: string;
    short_name : string;
    is_published : boolean;
    long_name : string;
    rncp_level : string | null;
    rncp_level_europe : string | null;
}

interface Certifier{
    _id: string;
    short_name : string;
}