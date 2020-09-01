import React from "react"
import Layout from "../components/layout"
import Team from "../components/team/team"
import SEO from "../components/seo/seo"

const TeamPage = () => {
  return (
    <Layout>
      <SEO
        title="Ons Team"
        description="Het team achter huidziekten Deinze, waaronder Dr. Isabel Blockeel, Dr. Lies Vanquickenborne en Sandra Dubois"
      />
      <Team />
    </Layout>
  )
}

export default TeamPage
