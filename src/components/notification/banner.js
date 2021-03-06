import React, { useState } from "react"
import Modal from "react-modal"

import { BannerWrapper } from "./notificationStyles"
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
    maxWidth: "960px",
    maxHeight: "85vh",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
}
const Banner = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  Modal.setAppElement("#___gatsby")

  return (
    <>
      <BannerWrapper>
        Corona-maatregelen: Het zijn uitzonderlijke tijden.{" "}
        <button onClick={openModal}>Lees hier</button> meer over de huidige
        richtlijnen.
      </BannerWrapper>
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Coronamaatregelen"
      >
        <Cross onClick={closeModal} role="button" tabindex="0" />
        <h3>
          In het kader van de coronacrisis en met het oog op de ieders
          veiligheid, zijn de volgende richtlijnen van toepassing:
        </h3>
        <ol>
          <li>
            <b>
              Bij de minste ziekteklachten (niezen, keelpijn, hoesten, koorts),
              gelieve niet te komen naar de consultatie.
            </b>
          </li>
          <li>
            Het dragen van een <b>mondmasker is verplicht</b> (heeft u geen
            mondmasker dan kan u ook met sjaal neus en mond bedekken).
          </li>
          <li>
            Graag maximaal 2 patienten tegelijk in de wachtzaal, daarom:
            <ul>
              <li>
                Kom <b>niet te vroeg</b>. U kan eventueel even in uw auto
                wachten tot het tijdstip van uw afspraak.
              </li>
              <li>
                Kom <b>alleen</b> tenzij u begeleiding nodig hebt.
              </li>
              <li>
                Breng <b>geen kinderen</b> mee, behalve indien zij de patiënt
                zijn. Andere kinderen kunnen niet meekomen.
              </li>
            </ul>
          </li>
          <li>
            Wij proberen de tijd dat u in de wachtzaal moet verblijven te
            beperken. Daarom is het belangrijk dat de consultaties zo stipt
            mogelijk verlopen. De consultatie zal dan ook <b>kort en bondig </b>
            zijn. Niet-dringende bijkomende problemen worden verwezen naar een
            latere consultatie.
          </li>
          <li>
            Ontsmet uw handen met handgel bij binnengaan in de wachtzaal en bij
            de dokter.
          </li>
          <li>Bij voorkeur betalen met BANKCONTACTapp of PAYCONIQ.</li>
        </ol>
      </Modal>
    </>
  )
}

export default Banner
