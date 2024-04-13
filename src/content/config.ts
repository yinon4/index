import { z } from "astro/zod";

const blogCollection = ({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.optional(z.array(z.string())),
  }),
});

export const collections = {
  blog: blogCollection,
};
