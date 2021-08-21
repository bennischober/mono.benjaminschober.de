function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.dataset.theme = themeName;
}

function keepTheme() {
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'dark') {
            setTheme('dark');
        } else if (localStorage.getItem('theme') === 'light') {
            setTheme('light');
        }
    }
}

module.exports = {
    setTheme,
    keepTheme
}