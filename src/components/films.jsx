import React, { useContext } from 'react'
import { FilmBlock } from './filmBlock'
import { FilmsContext } from '../context/films'
import { Status } from './status'

export const Films = () => {
  const { films, setFilms, status } = useContext(FilmsContext)

  const handleRemove = id => {
    const newFilms = films.filter(film => film.id !== id)

    setFilms(newFilms)
  }

  const handleSaveNewTitle = (filmId, newTitle) => {
    const newFilms = films
    const newFilm = newFilms.find(({ id }) => id === filmId)
    newFilm.title = newTitle

    setFilms(newFilms)
  }

  if (status === 'loading' || status === 'error') {
    return <Status status={status} />
  }

  return (
    <div>
      <ul>
        {films.map(film => (
          <FilmBlock
            film={film}
            handleRemove={handleRemove}
            handleSaveNewTitle={handleSaveNewTitle}
          />
        ))}
      </ul>
    </div>
  )
}
