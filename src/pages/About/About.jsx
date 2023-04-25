import React from 'react'
import styles from '../../styles/About/About.module.scss'
import aboutimg from '../../assets/webbrowser/images/introimage.svg'

const About = () => {
  return (
    <div>
      <div className={styles.aboutbox1}>
        <div className={styles.aboutimage}>
          <img className={styles.aboutimg} src={aboutimg} alt="about" />
        </div>
        <div>
          <p className={styles.apiheader1}>Placeholder</p>
          <p className={styles.apiheader2}>API Data</p>
          <p className={styles.apicontent}>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
        </div>
      </div>
      <div className={styles.aboutbox2}>
        <div className={styles.apiintro}>
          <p className={styles.apiheader}>API Header</p>
          <p className={styles.apiheader2}>API Header2</p>
        </div>
        <article className={styles.apiintro2}>
          <p className={styles.apicontent}>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
