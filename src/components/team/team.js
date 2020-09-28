import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Modal from "react-modal"

import { TeamWrapper } from "./teamStyles"
import Cross from "../../assets/icons/cross.svg"
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    zIndex: "200",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minWidth: "50%",
    maxWidth: "960px",
    maxHeight: "85vh",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
}
const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      isabel: file(relativePath: { eq: "isabel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lies: file(relativePath: { eq: "lies.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sandra: file(relativePath: { eq: "sandra.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentMember, setCurrentMember] = useState(0)
  const names = [
    "Dr. Isabel Blockeel",
    "Dr. Lies Vanquickenborne",
    "Sandra Dubois",
  ]
  const descriptions = [
    "Isabel volbracht haar opleiding geneeskunde aan de KULeuven in 1995 en specialiseerde zich daarna in de dermato-venereologie aan de Universiteit Leuven.\n\nDr. Isabel Blockeel is sinds 1999 werkzaam in Deinze en is ook verbonden aan het Cutaan Laser Centrum in Aalter.",
    "Dr. Lies Vanquickenborne studeerde geneeskunde aan de KU Leuven en behaalde haar diploma in 1994. Nadien specialiseerde ze zich in de dermatologie met opleidingen in  AZ Sint Lucas Brugge  en UZ Leuven. Ze werkt nog steeds in AZ Sint Lucas Brugge gedurende 1 ½ dag/ week. \n\nDaarnaast werkt ze sinds 2005 samen met Dr. Blockeel in Deinze.",
    "Sandra Dubois is verpleegkundige en is sinds 2019 in onze praktijk werkzaam. Ze heeft voordien gewerkt op de dienst pediatrie in het Sint-Vincentiusziekenhui in Deinze. Ze zal uw contactpersoon zijn als u een afspraak wenst te maken.\n\nZe staat in voor de praktische organisatie, assistentie bij chirurgische ingrepen, wondzorg, verwijdering van hechtingen…",
  ]
  const images = [
    data.isabel.childImageSharp.fluid,
    data.lies.childImageSharp.fluid,
    data.sandra.childImageSharp.fluid,
  ]

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  Modal.setAppElement("#___gatsby")
  return (
    <>
      <TeamWrapper>
        <h1>
          Huidziekten <em>Deinze</em>
        </h1>
        <div className="team__row">
          <div
            className="team__item"
            onClick={() => {
              openModal()
              setCurrentMember(0)
            }}
            role="button"
          >
            <div className="team__item--imagewrapper">
              <Img
                alt="foto van dokter Isabel Blockeel"
                fluid={data.isabel.childImageSharp.fluid}
                className="team__item--image"
              />
              <b>
                Meer over <span>Isabel</span>
              </b>
            </div>
            <h2>Dr. Isabel Blockeel</h2>
            {/* <span>Bedrijfsfunctie</span> */}
          </div>
          <div
            className="team__item"
            onClick={() => {
              openModal()
              setCurrentMember(1)
            }}
            role="button"
          >
            <div className="team__item--imagewrapper">
              <Img
                alt="foto van dokter Lies Vanquickenborne"
                fluid={data.lies.childImageSharp.fluid}
                className="team__item--image"
              />
              <b>
                Meer over <span>Lies</span>
              </b>
            </div>
            <h2>Dr. Lies Vanquickenborne</h2>
            {/* <span>Bedrijfsfunctie</span> */}
          </div>
          <div
            className="team__item"
            onClick={() => {
              openModal()
              setCurrentMember(2)
            }}
            role="button"
          >
            <div className="team__item--imagewrapper">
              <Img
                alt="foto van Sandra Dubois"
                fluid={data.sandra.childImageSharp.fluid}
                className="team__item--image"
              />
              <b>
                Meer over <span>Sandra</span>
              </b>
            </div>
            <h2>Sandra Dubois</h2>
            {/* <span>Bedrijfsfunctie</span> */}
          </div>
        </div>
      </TeamWrapper>
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Coronamaatregelen"
      >
        <Cross onClick={closeModal} role="button" tabindex="0" />
        <div className="team__info">
          <div className="team__text">
            <h3>{names[currentMember]}</h3>
            <p>{descriptions[currentMember]}</p>
          </div>
          <Img
            className="team__item--imageModal"
            fluid={images[currentMember]}
            alt={names[currentMember]}
          />
        </div>
      </Modal>
    </>
  )
}

export default Team
