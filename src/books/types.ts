import { z } from "astro/zod";
import { datestring } from "types";

export const BookSchema = z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    cover: z.optional(z.string().url()),
    url: z.optional(z.string().url()),
    reads: z.array(z.object({
        date_started: datestring,
        date_finished: datestring,
        review: z.string(),
        rating: z.number().int().min(0).max(5),
        tags: z.array(z.string())
    }))
})

export const BooksSchema = z.array(BookSchema)