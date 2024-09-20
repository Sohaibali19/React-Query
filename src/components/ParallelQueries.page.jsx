import { useQuery } from "react-query"
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/Friends')
}




export const ParallelQueriesPage = () => {
   const {data: superheroes} =  useQuery('super-heroes', fetchSuperHeroes)
    const { data: Friends}  = useQuery('friends', fetchFriends)
    return <div>Parallel Queries Page</div>
}