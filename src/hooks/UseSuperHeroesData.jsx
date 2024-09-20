import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
  }

export const useSuperHeroesData = (onSucces, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes,
        {
          onSucces,
          onError,
          // select: (data) =>
          //   {
          //     const superHeroesNames = data.data.map((hero) => hero.name)
          //     return superHeroesNames
          //   } // select is a function, that automatically recieve the API data as an argument
    
})
}