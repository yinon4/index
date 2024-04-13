import { z } from "astro/zod";
import { datestring } from "../types";

export const BookType = z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    tags: z.array(z.string()),
    reads: z.array(z.object({
        date_started: datestring,
        date_finished: datestring,
        review: z.string(),
        rating: z.number().int().min(0).max(5), // 0 - dnf
        tags: z.array(z.string())

    }))
})