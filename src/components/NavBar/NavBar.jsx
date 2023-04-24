import React from 'react'
import logo from '../../assets/webbrowser/images/logo.svg'
import logoname from '../../assets/webbrowser/images/logoname.svg'
import styles from '../../styles/NavBar/NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logodisplay}>
        <img src={logo} alt="logo" />
        <img src={logoname} alt="logo" />
      </div>

      <div className={styles.list}>
        {' '}
        <ul>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>TECHNOLOGIES</li>
          <li>HOW TO</li>
        </ul>
      </div>

      <div className={styles.btns}>
        {' '}
        <button className={styles.btn}>CONTACT US</button>
        <button className={styles.btn2}>JOIN HYDRA</button>
      </div>
    </nav>
  )
}

export default NavBar
