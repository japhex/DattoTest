import * as React from 'react'

import { NavLink } from './navLink'
import { NavigationStyled } from './styled/layout'

export const Navigation = () => (
  <NavigationStyled>
    <ul>
      <NavLink route="/">Studio Ghibli films</NavLink>
      <NavLink route="/about">About</NavLink>
    </ul>
  </NavigationStyled>
)
