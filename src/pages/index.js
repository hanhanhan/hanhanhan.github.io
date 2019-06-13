import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project.js"
import { projects } from "../components/projects.js"


const theme = {
  one: "mediumseagreen",
  two: "salmon",
};

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      {
        projects.map(project => 
          { 
            return <Project key={project.name} {...project} />
          }
        )
      }
      <Link to="/workhistory/">Work History</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
