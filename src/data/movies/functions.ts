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
export const getDate = ({ watches }: Movie) => {
    if (!watches) return "";
    return new Date(watches[watches.length - 1].date).toLocaleDateString('en-CA', { year: '2-digit', month: 'short' });
}

type sortFn = (a: Movie, b: Movie) => number;
type filterFn = (movie: Movie) => boolean;
export const sortMovies = (by: sortFn, movies: Movie[]) => movies.sort(by);
export const filterMovies = (by: filterFn, movies: Movie[]) => movies.filter(by);

export const byTitle: sortFn = (a, b) => {
    return getTitle(a) > getTitle(b) ? 1 : -1;
}

export const bySeen: filterFn = (movie) => movie.watches?.length > 0;

