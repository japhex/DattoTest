import React, { createContext, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export const FilmsContext = createContext()

export const FilmsProvider = ({ children }) => {
  const [films, setFilms] = useState([])
  const { status } = useQuery('films', async () => {
    if (films.length === 0) {
      const { data } = await axios.get('https://ghibliapi.herokuapp.com/films')
      setFilms(data)
    }
  })

  const contextProps = {
    status,
    films,
    setFilms
  }

  return (
    <FilmsContext.Provider value={contextProps}>
      {children}
    </FilmsContext.Provider>
  )
}
