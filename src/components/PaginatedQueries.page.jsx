import { useState, keepPreviousData } from "react"
import {  useQuery } from "react-query"
import axios from "axios"

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:3000/colors?_limit=2&_page=${pageNumber}`)
}



export const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const {isLoading, isError, error, data, isFetching} = useQuery(
        ['colors', pageNumber], 
        () => fetchColors(pageNumber),
       {
       keepPreviousData : true,
    }
        )

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.data.map( (color) => {
                    return (
                        <div key={color.id} className="">
                            <h2 className=" font-extrabold text-[25px] text-black p-5 ">
                                {color.id} . {color.label}
                            </h2>
                            </div>
                    )
                })}
            </div>
            <div className="mx-3 px-4">
                <button className="bg-gray-200 border-2 border-black mx-2 p-2"
                onClick={ () => setPageNumber((page) => page - 1)}
                disabled = {pageNumber === 1}
                >
                    Prev Page
                </button>
                <button className="bg-gray-200 border-2 border-black p-2"
                onClick={ () => setPageNumber((page) => page + 1)}
                disabled = { pageNumber === 4}
                >
                    Next Page
                </button>
            </div>
            {isFetching && 'Loading'}    
        </>
    )

}