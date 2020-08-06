import styled from "@emotion/styled"
import Fingerprint from "../../assets/fingerprint.png"

export const NavWrapper = styled.header`
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  align-content: center;
  @media ${p => p.theme.mq.tablet} {
    a {
      font-size: 16px;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 72px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    overflow-y: auto;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  hr {
    grid-column: 2 / span 12;
    padding-top: 8px;
    border-bottom: 1px solid ${p => p.theme.colors.accentRich};
  }
`

export const LogoWrapper = styled.div`
  grid-column: 2 / span 4;
  display: flex;
  align-items: center;
  background: url(${Fingerprint});
  background-repeat: no-repeat;
  background-size: contain;
  h2 {
    font-size: ${p => p.theme.fontSizes[3]};
    font-family: ${p => p.theme.fonts.heading};
    padding: ${p => p.theme.space[4]} 0;
  }
  @media ${p => p.theme.mq.mobileM} {
    display: ${p => (p.mobile ? "flex" : "none")};
    padding-left: ${p => p.theme.space[2]};
  }
`

export const LinkWrapper = styled.nav`
  grid-column: 6 / span 8;
  justify-self: end;
  display: flex;
  align-items: center;
  a {
    padding: ${p => p.theme.space[0]};
    margin: 0 ${p => p.theme.space[2]};
    font-size: ${p => p.theme.fontSizes[3]};
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
    justify-content: center;
    flex: auto;
    a {
      padding: ${p => p.theme.space[2]} 0;
      margin: 0;
      font-size: ${p => p.theme.fontSizes[4]} !important;
      &:not(:nth-of-type(4)) {
        margin-bottom: ${p => p.theme.space[2]};
      }
    }
  }
`

export const NavbarWrapper = styled.nav`
  /*Animation by https://github.com/jonsuh/hamburgers*/
  width: 100%;
  height: 72px;
  display: none;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10000;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.container};
  .hamburger {
    padding: 16px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    &:hover {
      opacity: 0.5;
    }
    &.is-active {
      &:hover {
        opacity: 0.5;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: ${p => p.theme.colors.black};
      }
    }
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    &,
    &::before,
    &::after {
      width: 40px;
      height: 4px;
      background-color: ${p => p.theme.colors.black};
      border-radius: 2px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }
  .hamburger--elastic {
    .hamburger-inner {
      top: 2px;
      transition-duration: 0.275s;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &::before {
        top: 10px;
        transition: opacity 0.125s 0.275s ease;
      }

      &::after {
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    &.is-active {
      .hamburger-inner {
        transform: translate3d(0, 10px, 0) rotate(135deg);
        transition-delay: 0.075s;

        &::before {
          transition-delay: 0s;
          opacity: 0;
        }

        &::after {
          transform: translate3d(0, -20px, 0) rotate(-270deg);
          transition-delay: 0.075s;
        }
      }
    }
    .hamburger--elastic-r {
      .hamburger-inner {
        top: 2px;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
          top: 10px;
          transition: opacity 0.125s 0.275s ease;
        }

        &::after {
          top: 20px;
          transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
      &.is-active {
        .hamburger-inner {
          transform: translate3d(0, 10px, 0) rotate(-135deg);
          transition-delay: 0.075s;

          &::before {
            transition-delay: 0s;
            opacity: 0;
          }

          &::after {
            transform: translate3d(0, -20px, 0) rotate(270deg);
            transition-delay: 0.075s;
          }
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
  }
`
