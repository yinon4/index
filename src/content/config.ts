import { z } from "astro/zod";

const blogCollection = {
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
};

export const collections = {
  blog: blogCollection,
};
