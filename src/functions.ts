import { getCollection } from "astro:content";

const createLink = (path: string) => ({
  href: path,
  text: path.split("/").pop(),
});

const normalizeIndexSlug = (slug: string) => (slug === "index" ? "" : slug);

export const blog = ((await getCollection("blog")) ?? []).map(
  ({ slug, ...entry }) => ({
    slug: normalizeIndexSlug(slug),
    ...entry,
  }),
);

const countSlashes = (path: string) => {
  if (path === "") return -1;
  const matches = path.match(/\//g);
  if (!matches) return 0;
  return matches.length;
};
const isChildPath = (parentPath: string, path: string) =>
  path.startsWith(parentPath) &&
  countSlashes(path) === countSlashes(parentPath) + 1;

export const getFolderContent = (folderPath: string) =>
  blog
    .filter((post) => isChildPath(folderPath, post.slug))
    .map((post) => createLink(post.slug));
