import { z } from "astro/zod";

export type Link = {
    href: string;
    text: string;
};

export const datestring = z.string().refine(
    (val) => Date.parse(val), { message: "Invalid custom datestring" }
)

export type sort<T> = (a: T, b: T) => number;
export type filter<T> = (a: T) => boolean;
export type get<T> = (a: T) => any;



