import { z } from "astro/zod";

export const MovieSchema = z.object({
    title: z.string(),
    director: z.string(),
    tags: z.array(z.string()),
    poster: z.optional(z.string().url()),
    url: z.optional(z.string().url()),
    watches: z.array(z.object({
        date: z.string().datetime(),
        review: z.string(),
        rating: z.number().int().min(0).max(5),
        tags: z.array(z.string())
    }))
})

export const MoviesSchema = z.array(MovieSchema)