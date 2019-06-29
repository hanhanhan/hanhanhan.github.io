import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project.js'
import { projects } from '../components/projects.js'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div
      css={css`
        @media screen and (min-width: 500px) {
          padding: 0 10vw;
          display: flex;
          flex-direction: column;
        }
      `}
    >
      {projects
        .sort((p1, p2) => p2.year - p1.year)
        .map(project => (
          <Project key={project.name} {...project} />
        ))}
    </div>
  </Layout>
)

export default ProjectsPage
