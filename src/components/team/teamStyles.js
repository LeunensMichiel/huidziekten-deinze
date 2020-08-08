import styled from "@emotion/styled"

export const TeamWrapper = styled.div`
  grid-column: 3 / span 10;
  align-self: center;
  text-align: center;

  h1 {
    font-size: ${p => p.theme.fontSizes[4]};
    font-family: ${p => p.theme.fonts.heading};
    margin-bottom: ${p => p.theme.space[5]};
  }

  em {
    color: ${p => p.theme.colors.accentRich};
  }

  .team__row {
    display: flex;
    justify-content: space-around;
  }

  .team__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    h2 {
      font-family: ${p => p.theme.fonts.heading};
      color: ${p => p.theme.colors.accentRich};
      font-size: ${p => p.theme.fontSizes[2]};
      margin-top: ${p => p.theme.space[2]};
    }
    > span {
      font-size: ${p => p.theme.fontSizes[1]};
      margin-top: ${p => p.theme.space[0]};
    }

    &:hover,
    &:focus {
      .team__item--imagewrapper {
        b {
          opacity: 1;
        }
      }
      .team__item--image {
        img {
          filter: blur(10px);
        }
        &:after {
          opacity: 0.5;
        }
      }
    }
  }
  .team__item--imagewrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    b {
      font-size: ${p => p.theme.fontSizes[1]};
      color: ${p => p.theme.colors.white};
      position: absolute;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    span {
      margin-top: ${p => p.theme.space[0]};
      font-size: ${p => p.theme.fontSizes[3]};
      display: block;
    }
  }
  .team__item--image {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      opacity: 0;
      background: ${p => p.theme.colors.accentRich};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    img {
      filter: blur(0);
      transition: filter 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 12;
    .team__item--image {
      width: 180px;
      height: 180px;
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    margin-top: ${p => p.theme.space[5]};
    margin-bottom: ${p => p.theme.space[5]};
    .team__row {
      flex-direction: column;
    }
    .team__item {
      margin-bottom: ${p => p.theme.space[4]};
    }
    h1 {
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`
