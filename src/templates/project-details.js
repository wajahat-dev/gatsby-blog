import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'
import { Link, graphql } from "gatsby"

const ProjectDetails = ({data}) => {
 
  const {html} = data.markdownRemark
  const {stack, title, featuredImg} = data.markdownRemark.frontmatter
  
 
  return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div>
                    <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html}} />

               
            </div>
        </Layout>
    );
}

export default ProjectDetails;

export const query = graphql`
query ProjectsPage($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    id
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}


`