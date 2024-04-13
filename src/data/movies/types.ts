import { z } from "astro/zod";
import { datestring } from "types";

export const MovieSchema = z.object({
    title: z.string(),
    director: z.string().optional(),
    tags: z.array(z.string()).optional(),
    poster: z.optional(z.string().url()),
    url: z.optional(z.string().url()),
    watches: z.array(z.object({
        date: (datestring), // should be date with time // need to update db
        review: z.string().optional(),
        rating: z.number().int().min(0).max(5),
        tags: z.array(z.string()).optional()
    })).optional()
})

export const MoviesSchema = z.array(MovieSchema)

export type Movie = z.infer<typeof MovieSchema>
