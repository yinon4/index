import { z } from "astro/zod";

export type Link = {
    href: string;
    text: string;
};

export const datestring = z.string().refine(
    (val) => Date.parse(val), { message: "Invalid custom datestring" }
)




