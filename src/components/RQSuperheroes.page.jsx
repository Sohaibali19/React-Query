import {React, useState} from 'react'
import { useSuperHeroesData } from '../hooks/UseSuperHeroesData'
import {Link} from 'react-router-dom'
import { useAddSuperHeroData } from '../hooks/UseSuperHeroesData'

// const fetchSuperHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes')
// }

export const  RQSuperheroesPage = () => {
  const [name, setName] = useState('')
  const [alterego, setAlterEgo] = useState('')


  const onSucces = (data)  => {
    return console.log("Perform the side effect after data fetching")
  }

  const onError = (error) => {
    return console.log("Perform the side effect after encountering an error")
  }

  const {isLoading, data, isError, error,  refetch} =
  useSuperHeroesData(onSucces, onError)


  const { mutate: AddHero} = useAddSuperHeroData()
  // useQuery('super-heroes', 
  //   fetchSuperHeroes,
  //   {
  //     onSucces,
  //     onError,
  //     select: (data) =>
  //       {
  //         const superHeroesNames = data.data.map((hero) => hero.name)
  //         return superHeroesNames
  //       } // select is a function, that automatically recieve the API data as an argument

  //   }
  //   // {
  //   //   // default value of cache time is 5 minutes
  //   //   // staleTime: 30000, // the default value is 0 sec
  //   //   // refetchonmount and refetchonwindowfocus+
  //   //   // refetchOnMount: true,
  //   //   // refetchOnWindowFocus: false  //It will refetch the edited values from db.json
  //   // }
  // )

  // without fetchSuperHeroes function
  // const {isLoading, data} = useQuery('super-heroes', ()=> {
  //   return axios.get('http://localhost:4000/superheroes')
  // })
   
   const handleAddHeroClick = () => {
    
    const hero = {name, alterego}
    AddHero(hero)
   }

  if(isLoading) {
    return <h2 className='text-[30px] font-bold '>Loading....</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <div className='text-[30px] font-bold'>RQ Super Heroes Page</div>
    <div>
      <input className='p-2 border-[1px] border-gray-500 '
      type='text'
      value = {name}
      onChange={(e) => setName(e.target.value)}
      />
      <input className='p-2 border-[1px] border-gray-500 '
      type='text'
      value = {alterego}
      onChange={(e) => setAlterEgo(e.target.value)}
      />
      <button onClick={handleAddHeroClick} className='p-3 bg-red-200 border-2 border-gray-800'>Add Hero</button>
    </div>
    <button onClick={refetch} className='p-3 bg-green-200 border-black'>Fetch Heroes</button>
    {
      data?.data.map(hero => {
        // return <div key={hero.name}>{hero.name}</div>
        return ( 
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`} className='underline-offset-2 underline'>
         {hero.id} {hero.name}
          </Link>
        </div>
        )
      })}

    {/* {
      data.map(heroName => {
        return <div key={heroName}>{heroName}</div>
      })
    } */}
    
    </>
    
  )
}
