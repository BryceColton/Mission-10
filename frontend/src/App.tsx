import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BowlersList from './BowlersList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BowlersList />
    </>
  )
}

export default App
