import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <p>
      <Link to="/blog/1/">Salmón Moldeado</Link>
      <Link to="/blog/2/">Ensalada de Nopales</Link>
    </p>
  </Layout>
)

export default IndexPage