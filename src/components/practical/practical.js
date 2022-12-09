import React, { useState } from "react"
import ReactMapGL, { Marker, FullscreenControl } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby"

import { PraktischWrapper, Title } from "./practicalStyles"

const Practical = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 50.976323,
    longitude: 3.526634,
    zoom: 17,
  })
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "praktijk.jpg" }) {
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
      <Title id="afspraak">Afspraak</Title>
      <PraktischWrapper>
        <div className="appointment__group">
          <h2>Hoe maak ik een afspraak?</h2>
          <p>
            U kan enkel <b>telefonisch</b> een afspraak maken op het nummer{" "}
            <b>09/3861610</b> op
          </p>
          <table>
            <colgroup>
              <col className="col--header" />
              <col className="col--time" />
              <col className="col--time" />
            </colgroup>
            <tbody>
              <tr>
                <th>Maandag</th>
                <td>08:30 – 12:00</td>
                <td>14:00 – 19:00</td>
              </tr>
              <tr>
                <th>Woensdag</th>
                <td>08:30 – 12:00</td>
                <td>14:00 – 19:00</td>
              </tr>
              <tr>
                <th>Vrijdag</th>
                <td>08:30 – 12:00</td>
                <td>14:00 – 17:30</td>
              </tr>
            </tbody>
          </table>
          <p>
            Indien u uw afspraak <b>niet</b> kan nakomen, gelieve deze{" "}
            <b>tijdig</b> te annuleren (telefonisch of via mail), zo geeft u
            iemand anders de kans om op dat moment te consulteren.
          </p>
          <p>
            Indien u met 2 personen komt, gelieve dan 2 opeenvolgende afspraken
            te maken.
          </p>
        </div>
        <div className="appointment__group">
          <h2>Wanneer kan u komen?</h2>
          <p>
            De raadplegingen gaan door op maandag, dinsdag, woensdag en vrijdag.
          </p>
          <p>Hou rekening met een gemiddelde wachttijd minimum 12 weken.</p>
          <h2>Wat breng ik mee?</h2>
          <ul>
            <li>Identiteitskaart</li>
            <li>Medicatielijst</li>
            <li>Reeds gebruikte behandelingen</li>
            <li>Vignet van de mutualiteit (kleefbriefje)</li>
          </ul>
        </div>
      </PraktischWrapper>
      <Title>Bereikbaarheid</Title>
      <PraktischWrapper>
        <div className="appointment__group">
          <Img
            alt="Foto van de praktijk langs de buitenkant"
            className="header__image"
            objectPosition="50% 0%"
            fluid={data.header.childImageSharp.fluid}
          />
        </div>
        <div className="appointment__group">
          <h2>Adres</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Blockeel+%2F+Isabel/@50.9765558,3.5264521,19.32z/data=!4m13!1m7!3m6!1s0x47c36b5eea4c696d:0xa6474767282785e5!2sVolhardingslaan+72,+9800+Deinze!3b1!8m2!3d50.9763254!4d3.5267287!3m4!1s0x47c36b5ec33a99f7:0xf31f9d1a554920dc!8m2!3d50.9760873!4d3.5265677"
          >
            Volhardingslaan 72/12
            <br />
            9800 Deinze, België
            <small>-Klik om te openen in Google Maps-</small>
          </a>
          <h2>Instructies</h2>
          <p>
            Dit is in een appartementsgebouw gelegen aan het grote ronde punt
            bij Petegem-kerk, op het eerste verdiep, boven de Belfiusbank en
            rechtover het CM-gebouw.
          </p>
          <p>
            De ingang bevindt zich aan de kant van de Kortrijksesteenweg
            (tegenover bakker Christof).
          </p>
          <h2>Bereikbaarheid</h2>
          <ul className="map--ul">
            <li className="map--ul--car">
              Parkeergelegenheid op de Sint-Martinusparking of langs de
              volhardingslaan.
            </li>
            <li className="map--ul--bus">
              De praktijk bevindt zich op wandelafstand van het station. Vlakbij
              is er ook een halte van buslijn 75.
            </li>
            <li className="map--ul--bike">
              Er is een fietsenstalling voorzien aan de praktijk.
            </li>
          </ul>
        </div>
      </PraktischWrapper>
      <PraktischWrapper>
        <div className="appointment__group map">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={`${process.env.GATSBY_TOKEN_MAPBOX}`}
            mapStyle="mapbox://styles/michielleunens/ckdswxgee1da519ocdl7p4ute"
            onViewportChange={nextViewport => setViewport(nextViewport)}
          >
            <div style={{ position: "absolute", right: 12, top: 12 }}>
              <FullscreenControl />
            </div>
            <Marker latitude={50.97618} longitude={3.526176}>
              <div className="map__marker--belfius">Belfius</div>
            </Marker>
            <Marker latitude={50.976303} longitude={3.526223}>
              <div className="map__marker--arrow">{"->"}</div>
            </Marker>
          </ReactMapGL>
        </div>
      </PraktischWrapper>
    </>
  )
}

export default Practical
