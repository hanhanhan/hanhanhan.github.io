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
        padding: 0px 1rem;
        margin: 0.5rem 0;
      `}
    >
      <main>{children}</main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <footer
          css={css`
            position: absolute;
            bottom: 10px;
          `}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
