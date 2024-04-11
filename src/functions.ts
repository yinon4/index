import { getCollection } from "astro:content";

const createLink = (path: string) => ({
  href: path,
  text: path.split("/").pop(),
});

const normalizeIndexSlug = (slug: string) => (slug === "index" ? "" : slug);

const blog = ((await getCollection("blog")) ?? []).map(
  ({ slug, ...entry }) => ({
    slug: normalizeIndexSlug(slug),
    ...entry,
  }),
);

export const getBlog = () => blog;

export const getFolderContent = (path: string) =>
  blog
    .filter((post) => post.slug.startsWith(path) && post.slug !== path)
    .map((post) => createLink(post.slug));
