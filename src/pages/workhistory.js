import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

import resume from '../assets/HannahLazarusResume.pdf'
// import linkedin from '../images/LI-In-Bug.png'
import linkedin from '../images/linkedin.svg'

const Where = props => {
  return <>{props.children}</>
}

const WorkHistoryPage = () => (
  <Layout>
    <SEO title="Work History" />
    <h2
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <span>DeepRadiology</span>
      <span>2018-Current</span>
    </h2>
    <p>
      Javascript with React. Python with Django. All remote, so we use
      docker and command line tools like make. Git of course.
    </p>

    <a href={resume}>
      <h2>PDF</h2>
    </a>

    <a
      href="https://www.linkedin.com/in/hannah-lazarus-71b1862/"
      css={css`
      border: 1px solid tomato;
        /* background-color: tomato; */
        fill: #0077b5;
        path {
          fill: #0077b5;
        }
      `}
    >
      <svg alt="linkedin logo" height="50" src={linkedin} />
    </a>
    <linkedin />
    <div       css={css`
      border: 1px solid tomato;
        /* background-color: tomato; */
        fill: #0077b5;
      height: 3em;
        path {
          fill: #0077b5;
        }`}>
    <svg role="img" viewBox="0 0 24 24" height="60" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn icon</title>
    <path fill="#3F6078" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
</svg>
</div>

  </Layout>
)

export default WorkHistoryPage
