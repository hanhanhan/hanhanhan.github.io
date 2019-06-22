import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Color from 'color'
import { baseBackground, projectHighlight, projectBackground } from './colors'

// Random border radius value for fun
const roughly = () => Math.floor(Math.random() * 100).toString(10)

const Project = props => {
  const { name, link, year, description } = props

  return (
    <div
      css={css`
        margin: 1em;
      `}
    >
      <h3>
        <a
          href={link}
          css={css`
            display: flex;
            justify-content: space-between;
            padding: 0.5em;
            padding-left: 0;
            margin-top: 0.5em;
            border-radius: 0% ${roughly()}% ${roughly()}%
              0}%;
            background-color: ${projectBackground.toString()};
            &:hover {
              background-color: ${projectHighlight.toString()};
            }
          `}
        >
          {name}
        </a>
      </h3>
      <h4
        css={css`
          padding: 0.5em 0;
          background-color: ${projectBackground.saturate(0.1).toString()}
        `}
      >
      {year}
      </h4>
      <div>{description}</div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.node.isRequired,
}

export default Project
