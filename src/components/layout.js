import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Header from './header'
import 'reset-css'
import './layout.css'
import { baseBackground } from './colors'

console.log('baseBackground', baseBackground.string())
const Layout = ({ children }) => (
  <div
  css={css`
    background-color: aliceblue;
  `}
  >
    <Header siteTitle="hanhanhan" />
    <div
      css={css`
        max-width: 960;
        padding: 0px 1rem;
        margin: 0.5rem 0;
        /* background-color: ${baseBackground.string()}; */
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
