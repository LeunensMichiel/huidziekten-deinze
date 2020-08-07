import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import { WelcomeWrapper, WelcomeImageWrapper } from "./welcomeStyles"

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <WelcomeImageWrapper>
        <Img
          alt="praktijkafbeelding"
          fluid={data.placeholder.childImageSharp.fluid}
        />
      </WelcomeImageWrapper>
      <WelcomeWrapper>
        <h1>Welkom,</h1>
        <p>
          Huidziektendeinze is een <b>team van dermatologen</b>, gelegen in het
          hartje van Deinze.
        </p>
        <p>
          Turpis mattis ultrices nulla lacinia in. Dui condimentum a leo tortor,
          leo lectus ante eget sed. Arcu venenatis amet scelerisque tincidunt.
        </p>
        <Link to="/praktisch/">Maak een afspraak</Link>
      </WelcomeWrapper>
    </>
  )
}

export default Welcome
