import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          
          title
        }
      }
    }
  `)

  
  return (
    <nav>
      <h1>Wajahat Dev</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar


