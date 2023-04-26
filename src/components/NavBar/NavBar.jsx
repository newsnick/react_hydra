import React from 'react'
import logo from '../../assets/webbrowser/images/logo.svg'
import logoname from '../../assets/webbrowser/images/logoname.svg'
import styles from '../../styles/NavBar/NavBar.module.scss'
import { navigate } from 'react-router-dom'

const NavBar = () => {
  const menubar = [
    {
      title: 'ABOUT',
      path: '/about',
    },
    {
      title: 'SERVICES',
      path: '/services',
    },
    {
      title: 'TECHNOLOGIES',
      path: '/technologies',
    },
    {
      title: 'HOW TO',
      path: '/howto',
    },
  ]

  const navigate = (path) => {
    // navigation logic here
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoDisplay}>
        <img src={logo} alt="logo" />
        <img src={logoname} alt="logo" />
      </div>

      <div className={styles.list}>
        <ul>
          {menubar.map((item) => (
            <li key={item.title} onClick={() => navigate(item.path)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.btns}>
        <button className={styles.btn}>CONTACT US</button>
        <button className={styles.btn2}>JOIN HYDRA</button>
      </div>
    </nav>
  )
}
export default NavBar
