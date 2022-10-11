import { createGlobalStyle } from "styled-components";
import { variables } from './variables';

const GlobalStyle = createGlobalStyle`
    ${variables};

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        background-color: var(--primary);
        color: white;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: var(--font-sans);
        font-size: var(--fs-xl);
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        margin: 0;
    }
    h2 {
      font-weight: 600;
      line-height: 1.1;
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

    /* Scrollbar Styles */
    html {
      scrollbar-width: thin;
      scrollbar-color: var(--secondary) var(--secondary-light);
    }
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: var(--secondary-light);
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--secondary-dark);
      border: 3px solid var(--secondary-light);
      border-radius: 10px;
    }

    header {
      background-color: var(--primary);
    }

    body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-size: var(--fs-xl);
    line-height: 1.3;
    @media (max-width: 480px) {
      font-size: var(--fs-lg);
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  .header-links {
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
  }

  section {
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
  }

  main {
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
  }

  .headline {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
  }

  .section-headline {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,var(--fs-heading));
    white-space: nowrap;
  }
  .section-headline::before {
    position: relative;
    align-self: flex-end;
    bottom: 4px;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-md),3vw,var(--fs-xxl));
    font-weight: 400;
  }
  .section-headline::after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--secondary-light);
  }

  .section-content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
  }
`;

export default GlobalStyle;
