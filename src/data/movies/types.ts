import { z } from "astro/zod";
import { datestring } from "types";

export const MovieSchema = z.object({
    title: z.string(),
    director: z.string().optional(),
    tags: z.array(z.string()).optional(),
    poster: z.string().url().optional(),
    url: z.string().url().optional(),
    watches: z.array(z.object({
        date: (datestring), // z.string().datetime() // need to update db
        review: z.string().optional(),
        rating: z.number().int().min(0).max(5).optional(),
        tags: z.array(z.string()).optional()
    })).min(1).optional()
})

export type Movie = z.infer<typeof MovieSchema>

