import { useState, useEffect } from 'react'
import axios from 'axios'

function SuperheroesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2 className='text-[30px] text-bold'>Loading...</h2>
  }

  if (error) {
    return <h2 className='text-[25px] text-red-600'>{error}</h2>
  }

  return (
    <>
      <h2 className='text-[30px] text-bold mb-3'>Super Heroes Page</h2>
      {data.map(hero => {
        return <div className='' key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}


export default SuperheroesPage