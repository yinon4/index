import { z } from "astro/zod";

export const collections = {
  blog: {
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  },
};
