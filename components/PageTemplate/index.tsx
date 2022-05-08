import Head from "next/head";
import { PageTemplateProps } from "../../types/interfaces";

export function PageTemplate({
    title,
    description,
    content,
    favicon,
    children,
}: PageTemplateProps) {
    const descriptionFallback =
        description ||
        "Mantine is a next-gen platform for managing your projects.";
    const contentFallback = content || "";
    const faviconFallback = favicon || "/favicon.ico";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={descriptionFallback} content={contentFallback} />
                <link rel="icon" href={faviconFallback} />
            </Head>
            {children}
        </>
    );
}
