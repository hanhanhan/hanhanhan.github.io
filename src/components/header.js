import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { css } from '@emotion/core'
import { baseFont, headerBackground } from '../style/colors'
import { menuToggle } from '../style/header'
import NavLink from './navlink'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: headerBackground.toString(),
    }}
  >
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        margin: `0 0.5em`,
      }}
    >
      <h1
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            color: baseFont.darken(0.5).toString(),
            textDecoration: `none`,
            padding: `0`,
            margin: `0`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav css={menuToggle}>
        <input type="checkbox" />
        {/* For CSS Hamburger */}
        <span />
        <span />
        <span />
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workhistory">Work History</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Hannah Lazarus`,
}

export default Header
