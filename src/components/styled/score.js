import styled from 'styled-components'

const getScoreColour = ({ score, theme }) => {
  switch (true) {
    case score > 90:
      return theme.colors.lightGreen
    case score < 50:
      return theme.colors.red
    default:
      return theme.colors.yellow
  }
}

export const ScoreStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  background: ${props => getScoreColour(props)};
  border-radius: 30px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: ${props => props.theme.spacing.padding.default}px;
`
