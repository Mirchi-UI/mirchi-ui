import { source } from "@/lib/source";
 
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Preview } from "@/components/mdx/preview";
import { PreviewClient } from "@/components/mdx/preview-client";
import { CompactPreview } from "@/components/mdx/compact-preview";
import { ComponentGrid } from "@/components/mdx/component-grid";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "@/src/components/layout/page";

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    console.log("page", page);
    if (!page) notFound();

    const MDX = page.data.body;
    const rawTitle = page.data.title;
    const hideHeader = rawTitle.includes("{hide}");
    const displayTitle = rawTitle.replace("{hide}", "").trim();

    return (
        <DocsPage toc={page.data.toc} >
            {!hideHeader && <DocsTitle>{displayTitle}</DocsTitle>}
            {!hideHeader && <DocsDescription>{page.data.description}</DocsDescription>}
            <DocsBody>
                <MDX
                    components={{
                        ...defaultMdxComponents,
                        Preview,
                        PreviewClient,
                        CompactPreview,
                        ComponentGrid,
                    }}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const displayTitle = page.data.title.replace("{hide}", "").trim();

    return {
        title: displayTitle,
        description: page.data.description,
    };
}
