import React, { useContext } from 'react'
import './App.css'
import ThemeContext from './ThemeContext'
import Home from './Home'

const App = () => {
  const data = useContext(ThemeContext)

  return <Home data={data} />
}
export default App
