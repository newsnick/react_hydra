import React from 'react'
import styles from '../../styles/Specs/Specs.module.scss'
import logo1 from '../../assets/webbrowser/images/logounreal.svg'
import logo2 from '../../assets/webbrowser/images/logounity.svg'
import logo3 from '../../assets/webbrowser/images/logooculus.svg'
import logo4 from '../../assets/webbrowser/images/logovive.svg'
import ApiFetchBox from '../../components/ApiFetchBox/ApiFetchBox'
import RoundButton from '../../components/RoundButton/RoundButton'
import specsVector from '../../assets/webbrowser/icons/specsvector.svg'

const Specs = () => {
  return (
    <>
      <div className={styles.companies}>
        <div>
          <img src={logo1} alt="unreal" />
        </div>
        <div>
          <img src={logo2} alt="unity" />
        </div>
        <div>
          <img src={logo3} alt="oculus" />
        </div>
        <div>
          <img src={logo4} alt="vive" />
        </div>
      </div>
      <ApiFetchBox />
      <div className={styles.apiButtons} id="specs">
        <div className={styles.vectorBox}>
          <img className={styles.specsVector} src={specsVector} alt="vector" />
        </div>
        <RoundButton />
        <RoundButton />
        <RoundButton />
        <RoundButton />
      </div>
    </>
  )
}

export default Specs
