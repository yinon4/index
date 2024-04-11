import { getCollection } from "astro:content";

const createLink = (path: string) => ({
  href: path,
  text: path.split("/").pop(),
});

const blog = (await getCollection("blog")) ?? [];

export const getBlog = () => {
  return blog;
};

export const getFolderContent = (path: string) => {
  const folder = blog
    .filter((post) => post.slug.startsWith(path) && post.slug !== path)
    .map((post) => createLink(post.slug));
  return folder;
};
