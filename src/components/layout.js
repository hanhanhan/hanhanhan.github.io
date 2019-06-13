import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
      <>
        <Header siteTitle={`hanhanhan`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style={{
            display: `flex`,
            justifyContent: `center`,
            flexWrap: `noWrap`,
          }}>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
