import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

import resume from '../assets/data/HannahLazarusResume.pdf'
// import linkedin from '../images/LI-In-Bug.png'
import LinkedIn from '../assets/images/linkedin'
import { GoMarkGithub } from 'react-icons/go'


const iconSize = 60
const style = css`
display: flex;
justify-content: space-between;
`

const SummaryPage = () => (
  <Layout>
    <SEO title="Work History" />
    <h2
      css={style}
    >Right now</h2>
    <p>
      Javascript with React. Python with Django. All remote, so we use docker
      and command line tools like make. Git of course.
    </p>
    <LinkedIn size={iconSize}></LinkedIn>
    <GoMarkGithub size={iconSize}></GoMarkGithub>
    <a href={resume}>
      <h2>Resume PDF</h2>
    </a>
  </Layout>
)

export default SummaryPage
