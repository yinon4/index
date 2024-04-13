import { z } from "astro/zod";
import { datestring } from "types";

export const BookSchema = z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    cover: z.optional(z.string().url()),
    url: z.optional(z.string().url()),
    reads: z.array(z.object({
        date_started: z.optional(datestring),
        date_finished: z.optional(datestring),
        review: z.optional(z.string()),
        rating: z.optional(z.number().int().min(0).max(5)),
        tags: z.optional(z.array(z.string()))
    }))
})

export const BooksSchema = z.array(BookSchema)