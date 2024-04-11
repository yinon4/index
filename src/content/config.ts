import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // tags: z.optional(z.array(z.string())),
  }),
});

export const collections = {
  blog: blogCollection,
};
