import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHero = ({queryKey}) => {
    const heroId = queryKey[1] 
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
    // return useQuery( ['super-hero', heroId], () => fetchSuperHero(heroId) ) // we can use another method for fetcher function. see below
    //create querykey as above instead of heroId
    return useQuery (['super-hero', heroId], fetchSuperHero)
}
