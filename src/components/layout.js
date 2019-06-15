import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Header from './header'
import 'reset-css'
import './layout.css'
import { baseBackground, baseFont } from './colors'

const Layout = ({ children }) => (
  <div
    css={css`
      background-color: aliceblue;
      color: ${baseFont.toString()};
    `}
  >
    <Header siteTitle="hanhanhan" />
    <div
      css={css`
        padding: 0px 1rem;
        margin: 0.5rem 0;
      `}
    >
      <main>{children}</main>
      <footer
        css={css`
          padding: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
        `}
      >
        © {new Date().getFullYear()}
      </footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
