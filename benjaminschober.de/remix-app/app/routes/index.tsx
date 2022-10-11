import styled from "styled-components";
import { Header } from "~/components/Header";
import { LeftSidebar } from "~/components/SidebarLeft";
import { IntroductionSection } from "~/sections/Introduction";
import { AboutSection } from "~/sections/About";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getJobs, getProjects } from "~/loaders";

const StyledMain = styled.main`
    padding: 0px 150px;
`;

export const loader: LoaderFunction = async () => {
    const projects = await getProjects();
    const jobs = await getJobs();

    return json({
        projects: projects,
        jobs: jobs,
    });
};

export default function Index() {
    const data = useLoaderData();

    return (
        <>
            <Header />
            <LeftSidebar />
            <div id="content">
                <StyledMain>
                    <IntroductionSection />
                    <AboutSection />
                </StyledMain>
            </div>
        </>
    );
}
