import './App.css'
import NavBar from './NavBar'
import Homepage from './pages/Homepage'

import React from 'react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <Homepage />
    </div>
  )
}

export default App
