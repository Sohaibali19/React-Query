import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import HomePage from './components/Home.page.jsx'
import SuperheroesPage from './components/Superheroes.page.jsx'
import { RQSuperheroesPage } from './components/RQSuperheroes.page.jsx'
import { QueryClientProvider, QueryClient } from 'react-query' 
import {ReactQueryDevtools} from 'react-query/devtools'
import { RQSuperHeroPage } from './components/RQSuperHero.page.jsx'
import { ParallelQueriesPage } from './components/ParallelQueries.page.jsx'
import { DynamicParallelPage } from './components/DynamicParallel.page.jsx'
import { PaginatedQueriesPage } from './components/PaginatedQueries.page.jsx'
import { InfiniteQueriesPage } from './components/InfiniteQueries.page.jsx'





// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contactUs',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const queryClient = new QueryClient();

// another method of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element = {<Layout/>}>
      <Route path="" element={<HomePage/>} />
      <Route path='/rq-infinite' element = { < InfiniteQueriesPage/>} />
      <Route path = '/rq-parallel' element= {<ParallelQueriesPage/>} />
      <Route path = "/rq-dynamic-parallel" element = {<DynamicParallelPage heroIds={[1, 3]}/>}   />
      <Route path = "rq-paginated"  element= {< PaginatedQueriesPage /> }  />
      <Route path = "/rq-super-heroes/:heroId" element={<RQSuperHeroPage/>} />
      <Route path="/super-heroes" element={<SuperheroesPage/>} />
      <Route path="/rq-super-heroes" element={<RQSuperheroesPage/>} />
    
    </Route>
  
    
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider  client={queryClient} >
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
  <ReactQueryDevtools initialIsOpen= {false} position='bottom-right' />
  </QueryClientProvider>
)

// How to create router, there are two methods
// 

