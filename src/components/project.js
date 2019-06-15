import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Color from 'color'
import { projectHighlight } from './colors'

// Border radius random value for fun
const roughly = () => Math.floor(Math.random() * 100).toString(10)

const Project = props => {
  const { name, link, year, description } = props

  return (
    <div
      css={css`
        margin: 1em;
      `}
    >
      <a
        css={css`
		  text-decoration: none;
        `}
        href={link}
      >
        <h3
		  css={css`
		  	display: inline-block;
            text-decoration: none;
            padding: 0em;
            margin: 1.5em 0 0.6em 0;
            background-color: ${projectHighlight.toString()};
            border-radius: ${roughly()}% ${roughly()}% ${roughly()}%
              ${roughly()}%;
          `}
        >
          {name}
        </h3>
        <h3
          css={css`
            display: inline-block;
          `}
        >
          {year}
        </h3>
      </a>
      <div>{description}</div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
}

export default Project
