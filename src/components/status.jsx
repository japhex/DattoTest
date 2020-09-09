import React from 'react'

import { StatusStyled } from 'components/styled/status'
import { Spinner } from './utils/spinner'

export const Status = ({ status }) => {
  return status === 'loading' ? (
    <Spinner />
  ) : (
    <StatusStyled>{status}</StatusStyled>
  )
}
