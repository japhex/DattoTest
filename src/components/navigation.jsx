import * as React from 'react'

import { NavLink } from './navLink'
import { NavigationStyled, MenuContainer } from './styled/layout'
import useMediaQuery from '../hooks/useMediaQuery'
import { appTheme } from '../global/themes/appTheme'
import { Menu } from './icons/menu'

export const Navigation = () => {
  const isTablet = useMediaQuery(appTheme.breakpoints.desktopDown)

  return (
    <>
      {isTablet ? (
        <MenuContainer>
          <Menu />
        </MenuContainer>
      ) : (
        <NavigationStyled>
          <ul>
            <NavLink route="/">- Studio Ghibli films</NavLink>
            <NavLink route="/about">- About</NavLink>
          </ul>
        </NavigationStyled>
      )}
    </>
  )
}
