import React from 'react'
import './styles/App.scss'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import About from './pages/About/About'
import Presentation from './pages/Presentation/Presentation'
import Showcase from './pages/Showcase/Showcase'

function App() {
  return (
    <div>
      <Home />
      <Introduction />
      <About />
      <Presentation />
      <Showcase />
    </div>
  )
}

export default App
