import React from "react"
import { TreatmentImage, TreatmentWrapper } from "./treatmentStyles"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Question from "../../assets/icons/question.svg"
const Treatment = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "skin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <TreatmentImage>
        <Img
          alt="abstracte foto van huid"
          className="header__image"
          fluid={data.header.childImageSharp.fluid}
        />
        <h1>Behandelingen</h1>
      </TreatmentImage>
      <TreatmentWrapper>
        <h2>Alle huidziekten</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Psoriasis</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                egestas adipiscing sollicitudin phasellus.
              </p>
            </div>
          </div>
          <div className="treatment__item">
            <p>Eczeem</p>
          </div>
          <div className="treatment__item">
            <p>Wratten</p>
          </div>
          <div className="treatment__item">
            <p>Pigmentvlekken</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                egestas adipiscing sollicitudin phasellus.
              </p>
            </div>
          </div>
          <div className="treatment__item">
            <p>Acne</p>
          </div>
        </div>
        <h2>Haar- en nagelziekten</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Haarziekten</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                egestas adipiscing sollicitudin phasellus.
              </p>
            </div>
          </div>
          <div className="treatment__item">
            <p>Nagelziekten</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                egestas adipiscing sollicitudin phasellus.
              </p>
            </div>
          </div>
        </div>
        <h2>Contactallergietesten</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <h2>Lichttherapie</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>PUVA-therapie</p>
          </div>
          <div className="treatment__item">
            <p>UVB-therapie</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                egestas adipiscing sollicitudin phasellus.
              </p>
            </div>
          </div>
        </div>
        <h2>Chirurgische en cosmetische huidproblemen</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Dermatochirorgie</p>
          </div>
          <div className="treatment__item">
            <p>Rimpelbehandeling</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                egestas adipiscing sollicitudin phasellus.
              </p>
            </div>
          </div>
          <div className="treatment__item">
            <p>Laserbehandeling</p>
          </div>
        </div>
      </TreatmentWrapper>
    </>
  )
}

export default Treatment
