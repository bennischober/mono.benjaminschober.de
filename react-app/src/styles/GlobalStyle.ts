import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Calibre', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', -apple-system, system-ui, sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        margin: 0;
    }
    p {
        margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyle;
