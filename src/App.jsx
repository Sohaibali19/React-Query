import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-red-700 font-bold text-white text-[54px] rounded-full'>React Query Demo</h2>
    </>
  )
}

export default App
