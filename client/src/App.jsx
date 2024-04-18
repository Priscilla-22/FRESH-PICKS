import { useState, useEffect } from 'react'
import Header from './Components/Header'



function App() {
  // const[branches, setBranches] = useState("")

  useEffect(() => {
    fetch("/branches")
    .then((r) => r.json())
    .then((branches) => console.log(branches))
  }, [])
  

  return (
    <>
    <Header/>
    </>
  )
}

export default App
