import fs from "fs/promises"
import path from "path"
import matter from 'gray-matter';
import { marked } from "marked";
import { parseJSON, parseMarkdownMeta } from "~/utils/parser";
import { LayoutProps, Standard } from "~/types";

const _path = path.join(__dirname, "..");
const _contentPath = path.join(_path, "content");

/**
 * This is a wrapper function to get content for the main page. Currently gets content from Files at a path, but can also could be replaced with a database.
 * @param parser Parser function to parse the content of the files.
 * @param fileEnding Optional - File ending to look for
 * @param multi Optional - If true, returns an array of all files, if false, returns the first file found.
 * @returns Promise with the content (usually JSON)
 */
const get = async <T>(parser: <T>(val: string) => T, fileEnding?: string, multi?: boolean) => {
    const multiFiles = multi ?? true;
    const _fileEnding = fileEnding || ".json";
    const dir = await fs.readdir(_contentPath);

    if (!multiFiles) {
        const file = dir.find((file) => file.endsWith(_fileEnding));
        if (!file) {
            return {} as T;
        }

        const content = await fs.readFile(path.join(_contentPath, file), "utf-8");
        return parser<T>(content);
    }

    return Promise.all(
        dir.filter((file) => file.endsWith(_fileEnding)).map(async (file) => {
            const filePath = path.join(_contentPath, file);
            const fileContents = await fs.readFile(filePath, "utf8");

            return parser<T>(fileContents);
        })
    );
};

/**
 * This function gets, converts and returns the content for the main page.
 */
const getAllForMain = async () => {
    const markdown = await get<Standard.Content.TContent>(parseMarkdownMeta, ".md");
    // parse MD files
    // was Standard.Content.TContent[] before any
    const r: { [key: string]: any } = {};
    if (Array.isArray(markdown)) {
        markdown.forEach((e) => {
            if (r[e.meta.category]) {
                r[e.meta.category].push(e);
            } else {
                r[e.meta.category] = [e];
            }
        });
    }

    // sanitize r - if array on key 'about' exists, remove the array and just return the element
    if (r.about && Array.isArray(r.about)) {
        r.about = r.about[0];
    }

    // get layout / basic text content
    const layout = await get<LayoutProps>(parseJSON, ".json", false);

    return {
        layout: layout,
        ...r,
    };
}

export { get, getAllForMain };
