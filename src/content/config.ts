import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.optional(z.array(z.string())),
  }),
});

// const Review = z.object({
//   date: z.string().datetime(), // get from github
//   body: z.optional(z.string()),
//   rating: z.optional(z.number().int().min(1).max(5)),
// })

// const movieCollection = defineCollection({
//   type: "data",
//   schema: z.object({
//     title: z.string(),
//     url: (z.string().url()).optional(), // embed // required?
//     watch_link: (z.string().url()).optional(),
//     tags: (z.array(z.string())).optional(),
//     views: (z.array(Review)).optional(),
//   })
// })

// const bookCollection = defineCollection({
//   type: "data",
//   schema: z.object({
//     title: z.string(),
//     author: (z.string()).optional(), // if embed dont need
//     url: (z.string().url()).optional(), // embed // required?
//     read_link: (z.string().url()).optional(),
//     tags: (z.array(z.string())).optional(),
//     reads: (z.array(Review)).optional(),
//   })
// })

// const musicCollection = defineCollection({
//   type: 'data',
//   schema: z.object({ // song or album
//     title: z.string(),
//     artist: z.string(), // if embed dont need
//     url: z.string().url().optional(), // embed // required?
//     listen_link: (z.string().url()).optional(),
//     tags: (z.array(z.string())).optional(),
//     listens: (z.array(Review)).optional(),
//   })
// })

export const collections = {
  blog: blogCollection,
  // movies: movieCollection,
  // books: bookCollection,
  // music: musicCollection,
};
