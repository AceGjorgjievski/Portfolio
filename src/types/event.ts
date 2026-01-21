export type Link = {
    chrome?: {
        links: string[];
    },
    web?: {
        links: string[],
    },
    instagram?: {
        links: string[],
    },
    facebook?: {
        links: string[],
    },
    youtube?: {
        links: string[],
    }
}

export type Event = {
    id: string,
    awards: string,
    name: string,
    place: string,
    time: string,
    description: string,
    links?: Link,
    pictures: string[];
}