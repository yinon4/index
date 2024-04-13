import type { Book } from "./types";


export const getTags = ({ tags }: Book) => tags.map((tag) => `#${tag}`)
export const getRating = ({ reads }: Book) => {
    if (!reads) return "";
    const rating = reads[reads.length - 1].rating;
    if (rating === 0) return "dnf";
    return rating;
}
export const getTitle = ({ title }: Book) => title.toLocaleLowerCase();
export const getAuthors = ({ author }: Book) => author.toLocaleLowerCase();
export const getDateFinished = ({ reads }: Book) => {
    if (!reads) return "";
    return reads[0].date_finished;
}
export const byAuthor = ({ author: a }: Book, { author: b }: Book) => {
    return a.localeCompare(b);
}

type sortFn = (a: Book, b: Book) => number;
export const byTitle: sortFn = ({ title: a }: Book, { title: b }: Book) => a.localeCompare(b);
export const byRating: sortFn = ({ reads: aReads }: Book, { reads: bReads }: Book) => {
    const a = getRating({ reads: aReads }).toString();
    const b = getRating({ reads: bReads }).toString();
    return a.localeCompare(b);
};


export const readFilter = ({ reads }: Book) => !!reads;
