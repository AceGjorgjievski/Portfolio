export type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    links?: {
        web: string[];
    };
    stack: string[];
    number: number;
    picture: string;
}