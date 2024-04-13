import { z } from "astro/zod";
import type { MovieSchema } from "./types";

type Movie = z.infer<typeof MovieSchema>

export const getRating = (movie: Movie) => {
    if (!movie.watches) return "";
    const watches = movie.watches;
    const rating = watches[watches.length - 1].rating;
    if (rating === 0) return "dnf";
    return rating;
}
export const getTitle = ({ title }: Movie) => title.toLocaleLowerCase();
