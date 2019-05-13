import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button, TomatoButton} from "../components/Button"
import Info from "../components/info"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
<div className="row">
<Link to="/products/">
  <h1>Products Page</h1>
</Link>
<Info/>
<Link to="/images/">images</Link>
  <div className="col-6">Hello World</div>
  <Button>Im testing</Button>
  <TomatoButton>what</TomatoButton>
  <div className="col-6">Hello World</div>
</div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
