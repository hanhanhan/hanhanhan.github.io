import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { FaPython, FaJs } from 'react-icons/fa'
import { projectHighlight, projectBackground } from '../style/colors'

/* ----------------------------------------------------------------
  Helpers
*/

// Random border radius value for fun
const roughly = (ratio = 1) =>
  Math.floor(Math.random() * 100 * ratio).toString(10)

const languageIcons = {
  python: <FaPython />,
  javascript: <FaJs />,
}

// ----------------------------------------------------------------

const Project = props => {
  const { name, link, year, description, language } = props
  const languages = language.map(l => <span key={l}>{languageIcons[l]}</span>)

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
            justify-content: left;
            padding: 0.5em;
            padding-left: 0;
            margin-top: 0.5em;
            border-radius: ${roughly(0.3)}% ${roughly()}% ${roughly()}% 0%;
            background-color: ${projectBackground.toString()};
            transition: background-color 0.5s ease-in-out;
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
        `}
      >
        <span
          css={css`
            padding: 0 0.5em;
          `}
        >
          {year}
        </span>
        {languages}
      </h4>
      <div>{description}</div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  year: PropTypes.string,
  language: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.node.isRequired,
}

export default Project
