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
    height: 100%;
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
    &:hover,
    &:focus {
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

  .ReactModal__Content {
    padding: ${huidziektenTheme.space[6]} !important;
    border-radius: ${huidziektenTheme.borderRadius} !important;
    box-shadow: ${huidziektenTheme.shadows.container};
    transform: translate(-50%, 50%);
    transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
    h3 {
      font-family: ${huidziektenTheme.fonts.heading};
      font-size: ${huidziektenTheme.fontSizes[3]};
      margin-bottom: ${huidziektenTheme.space[4]};
    }
    ul {
      padding-left: ${huidziektenTheme.space[4]};
    }
    b {
      color: ${huidziektenTheme.colors.accentRich};
    }
    ol > li:not(:last-of-type) {
      margin-bottom: ${huidziektenTheme.space[2]};
    }
    li {
      line-height: ${huidziektenTheme.lineHeights.body};
    }
    svg {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;
    }
    .team__info {
      display: flex;
    }
    .team__text {
      flex: 1;
      white-space: pre-wrap;
    }
    .team__item--imageModal {
      flex: 1;
      max-height: 500px;
      margin-left: ${huidziektenTheme.space[4]};
      overflow: hidden;
    }
  }
  .ReactModal__Content--after-open {
    transform: translate(-50%, -50%);
  }
  .ReactModal__Content--before-close {
    transform: translate(-50%, 50%);
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  @media ${huidziektenTheme.mq.mobileM} {
    .ReactModal__Content {
      padding: ${huidziektenTheme.space[4]} !important;
      margin-top: 20% !important;
      left: 0 !important;
      right: 0 !important;
      margin-right: unset !important;
      transform: translate(0, 50%);

      h3 {
        font-size: ${huidziektenTheme.fontSizes[2]};
      }
      p {
        font-size: ${huidziektenTheme.fontSizes[1]};
        margin-bottom: ${huidziektenTheme.space[2]};
      }
      svg {
        top: 12px;
        right: 12px;
      }
      .team__info {
        flex-direction: column;
      }
      .team__item--imageModal {
        margin-left: 0;
        max-height: 300px;
      }
    }
    .ReactModal__Content--after-open {
      transform: translate(0, -50%);
    }
    .ReactModal__Content--before-close {
      transform: translate(0, 50%);
    }
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={huidziektenTheme}>
    <Global styles={GlobalStyles} />
    {element}
  </ThemeProvider>
)
