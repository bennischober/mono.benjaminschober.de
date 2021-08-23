import React from 'react';
import './App.css';
import {setTheme, getTheme} from "./utils/themes";
import {setLanguage, getLanguage} from "./utils/languages";
import {Navbar} from "./app/components/navbar";
import {ThemeProvider} from "@material-ui/core";
import {TopContent} from "./app/components/topContent";
import Container from '@material-ui/core/Container';

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

        return (
            <ThemeProvider theme={curTheme}>
                <Container width="unset" maxWidth="100vw" className="App">
                    <Navbar text={curLang.nav} onLangChange={this.handleLanguageChange}
                            onThemeChange={this.handleThemeChange} themeState={this.state.theme}/>
                    <main>
                        <TopContent text={curLang.introduction} />
                    </main>
                    <footer>
                        <section>
                        </section>
                    </footer>
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
