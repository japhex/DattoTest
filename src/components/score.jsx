import * as React from 'react'
import { ScoreStyled } from 'components/styled/score'

export const Score = ({ score }) => (
  <ScoreStyled score={score}>{score}</ScoreStyled>
)
