import React, { useState, useEffect } from 'react'
import { Skeleton } from 'antd'
import './styles/App.scss'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import About from './pages/About/About'
import Presentation from './pages/Presentation/Presentation'
import Showcase from './pages/Showcase/Showcase'
import Specs from './pages/Specs/Specs'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './pages/Footer/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          <Home />
          <Introduction />
          <About />

          <Presentation />
          <Showcase />
          <Specs />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
