import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { GoMarkGithub } from 'react-icons/go'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavLink from '../components/navlink'
import resume from '../assets/data/HannahLazarusResume.pdf'
import LinkedIn from '../assets/images/linkedin'
import {IoMdPaper} from 'react-icons/io'

const Where = props => <>{props.children}</>
const iconSize = '4em'

const WorkHistoryPage = () => (
  <Layout>
    <div
      css={css`
        margin: 1em;
        display: grid;
        grid-gap: 1.5em;
        justify-items: center;
      `}
    >
      <SEO title="Work History" />
      <a href={resume} 
                css={css`
                display: flex;
                justify-items: center;
                `}
      >
        <IoMdPaper size={iconSize}></IoMdPaper>
        <span css={css`
          align-self: center;
        `}

        >PDF Resume</span>
      </a>
      <a href="https://github.com/hanhanhan/">
        <GoMarkGithub size={iconSize} />
        Github
      </a>
      <a href="https://www.linkedin.com/in/hannah-lazarus-71b1862/"><LinkedIn size={iconSize} />
      LinkedIn</a>
    </div>
  </Layout>
)

export default WorkHistoryPage
