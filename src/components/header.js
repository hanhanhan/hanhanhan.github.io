import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {GoMarkGithub} from "react-icons/go"


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
      <h1 style={{ 
        padding: 0,
        margin: 0,
        }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            padding: `0`,
            margin: `0`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a href="https://github.com/hanhanhan/"
      style={{
        padding: `0`,
        margin: `0`,
        display: `flex`,
        alignItems: `center`,
      }}
      >
        <GoMarkGithub size={`3em`} color={`salmon`}
              style={{
                padding: `0`,
                margin: `0`,
              }}
        />
      </a>
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
