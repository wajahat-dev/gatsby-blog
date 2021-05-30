import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import * as styles from "../styles/home.module.css"
import Img from 'gatsby-image'

export default function Home({data}) {
 const result = data.file.childImageSharp.fluid
 
  return (
    <Layout>
      <section className={styles.section}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux designer & web</p>
          <Link to="/about">My Portfolio Project</Link>
        </div>
        {/* <img src="/banner.png" alt="img" style={{ maxWidth: "100%" }} /> */}
        <Img 
        fluid={result}
         />
      </section>
    </Layout>
  )
}

export const query = graphql`

query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid(maxWidth: 500) {
        # src
        # srcSet
        # sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
}


`
