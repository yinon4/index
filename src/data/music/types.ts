import { z } from "astro/zod";
import { datestring } from "types";

export const AlbumSchema = z.object({
    title: z.string(),
    artist: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().url().optional(),
    url: z.string().url().optional(),
    listens: z.array(z.object({
        date: (datestring), // z.string().datetime() // need to update db
        review: z.string().optional(),
        rating: z.number().int().min(0).max(5).optional(),
        tags: z.array(z.string()).optional()
    })).min(1).optional()
})

export type Album = z.infer<typeof AlbumSchema>

