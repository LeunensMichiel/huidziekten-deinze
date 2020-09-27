import styled from "@emotion/styled"

export const TreatmentImage = styled.figure`
  grid-column: 2 / span 12;
  height: 240px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${p => p.theme.space[5]} 0;

  h1 {
    font-size: ${p => p.theme.fontSizes[4]};
    font-family: ${p => p.theme.fonts.heading};
    color: ${p => p.theme.colors.white};
    position: absolute;
    z-index: 5;
  }
  /* .header__image {
    z-index: 1;
    width: 100%;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      opacity: 0.33;
      background: ${p => p.theme.colors.accent};
      bottom: 0;
      left: 0;
      width: 60%;
      height: 36px;
    }
    &:before {
      content: "";
      position: absolute;
      z-index: 2;
      opacity: 0.33;
      background: ${p => p.theme.colors.accent};
      bottom: 0;
      left: 0;
      width: 40%;
      height: 170px;
    }
  } */
`

export const TreatmentWrapper = styled.div`
  grid-column: 2 / span 12;
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[5]};

  h2 {
    grid-column: 2 / span 12;
    font-size: ${p => p.theme.fontSizes[3]};
    font-family: ${p => p.theme.fonts.heading};
    margin-bottom: ${p => p.theme.space[3]};
  }
  .treatment__item--container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: ${p => p.theme.space[6]};
  }
  .treatment__item {
    grid-column: span 1;
    display: flex;
    justify-content: space-between;
    padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
    background: ${p => p.theme.colors.accentLight};
    border-radius: ${p => p.theme.borderRadius};
    position: relative;
    z-index: 150;

    svg {
      cursor: help;
      path {
        transition: fill 500ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      &:hover,
      &:focus {
        ~ .treatment__item--desc {
          opacity: 1;
        }
        path {
          fill: ${p => p.theme.colors.accentRich} !important;
        }
      }
    }
  }

  .treatment__item--desc {
    position: absolute;
    padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
    background: ${p => p.theme.colors.accent};
    bottom: 120%;
    right: 0;
    box-shadow: ${p => p.theme.shadows.button};
    opacity: 0;
    transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  @media ${p => p.theme.mq.mobileM} {
    .treatment__item {
      grid-column: span 3;
    }
  }
`
