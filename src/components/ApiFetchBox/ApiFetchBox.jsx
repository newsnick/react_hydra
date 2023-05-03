import React, { useState, useEffect } from 'react'
import styles from '../../styles/ApiFetchBox/ApiFetchBox.module.scss'
import { Skeleton } from 'antd'

const ApiFetchBox = () => {
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading2(false)
    }, 5000)
  }, [])

  return (
    <>
      <div>
        <div className={styles.fetchBox}>
          {loading ? (
            <Skeleton
              avatar={false}
              title={false}
              paragraph={false}
              style={{ paddingLeft: '1000px' }}
            />
          ) : (
            <div className={styles.apiIntro}>
              <p className={styles.apiHeader}>API Header</p>
              <p className={styles.apiHeader2}>API Header2</p>
            </div>
          )}
          {loading ? (
            <Skeleton
              active
              title={{ width: 800 }}
              paragraph={{ rows: 4, width: [250, 250, 250, 250] }}
              style={{ marginRight: '1350px' }}
            />
          ) : (
            <article className={styles.apiIntro2}>
              <p className={styles.apiContent}>
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </article>
          )}
        </div>
      </div>
    </>
  )
}

export default ApiFetchBox
