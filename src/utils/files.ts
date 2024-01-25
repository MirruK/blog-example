import { readdir } from "fs/promises";
import { readFile } from "fs/promises";

export async function fetchContentsForFilesInDir(dir: string) {
  try {
    const files = (
      await readdir(dir, { withFileTypes: true, recursive: false })
    ).filter((f) => f.isFile());
    const fileContents = files.map((file) => readFile(dir + "/" + file.name));
    const arr = await Promise.all(fileContents);
    return arr.map((v) => v.toString("utf-8"));
  } catch (e) {
    console.error(`Fetching data from dir: ${dir} failed with error: ${e}`);
    return [];
  }
}

export async function fetchFileContents(filePath: string) {
  try {
    return (await readFile(filePath)).toString("utf-8");
  } catch (e) {
    console.error(e);
    return null;
  }
}
