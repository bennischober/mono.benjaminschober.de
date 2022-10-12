import matter from 'gray-matter';
import { marked } from "marked";
import DOMPurify from 'isomorphic-dompurify';

export const parseJSON = <T>(fileContents: string) => {
    try {
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(error);
        return {} as T;
    }
}

export const parseMarkdown = (content: string) => {
    try {
        const parsed = marked.parse(content).replace(/\r?\n|\r/g, "");
        return DOMPurify.sanitize(parsed);
    } catch (error) {
        console.error(error);
        return "";
    }
}

export const parseMarkdownMeta = <T>(content: string) => {
    let frontMatter;
    try {
        frontMatter = matter(content);
    } catch (error) {
        console.error("parse function", error);
        return {} as T;
    }
    const body = parseMarkdown(frontMatter.content);

    return {
        content: body,
        meta: frontMatter.data,
        isEmpty: body === "" || frontMatter.content === "",
    } as T;
};
