import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { defaultTheme } from './defaultTheme';


export const GlobalStyle = createGlobalStyle`

${normalize}

@font-face {
  font-family: Inter;
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src:
    url("/fonts/Inter-Medium.woff2") format("woff2"),
    url("/fonts/Inter-Medium.woff") format("woff");
}

@font-face {
  font-family: Inter;
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src:
    url("/fonts/Inter-Bold.woff2") format("woff2"),
    url("/fonts/Inter-Bold.woff") format("woff");
}

@font-face {
  font-family: "KyivTypeSans";
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src:
    url("/fonts/KyivTypeSans-Medium.woff2") format("woff2"),
    url("/fonts/KyivTypeSans-Medium.woff") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src:
    url("/fonts/Montserrat-Bold.woff2") format("woff2"),
    url("/fonts/Montserrat-Bold.woff") format("woff");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    min-height: 100%;
    background-color: ${defaultTheme.colors.black2};
  }

body,
html {
    margin: 0 auto;
  }

body {
  position: relative;
  min-height: 100%;
  min-width: 320px;
  max-width: 1440px;
  font-family: ${defaultTheme.fonts.fontInter};
  font-size: ${defaultTheme.fontSizeDefault};
  line-height: auto;
  color: ${defaultTheme.colors.white};

  a {
    text-decoration: none;
  }
}

img {
    max-width: 100%;
    height: auto;
  }
`;
