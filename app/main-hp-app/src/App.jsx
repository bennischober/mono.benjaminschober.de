import React from 'react';
import './App.css';
import {responsiveFontSizes, ThemeProvider} from "@mui/material";
import {FooterSection} from "./app/containers/footer-section";
import {MainContentSection} from "./app/containers/main-content-section";
import {NavSection} from "./app/containers/nav-section";
import {setTheme, getTheme} from "./utils/themes";
import {setLanguage, getLanguage} from "./utils/languages";

// might change toggle theme functionality => calculated here and passed as argument (function) to child (Navbar)
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handleLoadData = this.handleLoadData.bind(this);
        this.state = {theme: 'light', lang: 'de', data: null};
    }

    // set initial states by getting
    componentDidMount = () => {
        this.handleLoadData();

        if (localStorage.getItem('theme')) {
            this.handleThemeChange(localStorage.getItem('theme'));
        } else {
            this.handleThemeChange('dark');
        }
        if (localStorage.getItem('language')) {
            this.handleLanguageChange(localStorage.getItem('language'));
        } else {
            this.handleLanguageChange('en');
        }
    }

    handleLanguageChange(lang) {
        this.setState({lang: lang});
        setLanguage(lang, this.handleLoadData);
    }

    handleThemeChange(theme) {
        this.setState({theme: theme});
        setTheme(theme);
    }

    handleLoadData() {
        if (getLanguage() !== undefined) {
            this.setState({data: "loaded"});
        }
    }

    render() {
        // early out, if data is not loaded!
        if (!this.state.data) {
            return <div/>
        }

        const curLang = getLanguage();
        const curTheme = getTheme();
        const variants = ["navbar", "sectionHeadlines", "styledLinks"]; //"typedSubheading",
        const responsiveFontTheme = responsiveFontSizes(curTheme, {variants: variants});
        const responsive = responsiveFontSizes(responsiveFontTheme);

        // ROUTE AROUND BODY CONTAINER
        return (
            // route to /bsbadmin
            <ThemeProvider theme={responsive}>
                <NavSection text={curLang.nav} onLangChange={this.handleLanguageChange}
                            onThemeChange={this.handleThemeChange} themeState={this.state.theme}/>
                <MainContentSection text={curLang}/>
                <FooterSection text={curLang.footer.text} links={curLang.footer.links}/>
            </ThemeProvider>
        );
    }
}

export default App;
