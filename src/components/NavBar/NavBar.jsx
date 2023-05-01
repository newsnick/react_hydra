import React from 'react'
import logo from '../../assets/webbrowser/images/logo.svg'
import logoname from '../../assets/webbrowser/images/logoname.svg'
import styles from '../../styles/NavBar/NavBar.module.scss'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = () => {
  const menubar = [
    {
      title: 'ABOUT',
      path: '#about',
    },
    {
      title: 'SERVICES',
      path: '#presentation',
    },
    {
      title: 'TECHNOLOGIES',
      path: '#specs',
    },
    {
      title: 'HOW TO',
      path: '#vrnews',
    },
  ]

  return (
    <BrowserRouter>
      <nav className={styles.navBar}>
        <div className={styles.logoDisplay}>
          <img src={logo} alt="logo" />
          <img src={logoname} alt="logo" />
        </div>

        <div className={styles.list}>
          <ul>
            {menubar.map((item) => (
              <li key={item.title}>
                <Link to={item.path} smooth>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.btns}>
          <button className={styles.btn}>CONTACT US</button>
          <button className={styles.btn2}>JOIN HYDRA</button>
        </div>
      </nav>
    </BrowserRouter>
  )
}

export default NavBar
