import React from 'react'
import { css } from '@emotion/core'
import { GoMarkGithub } from 'react-icons/go'
import { IoMdPaper } from 'react-icons/io'
import Layout from '../components/layout'
import SEO from '../components/seo'
import resume from '../assets/data/HannahLazarusResume.pdf'
import LinkedIn from '../assets/images/linkedin'
import InfoItem from '../components/workinfoitem'

const WorkHistoryPage = () => (
  <Layout>
    <div
      css={css`
        margin: 1em;
        display: grid;
        grid-gap: 1.5em;
        justify-items: start;

        @media screen and (min-width: 450) {
          justify-items: stretch;
        }
      `}
    >
      <SEO title="Work History" />
      <InfoItem Icon={IoMdPaper} description="PDF Resume" link={resume} />
      <InfoItem
        Icon={GoMarkGithub}
        description="Github"
        link="https://github.com/hanhanhan/"
      />
      <InfoItem
        Icon={LinkedIn}
        description="Linked In"
        link="https://www.linkedin.com/in/hannah-lazarus-71b1862/"
      />
    </div>
  </Layout>
)

export default WorkHistoryPage
