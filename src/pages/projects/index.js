import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import  * as styles from "../../styles/projects.module.css"
import Img from 'gatsby-image'

export default function projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div>
        <h2>Portfolio</h2>
        <h1>Index File - Projects</h1>
        <div className={styles.projects}>
          {projects.map(project => {
            return (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <div>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                  <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                </div>
              </Link>
            )
          })}
        </div>
        <p> You can contact me at {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
  projects: allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
    nodes {
      frontmatter {
        title
        slug
        stack
        thumb {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImg {
          id
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

    
`
