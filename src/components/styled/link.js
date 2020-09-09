import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.darkGrey};
  padding-bottom: 5px;
`
