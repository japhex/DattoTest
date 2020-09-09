import * as React from 'react'

import useMediaQuery from 'hooks/useMediaQuery'
import { appTheme } from '../themes/appTheme'
import { HeaderStyled } from 'components/styled/layout'
import { Logo } from 'components/icons/logo'
import { Navigation } from '../../components/navigation'

export const Header = () => {
  const isTablet = useMediaQuery(appTheme.breakpoints.desktopDown)
  return (
    <HeaderStyled>
      <Logo />
      {isTablet && <Navigation />}
    </HeaderStyled>
  )
}
