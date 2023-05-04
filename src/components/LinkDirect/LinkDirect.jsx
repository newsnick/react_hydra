import React from 'react'
import iconPoint from '../../assets/webbrowser/icons/iconendpointhome.svg'
import iconCall from '../../assets/webbrowser/icons/iconcallhome.svg'
import iconMail from '../../assets/webbrowser/icons/iconmailhome.svg'
import verticalLine from '../../assets/webbrowser/icons/verticalvector.svg'
import styles from '../../styles/LinkDirect/LinkDirect.module.scss'
import ContactForm from '../ContactForm/ContactForm'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const LinkDirect = () => {
  return (
    <BrowserRouter>
      <div className={styles.mainBox}>
        <div className={styles.box}>
          {' '}
          <div className={styles.infoBox}></div>
          <img className={styles.icon} src={iconPoint} alt="point" />
          <div className={styles.content}>
            <p className={styles.text1}>
              <a
                href="http://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay Us a Visit
              </a>{' '}
            </p>
            <p className={styles.text2}>
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
          <img src={verticalLine} alt="line" />
          <div className={styles.infoBox}></div>
          <img className={styles.icon} src={iconCall} alt="call" />
          <div className={styles.content}>
            <p className={styles.text1}>
              <a href="tel:+1(110) 1111-1010"> Give Us a Call</a>
            </p>
            <p className={styles.text2}>(110) 1111-1010</p>
          </div>
          <img src={verticalLine} alt="line" />
          <div className={styles.infoBox}></div>
          <img className={styles.icon} src={iconMail} alt="mail" />
          <div className={styles.content}>
            <p className={styles.text1}>
              <Link to="#contact" smooth>
                Send Us a Message
              </Link>
            </p>
            <p className={styles.text2}>Contact@HydraVTech.com</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default LinkDirect
