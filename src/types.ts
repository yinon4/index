import { z } from "astro/zod";

export type Link = {
    href: string;
    text: string;
};

const datestring = z.string().refine((val) => Date.parse(val), { message: "Invalid datestring" })

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


