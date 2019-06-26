import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { baseFont } from './colors'
import { css } from '@emotion/core'

// Nav button based on:
// https://css-tricks.com/responsive-menu-concepts/
// and https://codepen.io/erikterwan/pen/EVzeRP

const hamburgerCSS = css`
  padding-top: 0em;
  margin: 0;
`

const menuToggle = css`
  user-select: none;
  position: relative;
  z-index: 1;
  input {
    /* opacity: 0; /* hide this */
    position: absolute;
    z-index: 2; /* and place it over the hamburger */
    width: 3em;
    height: 3em;
    top: -1em;
  }

  /*
 * Just a quick hamburger
 */
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*
 * But let's hide the middle one.
 */
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lavender`,
    }}
  >
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
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
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Work History</li>
          <li>Projects</li>
          <li>
            {' '}
            <a
              href="https://github.com/hanhanhan/"
              style={{
                padding: `0`,
                margin: `0`,
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <GoMarkGithub size="3em" color="salmon" css={hamburgerCSS} />
            </a>
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
