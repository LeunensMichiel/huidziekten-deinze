import React from "react"
import Layout from "../components/layout"
import Treatment from "../components/treatment/treatment"
import SEO from "../components/seo/seo"

const BehandelingenPage = () => {
  return (
    <Layout>
      <SEO
        title="Behandelingen"
        description="Huidziekten Deinze behandelt o.a. huidtumoren, moedervlekken, wratten, rimpels, pigmentvlekken en veel meer."
      />
      <Treatment />
    </Layout>
  )
}

export default BehandelingenPage
