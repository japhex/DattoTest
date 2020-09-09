import styled from 'styled-components'

export const FilmBlockStyled = styled.li`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.padding.default}px;
  margin-bottom: ${props => props.theme.spacing.padding.default}px;
  width: 100%;
  border: ${props => props.theme.borders.dark};
  box-sizing: border-box;

  @media ${props => props.theme.breakpoints.desktopUp} {
    width: 50%;
  }
`

export const FilmTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`

export const FilmDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.padding.default}px;
  font-size: 0.8rem;
  line-height: 1rem;
`

export const TitleInput = styled.input`
  padding: 4px 8px;
  font-size: 1rem;
  border: ${props => props.theme.borders.dark};
  border-radius: 5px;
`
