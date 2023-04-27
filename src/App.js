import React from 'react'
import './styles/App.scss'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import About from './pages/About/About'
import Presentation from './pages/Presentation/Presentation'
import Showcase from './pages/Showcase/Showcase'
import Specs from './pages/Specs/Specs'

function App() {
  return (
    <div>
      <Home />
      <Introduction />
      <About />
      <Presentation />
      <Showcase />
      <Specs />
    </div>
  )
}

export default App
