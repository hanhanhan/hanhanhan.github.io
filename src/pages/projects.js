import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project.js'
import { projects } from '../components/projects.js'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    {projects.map(project => (
      <Project key={project.name} {...project} />
    ))}
  </Layout>
)

export default ProjectsPage
