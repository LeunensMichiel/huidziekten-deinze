import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundWrapper = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
  h1 {
    font-family: ${p => p.theme.fonts.heading};
  }
  a {
    text-decoration: underline;
    font-weight: 700;
  }
`
const NotFoundPage = () => (
  <Layout>
    <NotFoundWrapper>
      <h1>Deze pagina bestaat niet.</h1>
      <p>
        Ga terug naar de <Link to="/">homepagina</Link>.
      </p>
    </NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
