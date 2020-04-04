import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//import "./bulmastyle.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Coming soon...</h1>

  </Layout>
)

export default IndexPage
