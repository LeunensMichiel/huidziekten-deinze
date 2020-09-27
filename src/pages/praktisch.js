import React from "react"
import Layout from "../components/layout"
import Practical from "../components/practical/practical"
import SEO from "../components/seo/seo"

const PraktischPage = () => {
  return (
    <Layout>
      <SEO
        title="Praktisch"
        description="Praktische info betreffende het bereiken van Huidziekten Deinze en hoe u een afspraak kan maken."
      />
      <Practical />
    </Layout>
  )
}

export default PraktischPage
