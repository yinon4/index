import { getLast } from "functions";
import type { filter, get, sort } from "types";
import { type Album } from "./types";

export const getTitle: get<Album> = ({ title }) => title.toLocaleLowerCase();
export const getArtist: get<Album> = ({ artist }) => artist.toLocaleLowerCase();

// export const byTitle: sort<Album> = (a, b) => {
//   return a.title.localeCompare(b.title);
// };

// export const bySeen: filter<Album> = (movie) => movie.watches?.length > 0;

// export const byDate: sort<Album> = (a, b) => {
//   const dateA = new Date(getLast(a.watches).date);
//   const dateB = new Date(getLast(b.watches).date);
//   return dateA.getTime() - dateB.getTime();
// };
