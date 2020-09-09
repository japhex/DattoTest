import React, { useState, useEffect } from 'react'
import {
  FilmBlockStyled,
  TitleInput,
  FilmTitle,
  FilmDescription
} from 'components/styled/filmBlock'
import { ButtonContainer, Button } from 'components/styled/utils-button'
import { Score } from './score'

export const FilmBlock = ({ film, handleRemove, handleSaveNewTitle }) => {
  const [editTitle, setEditTitle] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const { id, title, description, release_date, rt_score } = film

  useEffect(() => {
    setNewTitle(title)
  }, [setNewTitle, title])

  const handleSave = () => {
    handleSaveNewTitle(id, newTitle)
    setEditTitle(false)
    setNewTitle(newTitle)
  }

  const handleEdit = () => {
    if (editTitle) {
      setNewTitle(title)
    }
    setEditTitle(!editTitle)
  }

  return (
    <FilmBlockStyled key={id}>
      <div>
        <FilmTitle>
          <Score score={rt_score} />
          {editTitle ? (
            <TitleInput
              defaultValue={newTitle}
              onKeyDown={e => setNewTitle(e.target.value)}
            />
          ) : (
            newTitle
          )}
          &nbsp;- {release_date}
        </FilmTitle>
        <FilmDescription>{description}</FilmDescription>
        <ButtonContainer>
          <Button onClick={() => handleRemove(id)} type="remove">
            remove
          </Button>
          {editTitle && (
            <Button onClick={() => handleSave()} type="save">
              save
            </Button>
          )}
          <Button onClick={() => handleEdit()}>
            {editTitle ? <>cancel</> : <>edit title</>}
          </Button>
        </ButtonContainer>
      </div>
    </FilmBlockStyled>
  )
}
