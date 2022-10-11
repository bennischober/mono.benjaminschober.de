import { css } from 'styled-components';

export const colors = {
  primary: "#262626",
  primaryDark: "#000000",
  primaryLight: "#4e4e4e",

  secondary: "#ff6f00",
  secondaryDark: "#c43e00",
  /* Use this, if needed on --primary background */
  secondaryLight: "#ffa040",
}

export const variables = css`
  :root {
    --primary: ${colors.primary};
    --primary-dark: ${colors.primaryDark};
    --primary-light: ${colors.primaryLight};

    --secondary: ${colors.secondary};
    --secondary-dark: ${colors.secondaryDark};
    /* Use this, if needed on --primary background */
    --secondary-light: ${colors.secondaryLight};

    --fs-xxs: 12px;
    --fs-xs: 13px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 20px;
    --fs-xxl: 22px;
    --fs-heading: 32px;

    --font-sans: 'Calibre', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', -apple-system, system-ui, sans-serif;
    --font-mono: 'Roboto Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace;

    --border-radius: 5px;
    
    --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }
`;
