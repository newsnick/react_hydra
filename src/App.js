import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { fetchVRNews } from './redux/reducer/VRNewsSlice.js'

const App = () => {
  const loading = useSelector((state) => state.vrnews.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVRNews())
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
