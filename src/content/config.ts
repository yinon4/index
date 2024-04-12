import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.optional(z.array(z.string())),
  }),
});

const Review = z.object({
  date: z.string().datetime(), // get from github
  body: z.optional(z.string()),
  rating: z.optional(z.number().int().min(1).max(5)),
})

const movieCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.optional(z.string().url()), // embed
    watch_link: z.optional(z.string().url()),
    tags: z.optional(z.array(z.string())),
    views: z.optional(z.array(Review)),
  })
})

const bookCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    author: z.optional(z.string()), // if embed dont need
    url: z.optional(z.string().url()), // embed
    read_link: z.optional(z.string().url()),
    tags: z.optional(z.array(z.string())),
    reads: z.optional(z.array(Review)),
  })
})

const musicCollection = defineCollection({
  type: 'data',
  schema: z.object({ // song or album
    title: z.string(),
    artist: z.string(), // if embed dont need
    url: z.optional(z.string().url()), // embed
    listen_link: z.optional(z.string().url()),
    tags: z.optional(z.array(z.string())),
    listens: z.optional(z.array(Review)),
  })
})

export const collections = {
  blog: blogCollection,
  movies: movieCollection,
  books: bookCollection,
  music: musicCollection,
};
