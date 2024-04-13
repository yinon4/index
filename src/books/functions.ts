import { z } from "astro/zod";
import type { BookSchema } from "./types";

type Book = z.infer<typeof BookSchema>

export const getTags = ({ tags }: Book) => tags.map((tag) => `#${tag}`)
export const getRating = ({ reads }: Book) => {
    if (reads.length === 0) return "";
    const rating = reads[reads.length - 1].rating;
    if (rating === 0) return "dnf";
    return rating;
}
export const getTitle = ({ title }: Book) => title.toLocaleLowerCase();
export const getAuthors = ({ authors }: Book) => authors.map((author) => author.toLocaleLowerCase()).join(", ");
export const getDateFinished = ({ reads }: Book) => {
    if (reads.length === 0) return "";
    return reads[0].date_finished;
}
export const sortByAuthor = ({ authors: { 0: a } }: Book, { authors: { 0: b } }: Book) => {
    const aLast = a.split(" ").pop();
    const bLast = b.split(" ").pop();
    return aLast.localeCompare(bLast);
}
export const sortByTitle = ({ title: a }: Book, { title: b }: Book) => a.localeCompare(b);
export const sortByRating = ({ reads: aReads }: Book, { reads: bReads }: Book) => {
    const a = getRating({ reads: aReads }).toString();
    const b = getRating({ reads: bReads }).toString();
    return a.localeCompare(b);
};

export const readFilter = ({ reads }: Book) => reads.length > 0;