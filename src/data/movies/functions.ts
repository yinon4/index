import type { sort, filter, get } from "types";
import { type Movie } from "./types";
import { getLast } from "functions";


export const getRating: get<Movie> = (movie) => {
    if (!movie.watches) return "";
    const rating = getLast(movie.watches).rating;
    if (rating === 0) return "dnf";
    return rating;
}
export const getTitle: get<Movie> = ({ title }) => title.toLocaleLowerCase();
export const getDate: get<Movie> = ({ watches }) => {
    if (!watches) return "";
    return new Date(getLast(watches).date).toLocaleDateString('en-CA', { year: '2-digit', month: 'short' });
}

export const byTitle: sort<Movie> = (a, b) => {
    return a.title.localeCompare(b.title);
}

export const bySeen: filter<Movie> = (movie) => movie.watches?.length > 0;
