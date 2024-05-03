import { getCollection } from "astro:content";
import type { Link } from "components/Header.astro";

export const blog = ((await getCollection("blog")) ?? []).map(
  ({ slug, ...entry }) => ({
    slug: slug === "index" ? "" : slug,
    ...entry,
  }),
);

type Post = typeof blog[number];

const createLink = (post: Post): Link => ({
  href: `${import.meta.env.BASE_URL}/${post.slug}`,
  text: post.data.title,
});

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
    .map((post) => createLink(post));

export const sortLinks = (links: Link[]) =>
  links.sort((link, prev) =>
    link.text === "..."
      ? 1
      : prev.text === "..."
        ? -1
        : link.text.localeCompare(prev.text),
  );
