import { z } from "astro/zod";
import { datestring } from "types";

export const BookSchema = z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    reads: z.array(z.object({
        date_started: datestring,
        date_finished: datestring,
        review: z.string(),
        rating: z.number().int().min(0).max(5), // 0 - dnf
        tags: z.array(z.string())

    }))
})

export const BooksSchema = z.array(BookSchema)