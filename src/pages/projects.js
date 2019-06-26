import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project.js'
import { projects } from '../components/projects.js'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    {projects.map(project => {
      return <Project key={project.name} {...project} />
    })}
  </Layout>
)

export default ProjectsPage
