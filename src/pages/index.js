import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <p>
      <Link to="/blog/1/">Salmón moldeado</Link>
      <br/>
      <Link to="/blog/2/">Ensalada de nopales</Link>
      <br/>
      <Link to="/blog/3/">Pastel de nuez</Link>
      <br/>
      <Link to="/blog/4/">Nueces con chocolate</Link>
      <br/>
      <Link to="/blog/5/">Almendras de chocolate</Link>
      <br/>
      <Link to="/blog/6/">Pastel Bimbo de nuez</Link>
      <br/>
      <Link to="/blog/7/">Croquetas de atún</Link>
      <br/>
      <Link to="/blog/8/">Galletas de coco</Link>
      <br/>
      <Link to="/blog/9/">Pasta para empanadas</Link>
      <br/>
      <Link to="/blog/10/">Pastel de calabaza tierna</Link>
      <br/>
      <Link to="/blog/11/">Pastel Rococó</Link>
      <br/>
      <Link to="/blog/12/">Pastel volteado de piña</Link>
      <br/>
      <Link to="/blog/13/">Brazo de gitano</Link>
    </p>
  </Layout>
)

export default IndexPage