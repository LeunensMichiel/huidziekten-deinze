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
          Met deze site willen we u op de hoogte brengen van de werking van onze
          praktijk.
        </p>
        <p>
          U kan er informatie vinden over wie we zijn, wat we doen, waar en
          wanneer we raadplegingen doen en hoe u een <b>afspraak</b> kan maken.
        </p>
        <Link to="/praktisch#afspraak">Maak een afspraak</Link>
      </WelcomeWrapper>
    </>
  )
}

export default Welcome
