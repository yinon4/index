import { getLast } from "functions";
import type { filter, get, sort } from "types";
import { type Movie } from "./types";

export const getRating: get<Movie> = (movie) => {
  if (!movie.watches) return "";
  const rating = getLast(movie.watches).rating;
  if (rating === 0) return "dnf";
  return rating;
};
export const getTitle: get<Movie> = ({ title }) => title.toLocaleLowerCase();
export const getDate: get<Movie> = ({ watches }) => {
  if (!watches) return "";
  return new Date(getLast(watches).date).toLocaleDateString("en-CA", {
    year: "2-digit",
    month: "short",
  });
};

export const byTitle: sort<Movie> = (a, b) => {
  return a.title.localeCompare(b.title);
};

export const bySeen: filter<Movie> = (movie) => movie.watches?.length > 0;

export const byDate: sort<Movie> = (a, b) => {
  const dateA = new Date(getLast(a.watches).date);
  const dateB = new Date(getLast(b.watches).date);
  return dateA.getTime() - dateB.getTime();
};
