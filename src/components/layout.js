import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Header from './header'
import 'reset-css'
import '../style/layout.css'
import { baseFont } from '../style/colors'

const Layout = ({ children }) => (
  <div
    css={css`
      background-color: aliceblue;
      color: ${baseFont.toString()};
      min-height: 100vh;
    `}
  >
    <Header siteTitle="hanhanhan" />
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <main>{children}</main>
      <footer
        css={css`
          align-self: center;
          margin: 10px;
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
