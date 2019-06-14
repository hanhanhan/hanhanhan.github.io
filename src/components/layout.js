import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Header from './header'
import 'reset-css'
import './layout.css'

let color = `green`

const Layout = ({ children }) => (
  <>
    <Header siteTitle={`hanhanhan`} />
    <div
      css={css`
        max-width: 960;
        padding: 0px 1rem;
      `}
    >
      <main>{children}</main>
      <footer
        css={css`
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
        `}
      >
        © {new Date().getFullYear()}
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
