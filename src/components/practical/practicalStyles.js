import styled from "@emotion/styled"
import Car from "../../assets/car.svg"
import Bike from "../../assets/bike.svg"
import Train from "../../assets/train.svg"

export const Title = styled.h1`
  grid-column: 2 / span 12;
  font-size: ${p => p.theme.fontSizes[4]};
  font-family: ${p => p.theme.fonts.heading};
  margin-top: ${p => p.theme.space[5]};
`

export const PraktischWrapper = styled.section`
  grid-column: 2 / span 12;
  display: flex;
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[6]};

  h2 {
    font-family: ${p => p.theme.fonts.heading};
    margin-bottom: ${p => p.theme.space[3]};

    &:nth-of-type(2) {
      margin-top: ${p => p.theme.space[5]};
    }
  }

  p,
  table,
  ul,
  a {
    margin-bottom: ${p => p.theme.space[3]};
    font-size: ${p => p.theme.fontSizes[2]};
  }
  b {
    color: ${p => p.theme.colors.accentRich};
  }

  ul {
    margin-left: ${p => p.theme.space[0]};
    list-style-position: inside;

    &.map--ul {
      li {
        margin: ${p => p.theme.space[1]} 0;
        list-style: none;
        padding-left: ${p => p.theme.space[5]};

        &:nth-of-type(1) {
          background: url(${Car}) no-repeat left center;
        }
        &:nth-of-type(2) {
          background: url(${Train}) no-repeat left center;
        }
        &:nth-of-type(3) {
          background: url(${Bike}) no-repeat left center;
        }
      }
    }
  }
  li {
    line-height: ${p => p.theme.lineHeights.body};
  }
  a {
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.accentRich};
    transition: color 0.4s ease;
    text-decoration: underline;
    font-weight: 700;
    &.active {
      color: ${p => p.theme.colors.accent};
    }
    &:hover,
    &:focus {
      color: ${p => p.theme.colors.accent};
      transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  small {
    display: block;
    font-size: ${p => p.theme.fontSizes[0]};
  }
  .appointment__group {
    flex: 1;
    th,
    td {
      padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
      text-align: left;
      vertical-align: center;
      border-radius: 2px;
      overflow: hidden;
    }
    table {
      border-spacing: ${p => p.theme.space[0]};
    }
    &:nth-of-type(2) {
      margin-left: ${p => p.theme.space[5]};
    }
  }
  .col--header {
    background: ${p => p.theme.colors.accentLight};
  }
  .col--time {
    background: ${p => p.theme.colors.accent};
  }
  .map {
    background: ${p => p.theme.colors.accentLight};
    height: 360px;
    .map__marker--belfius,
    .map__marker--arrow {
      background: ${p => p.theme.colors.accentRich};
      padding: ${p => p.theme.space[0]};
      border-radius: 8px;
      font-weight: 700;
    }
    .map__marker--arrow {
      transform: rotate(45deg);
    }
  }
  @media ${p => p.theme.mq.tablet} {
    margin-bottom: ${p => p.theme.space[5]};
    .appointment__group {
      flex: 1;
      &:nth-of-type(2) {
        flex: 0.75;
        margin-left: ${p => p.theme.space[3]};
      }
      th,
      td {
        padding: ${p => p.theme.space[2]} 10px;
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[3]};

    .map {
      height: 200px;
    }
    ul {
      margin-bottom: 0;
    }
    .appointment__group {
      flex: 1;
      margin-bottom: ${p => p.theme.space[3]};
      &:nth-of-type(2) {
        flex: 1;
        margin-left: 0;
      }
      th,
      td {
        text-align: center;
      }
    }
  }
`
