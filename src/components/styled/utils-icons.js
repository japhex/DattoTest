import styled from 'styled-components'

export const LogoIcon = styled.svg`
  width: 120px;

  @media ${props => props.theme.breakpoints.tabletUp} {
    width: 160px;
  }
`
