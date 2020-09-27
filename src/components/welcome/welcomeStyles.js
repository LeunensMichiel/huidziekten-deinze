import styled from "@emotion/styled"

export const WelcomeWrapper = styled.article`
  grid-column: 9 / span 5;
  align-self: center;
  h1 {
    font-size: ${p => p.theme.fontSizes[4]};
    font-family: ${p => p.theme.fonts.heading};
    margin-bottom: ${p => p.theme.space[3]};
  }

  p {
    margin-bottom: ${p => p.theme.space[3]};
    &:first-of-type {
      font-size: 120%;
    }
    b {
      color: ${p => p.theme.colors.accentRich};
    }
  }

  a {
    display: inline-block;
    font-weight: 700;
    border: 2px solid ${p => p.theme.colors.dark};
    border-radius: ${p => p.theme.borderRadius};
    padding: 16px ${p => p.theme.space[2]};
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: 4 / span 8;
    margin-bottom: ${p => p.theme.space[6]};
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    margin-bottom: ${p => p.theme.space[6]};
  }
`

export const WelcomeImageWrapper = styled.figure`
  grid-column: 2 / span 6;
  align-self: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    opacity: 0.25;
    background: ${p => p.theme.colors.accentLight};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    background: ${p => p.theme.colors.accent};
    top: -10px;
    left: -10px;
    width: 100px;
    height: 66px;
  }
  > div:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    background: ${p => p.theme.colors.accentLight};
    bottom: 0;
    left: 0;
    right: 0;
    height: 25px;
    opacity: 0.25;
  }
  > div:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    background: ${p => p.theme.colors.accentLight};
    bottom: 0;
    left: 0;
    height: 33px;
    width: 33%;
    opacity: 0.25;
  }
  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 12;
    margin-top: ${p => p.theme.space[2]};
    margin-bottom: ${p => p.theme.space[5]};
    height: 0;
    padding-bottom: 33%;
    overflow: hidden;
  }
  @media ${p => p.theme.mq.mobileM} {
    padding-bottom: 56%;
  }
`
