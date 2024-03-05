import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Component from './component.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <h1>Weather App</h1>
    <section>
      <Component city='Abuja'/> 
      <Component city='Nassarawa'/> 
      <Component city='Ilorin'/> 
      <Component city='Lagos'/>
      </section>
      </main>
    </>
  )
}

export default App
