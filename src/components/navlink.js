import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

const linkStyle = css`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

const NavLink = props => {
  const { name, href, children } = props
  return (
    <li>
      <a aria-label={name} href="{href}" css={linkStyle}>
        {children} {/* Child is intended to be svg */}
        {name}
      </a>
    </li>
  )
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default NavLink
