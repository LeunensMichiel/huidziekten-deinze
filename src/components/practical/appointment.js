import React from "react"
import { AppointmentWrapper } from "./practicalStyles"

const Appointment = () => {
  return (
    <AppointmentWrapper>
      <div className="appointment__group">
        <h1>Afspraak</h1>
        <h2>Hoe maak ik een afspraak?</h2>
        <p>
          U kan enkel <b>telefonisch</b> een afspraak maken op het nummer{" "}
          <b>09/3861610</b> op
        </p>
        {/* <table>
          <colgroup>
            <col style="background-color: #0f0" />
            <col span="2" />
          </colgroup>
          <tr>
            <th>Maandag</th>
            <td>08:30 – 12:00 </td>
            <td>14:00 – 19:00 </td>
          </tr>
          <tr>
            <td>Green</td>
            <td>Yellow</td>
            <td>Orange</td>
          </tr>
        </table> */}
        <p>
          Indien u uw afspraak niet kan nakomen, gelieve deze tijdig te
          annuleren (telefonisch of via mail), zo geeft u iemand anders de kans
          om op dat moment te consulteren.
        </p>
        <p>
          Indien u met 2 personen komt, gelieve dan 2 opeenvolgende afspraken te
          maken.
        </p>
      </div>
    </AppointmentWrapper>
  )
}

export default Appointment
