import styled from "@emotion/styled"

export const AppointmentWrapper = styled.secion`
  grid-column: 2 / span 12;
  display: flex;
  h1 {
    font-size: ${p => p.theme.fontSizes[4]};
    font-family: ${p => p.theme.fonts.heading};
  }
  h2 {
    font-family: ${p => p.theme.fonts.heading};
  }

  b {
    color: ${p => p.theme.colors.accentRich};
  }

  .appointment__group {
  }
`
