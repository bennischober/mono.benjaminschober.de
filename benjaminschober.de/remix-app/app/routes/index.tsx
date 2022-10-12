import styled from "styled-components";
import { Header } from "~/components/Header";
import { LeftSidebar } from "~/components/SidebarLeft";
import { IntroductionSection } from "~/sections/Introduction";
import { AboutSection } from "~/sections/About";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllForMain } from "~/loaders";
import { getValuesFromJSON } from "~/utils/helper";
import { MainProps } from "~/types";

const StyledMain = styled.main`
    padding: 0px 150px;
`;

export const loader: LoaderFunction = async () => {
    return getAllForMain();
};

export default function Index() {
    // extend MainProps with the data from the loader
    const data = useLoaderData();
    if (typeof window !== "undefined") console.log(data);

    // create header links
    const headerLinks = getValuesFromJSON(data.layout.sections);
    const introduction = data.layout.introduction;
    const leftSidebar = data.layout.links;

    const about = data.about;

    return (
        <>
            <Header links={headerLinks} />
            <LeftSidebar links={leftSidebar} />
            <div id="content">
                <StyledMain>
                    <IntroductionSection
                        title={introduction.title}
                        name={introduction.name}
                        description={introduction.description}
                    />
                    <AboutSection
                        anchor={about.meta.url}
                        title={about.meta.title}
                        description={about.content}
                        picture={about.meta.cover}
                    />
                </StyledMain>
            </div>
        </>
    );
}
