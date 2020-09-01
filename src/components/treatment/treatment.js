import React from "react"
import { TreatmentImage, TreatmentWrapper } from "./treatmentStyles"
import Img from "gatsby-image/withIEPolyfill"
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
          objectPosition="50% 0%"
          fluid={data.header.childImageSharp.fluid}
        />
        <h1>Behandelingen</h1>
      </TreatmentImage>
      <TreatmentWrapper>
        <h2>Alle huidziekten</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Psoriasis</p>
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
                Hierbij wordt een handmicroscoop gebruikt, waarbij dieper
                gelegen structuren en kleuren zichtbaar worden en waardoor o.a.
                huidkankers sneller kunnen herkend worden.
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
          </div>
          <div className="treatment__item">
            <p>Nagelziekten</p>
          </div>
        </div>
        <h2>Contactallergietesten</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Contactallergie</p>
          </div>
        </div>
        <h2>Lichttherapie</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>PUVA-therapie</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                O.a. voor psoriasis, eczeem, zonneallergie, vitiligo en lichen
                ruber
              </p>
            </div>
          </div>
          <div className="treatment__item">
            <p>UVB-therapie</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                O.a. voor psoriasis, eczeem, zonneallergie, vitiligo en lichen
                ruber
              </p>
            </div>
          </div>
        </div>
        <h2>Chirurgische en cosmetische huidproblemen</h2>
        <div className="treatment__item--container">
          <div className="treatment__item">
            <p>Dermatochirorgie</p>
            <Question />
            <div className="treatment__item--desc">
              <p>Verwijdering moedervlekken, huidtumoren, cysten…</p>
            </div>
          </div>
          <div className="treatment__item">
            <p>Rimpelbehandeling</p>
            <Question />
            <div className="treatment__item--desc">
              <p>Door middel van botulinetoxine en/of fillers</p>
            </div>
          </div>
          <div className="treatment__item">
            <p>Laserbehandeling</p>
            <Question />
            <div className="treatment__item--desc">
              <p>
                In onze praktijk is er een toestel beschikbaar voor de
                behandeling van couperose, wijnvlekken en overbeharing. Voor
                andere indicaties wordt er samengewerkt met het Cutaan Laser
                Centrum in Aalter.
              </p>
            </div>
          </div>
        </div>
      </TreatmentWrapper>
    </>
  )
}

export default Treatment
