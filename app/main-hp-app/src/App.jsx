import React from 'react';
import './App.css';
import {setTheme, getTheme} from "./utils/themes";
import {setLanguage, getLanguage} from "./utils/languages";
import {Navbar} from "./app/components/navbar";
import {responsiveFontSizes, ThemeProvider} from "@material-ui/core";
import {TopContent} from "./app/components/topContent";
import Container from '@material-ui/core/Container';
import {Footer} from "./app/components/footer";

// might change toggle theme functionality => calculated here and passed as argument (function) to child (Navbar)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.state = {theme: 'light', lang: 'de'};
    }

    // set initial states by getting
    componentDidMount = () => {
        if(localStorage.getItem('theme')) this.handleThemeChange(localStorage.getItem('theme'));
        if (localStorage.getItem('language')) this.handleLanguageChange(localStorage.getItem('language'));
    }

    handleLanguageChange(lang) {
        this.setState({lang: lang});
        setLanguage(lang);
    }

    handleThemeChange(theme) {
        this.setState({theme: theme});
        setTheme(theme);
    }

    render() {
        const curLang = getLanguage();
        const curTheme = getTheme();
        const variants = ["navbar", "typedSubheading"];
        const responsiveFontTheme = responsiveFontSizes(curTheme, {variants: variants});
        const responsive = responsiveFontSizes(responsiveFontTheme);

        return (
            <ThemeProvider theme={responsive}>
                <Container sx={{maxWidth: "100vw !important"}}>
                    <Navbar text={curLang.nav} onLangChange={this.handleLanguageChange}
                            onThemeChange={this.handleThemeChange} themeState={this.state.theme}/>
                </Container>
                <Container sx={{maxWidth: "90vw !important"}}>
                    <main>
                        <TopContent text={curLang.introduction} />
                        <section>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <div id="resume">HELLO</div>
                            <div id="about">HELLO</div>
                            <div id="projects">HELLO</div>
                        </section>
                    </main>
                    <Footer text={curLang.footer.text} links={curLang.footer.links}/>
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
