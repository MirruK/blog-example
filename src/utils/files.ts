import { readdir } from "fs/promises";
import { readFile } from "fs/promises";

export async function fetchContentsForFilesInDir(dir: string) {
    const files = (await readdir(dir,{withFileTypes: true, recursive: false})).filter((f)=> f.isFile());
    const fileContents = files.map(file => readFile(dir + "/" + file.name))
    const arr = await Promise.all(fileContents);
    return arr.map(v=>v.toString('utf-8'));
}