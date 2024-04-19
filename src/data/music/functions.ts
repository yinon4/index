import type { get, sort } from "types";
import { type Album } from "./types";

export const getTitle: get<Album> = ({ title }) => title.toLocaleLowerCase();
export const getArtist: get<Album> = ({ artist }) => artist.toLocaleLowerCase();

export const byArtist: sort<Album> = (a, b) => {
  return a.artist.localeCompare(b.artist);
};
