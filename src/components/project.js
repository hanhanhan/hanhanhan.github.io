import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const Project = props => (
  <>
    <a
      css={css`
        text-decoration: none;
      `}
      href={props.link}
    >
      <h3
        css={css`
          text-decoration: none;
          padding: 0.5em 0.5em;
          margin: 1em 0 0.2em;
          background-color: tomato;
        `}
      >
        {props.name}
      </h3>
    </a>
    <div>{props.description}</div>
  </>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
}

export default Project
