import React from 'react'
import footerVector from '../../assets/webbrowser/icons/footervector.svg'
import footerVector2 from '../../assets/webbrowser/icons/footervector2.svg'
import styles from '../../styles/Footer/Footer.module.scss'
import logo from '../../assets/webbrowser/images/footerlogo.svg'
import verticalLine from '../../assets/webbrowser/icons/verticalline.svg'
import facebook from '../../assets/webbrowser/icons/iconfacebook.svg'
import twitter from '../../assets/webbrowser/icons/icontwitter.svg'
import instagram from '../../assets/webbrowser/icons/iconinstagram.svg'
import youtube from '../../assets/webbrowser/icons/iconyoutube.svg'
import linkedin from '../../assets/webbrowser/icons/iconlinkedin.svg'
import pinterest from '../../assets/webbrowser/icons/iconpinterest.svg'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
  return (
    <BrowserRouter>
      <footer>
        {' '}
        <div className={styles.vectorBox}>
          <img class={styles.vector} src={footerVector} alt="vector" />
          <img class={styles.vector2} src={footerVector2} alt="vector2" />
        </div>
        <div className={styles.footermain}>
          <img src={logo} alt="logo" />{' '}
          <img src={verticalLine} alt="verticalline" />
          <ol>
            <li>
              <Link to="#about" smooth>
                {' '}
                ABOUT
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="#presentation" smooth>
                {' '}
                SERVICES
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="#specs" smooth>
                {' '}
                TECHNOLOGIES
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="#specs" smooth>
                {' '}
                HOW TO
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="#contact" smooth>
                {' '}
                JOIN HYDRA
              </Link>{' '}
            </li>
          </ol>
          <img src={verticalLine} alt="verticalline" />{' '}
          <ol>
            <li>F.A.Q.</li>
            <li>SITEMAP</li>
            <li>CONDITIONS</li>
            <li>LICENCES</li>
          </ol>
          <img src={verticalLine} alt="verticalline" />
          <div>
            <p>SOCIALIZE WITH HYDRA</p>
            <div className={styles.social}>
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
              <img src={linkedin} alt="linkedin" />
              <img src={pinterest} alt="pinterest" />
            </div>
            <button className={styles.button}>BUILD YOUR WORLD</button>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default Footer
