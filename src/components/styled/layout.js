import styled from 'styled-components'

import { constants } from '../../global/themes/appTheme'

export const LayoutStyled = styled.div`
  font-family: ${props => props.theme.fonts.roboto};
`

export const HeaderStyled = styled.header`
  padding: ${props => props.theme.spacing.padding.default}px;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${constants.headerHeight}px;
  background: ${props => props.theme.colors.darkGrey};
  justify-content: center;
  box-sizing: border-box;

  @media ${props => props.theme.breakpoints.tabletUp} {
    justify-content: flex-start;
  }
`

export const FooterStyled = styled.header`
  padding: ${props => props.theme.spacing.padding.default}px;
  width: 100%;
  height: ${constants.footerHeight}px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.darkGrey};
`

export const ContentAreaStyled = styled.main`
  display: flex;
`

export const ContentStyled = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.padding.default}px;
  height: calc(
    100vh - (${constants.headerHeight}px + ${constants.footerHeight}px)
  );
  overflow-x: scroll;
  box-sizing: border-box;
`

export const NavigationStyled = styled.nav`
  display: none;
  padding: ${props => props.theme.spacing.padding.default}px;
  box-sizing: border-box;
  flex: 0 0 200px;
  border-right: ${props => props.theme.borders.default};

  @media ${props => props.theme.breakpoints.desktopUp} {
    display: block;
  }
`
