import React from 'react'
import styles from '../../styles/Specs/Specs.module.scss'
import logo1 from '../../assets/webbrowser/images/logounreal.svg'
import logo2 from '../../assets/webbrowser/images/logounity.svg'
import logo3 from '../../assets/webbrowser/images/logooculus.svg'
import logo4 from '../../assets/webbrowser/images/logovive.svg'
import ApiFetchBox from '../../components/ApiFetchBox/ApiFetchBox'

const Specs = () => {
  return (
    <>
      {' '}
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
    </>
  )
}

export default Specs
