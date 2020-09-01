import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/welcome/welcome"
import SEO from "../components/seo/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Behandelen van huidziekten"
        description="Huidziekten Deinze is een praktijk gesitueerd in Deinze, gespecialiseerd in het behandelen van huidziekten. Ze behandelen o.a. huidtumoren, moedervlekken, wratten, rimpels en meer."
      />
      <Welcome />
    </Layout>
  )
}

export default IndexPage
