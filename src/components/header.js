import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {GoMarkGithub} from "react-icons/go"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `orange`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <a href="https://github.com/hanhanhan/">
          <GoMarkGithub size={`3em`} />
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
