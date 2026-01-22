export type Link = {
    web?: string[],
    instagram?: string[],
    facebook?: string[],
    youtube?: string[]
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