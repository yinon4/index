import { z } from "astro/zod";
import { datestring } from "types";

export const BookSchema = z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()).min(1).optional(),
    cover: z.string().url().optional(),
    url: z.string().url().optional(),
    reads: z.array(z.object({
        date_started: datestring.optional(), // should be required // change db add libby data
        date_finished: datestring.optional(),
        review: z.string().optional(),
        rating: z.number().int().min(0).max(5).optional(),
        tags: z.array(z.string()).min(1).optional()
    })).min(1).optional()
})

export type Book = z.infer<typeof BookSchema>
