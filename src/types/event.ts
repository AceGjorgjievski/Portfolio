export type Event = {
    id: string,
    awards: string,
    name: string,
    place: string,
    time: string,
    links?: {
        chrome?: string,
        instagram?: string,
        facebook?: string;
        youtube?: string;
    }
}