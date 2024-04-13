import type { filter, get, sort } from "types";
import type { Book } from "./types";
import { getLast } from "functions";


export const getTags: get<Book> = ({ tags }) => tags.map((tag) => `#${tag}`)
export const getRating: get<Book> = ({ reads }) => {
    if (!reads) return "";
    const rating = getLast(reads).rating;
    if (rating === 0) return "dnf";
    return rating;
}
export const getTitle: get<Book> = ({ title }) => title.toLocaleLowerCase();
export const getAuthors: get<Book> = ({ author }) => author.toLocaleLowerCase();
export const getDateFinished: get<Book> = ({ reads }) => {
    if (!reads) return "";
    return reads[0].date_finished;
}
export const byAuthor: sort<Book> = ({ author: a }, { author: b }) =>
    a.localeCompare(b);


export const byTitle: sort<Book> = ({ title: a }, { title: b }) => a.localeCompare(b);
export const byRating: sort<Book> = ({ reads: aReads }, { reads: bReads }) => {
    const a = getRating({ reads: aReads }).toString();
    const b = getRating({ reads: bReads }).toString();
    return a.localeCompare(b);
};


export const readFilter: filter<Book> = ({ reads }) => !!reads;
