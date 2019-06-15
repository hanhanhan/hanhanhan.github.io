import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Color from 'color'
import { projectHighlight } from './colors'

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
      <h3
        css={css`
          text-decoration: none;
        `}
        href={link}
      >
        <a
          css={css`
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            padding: 0em;
            margin: 1.5em 0 0.6em 0;
            // eslint-disable-next-line prettier/prettier
            border-radius: ${roughly()}% ${roughly()}% ${roughly()}% ${roughly()}%;
            background-color: honeydew;
            &:hover {
              background-color: ${projectHighlight.toString()};
            }
          `}
        >
          <span>{name}</span>
          <span>{year}</span>
        </a>
      </h3>
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
