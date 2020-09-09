import styled from 'styled-components'

const buttonType = ({ type, theme }) => {
  switch (type) {
    case 'remove':
      return { background: theme.colors.red, border: theme.colors.darkRed }
    case 'save':
      return { background: theme.colors.green, border: theme.colors.darkGreen }
    default:
      return {
        background: theme.colors.darkGrey,
        border: theme.colors.black
      }
  }
}

export const ButtonContainer = styled.div`
  margin-left: auto;
`

export const Button = styled.button`
  border: 2px solid ${props => buttonType(props).border};
  background: ${props => buttonType(props).background};
  color: ${props => props.theme.colors.white};
  border-radius: 5px;
  margin: 3px;
  padding: 4px 8px;
  font-size: 1rem;
  cursor: pointer;
`
