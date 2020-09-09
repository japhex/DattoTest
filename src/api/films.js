import { useQuery } from 'react-query'
import axios from 'axios'

export const getFilms = () => {
  return useQuery('films', async () => {
    const { data } = await axios.get('https://ghibliapi.herokuapp.com/films')
    return data
  })
}
