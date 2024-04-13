import { z } from "astro/zod";
import type { BookType } from "../types";

type Book = z.infer<typeof BookType>

export const getTags = ({ tags }: Book) => tags.map((tag) => `#${tag}`)
export const getRating = ({ reads }: Book) => {
    if (reads.length === 0) return "";
    const rating = reads[reads.length - 1].rating;
    if (rating === 0) return "dnf";
    return rating;
}
export const getTitle = ({ title }: Book) => title.toLocaleLowerCase();
export const getAuthors = ({ authors }: Book) => authors.map((author) => author.toLocaleLowerCase()).join(", ");