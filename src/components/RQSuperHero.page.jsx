import React from 'react'
import { useSuperHeroData } from '../hooks/UseSuperHeroData'
import { useParams } from 'react-router-dom'

export const RQSuperHeroPage = () => {
     const { heroId } = useParams()
     const {isLoading, data, isError, error} = useSuperHeroData(heroId)

     if(isLoading) {
          return <h2 className='text-[30px] font-bold '>Loading....</h2>
        }
      
        if(isError) {
          return <h2>{error.message}</h2>
        }
  
     return <div className='text-[30px] font-bold p-10 m-2'> 
         {data?.data.id} - {data?.data.name} - {data?.data.alterEgo}
     </div>
  
}
