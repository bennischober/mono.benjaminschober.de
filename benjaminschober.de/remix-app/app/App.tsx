import { Header } from "./components/Header";
import { LeftSidebar } from "./components/SidebarLeft";
import { IntroductionSection } from "./sections/Introduction";
import styled from "styled-components";
import { AboutSection } from "./sections/About";

const StyledMain = styled.main`
    padding: 0px 150px;
`;

function App() {
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

export default App;
