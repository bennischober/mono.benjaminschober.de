import React from 'react';
import './App.css';
import {keepTheme, setTheme, getTheme} from "./utils/themes";
import {keepLanguage, setLanguage, getLanguage} from "./utils/languages";
import {Navbar} from "./app/components/navbar";
import {ThemeProvider} from "@material-ui/core";

// might change toggle theme functionality => calculated here and passed as argument (function) to child (Navbar)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.state = {theme: 'light', lang: 'de'};
    }

    componentDidMount = () => {
        keepTheme();
        keepLanguage();

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
                <div className="App">
                    <Navbar text={curLang.nav} onLangChange={this.handleLanguageChange}
                            onThemeChange={this.handleThemeChange}/>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
