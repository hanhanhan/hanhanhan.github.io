import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Header from './header'
import 'reset-css'
import '../style/layout.css'
import { baseFont, baseBackground } from '../style/colors'

const Layout = ({ children }) => (
  <div
    css={css`
      background-color: ${baseBackground.toString()};
      color: ${baseFont.toString()};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
  >
    <div>
      <Header siteTitle="hanhanhan" />
      <main>{children}</main>
    </div>
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
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
