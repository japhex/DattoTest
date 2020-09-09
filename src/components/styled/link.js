import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.darkGrey};
  padding-bottom: 5px;

  &.active {
    font-weight: bold;
  }
`
