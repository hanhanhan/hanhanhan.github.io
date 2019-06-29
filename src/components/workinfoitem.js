import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { baseBackground } from '../style/colors';

const InfoItem = ({ Icon, iconSize = '4em', description, link }) => (
  <a
    href={link}
    css={css`
      display: flex;
      padding: 0.5em;
      text-decoration: none;
      justify-items: flex-start;
      transition: background-color 1s ease-in-out;
      :hover {
        background-color: ${baseBackground.darken(0.1).toString()};
      }
    `}
  >
    <Icon size={iconSize} />
    <span
      css={css`
        align-self: center;
        padding: 1em;
        font-size: 1.2em;
      `}
    >
      <h1
        css={css`
          font-size: 1em;
        `}
      >
        {description}
      </h1>
    </span>
  </a>
)

InfoItem.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  iconSize: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default InfoItem
