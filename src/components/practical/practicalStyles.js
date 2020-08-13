import styled from "@emotion/styled"
import Car from "../../assets/car.svg"
import Bike from "../../assets/bike.svg"
import Train from "../../assets/train.svg"

export const Title = styled.h1`
  grid-column: 2 / span 12;
  font-size: ${p => p.theme.fontSizes[4]};
  font-family: ${p => p.theme.fonts.heading};
  margin-top: ${p => p.theme.space[6]};
`

export const PraktischWrapper = styled.secion`
  grid-column: 2 / span 12;
  display: flex;
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[5]};

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
  li,
  a {
    line-height: ${p => p.theme.lineHeights.body};
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
  }
`
