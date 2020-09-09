import * as React from 'react'
import { LinkStyled } from 'components/styled/link'

export const NavLink = ({ children, route }) => (
  <LinkStyled exact to={route}>
    {children}
  </LinkStyled>
)
