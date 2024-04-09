export function splitPath(path: string): { url: string; name: string }[] {
  let dirs = path.split("/");
  console.log(dirs);
  dirs = dirs.filter((str) => str != "");
  console.log(dirs);

  const info = [];
  while (dirs.length) {
    info.unshift({ url: "/" + dirs.join("/"), name: dirs.pop() });
  }

  return info;
}
