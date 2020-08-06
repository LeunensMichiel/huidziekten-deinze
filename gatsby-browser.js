import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import huidziektenTheme from "./src/themes/huidziekten_theme"

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }

  body,
  #___gatsby {
    height: 100%;
  }

  body {
    font-family: ${huidziektenTheme.fonts.body};
    line-height: ${huidziektenTheme.lineHeights.heading};
    background: ${huidziektenTheme.colors.white};
    color: ${huidziektenTheme.colors.black};
  }

  #gatsby-focus-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: ${huidziektenTheme.fontSizes[5]};
  }

  p {
    font-size: ${huidziektenTheme.fontSizes[2]};
    font-family: ${huidziektenTheme.fonts.body};
    line-height: ${huidziektenTheme.lineHeights.body};
  }

  a {
    color: ${huidziektenTheme.colors.black};
    transition: color 0.4s ease;
    text-decoration: none;
    &.active {
      color: ${huidziektenTheme.colors.accentRich};
      font-weight: 700;
    }
    &:hover {
      color: ${huidziektenTheme.colors.accent};
      transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={huidziektenTheme}>
    <Global styles={GlobalStyles} />
    {element}
  </ThemeProvider>
)
