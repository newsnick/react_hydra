/* import { Collapse, Divider } from 'antd'
import styles from '../../styles/CollapseBox/CollapseBox.module.scss'
import image from '../../assets/webbrowser/images/showcaseimage.svg'
import downArrow from '../../assets/webbrowser/icons/downarrow.svg'

const { Panel } = Collapse
const text = (
  <div className={styles.textContainer}>
    ` Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
    tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <hr />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
    tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae.
    <hr />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
    tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae.
    <hr />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
    tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae.`
  </div>
)
const CollapseBox = () => (
  <div className={styles.centeredBox}>
    <div className={styles.box}>
      <Divider className={styles.divider} orientation="center">
        <Collapse className={styles.collapse} bordered={false} size="large">
          <img className={styles.bgimage} src={image} alt="showcase" />
          <Panel
            className={styles.content}
            showArrow={false}
            header={
              <div style={{ color: 'inherit' }}>
                <img
                  className={styles.downArrow}
                  src={downArrow}
                  alt="downarrow"
                />
              </div>
            }
            key="1"
          >
            <p className={`${styles.text} text`}>{text}</p>
          </Panel>
        </Collapse>
      </Divider>
    </div>
  </div>
)
export default CollapseBox
 */
import React, { useState } from 'react'
import { Collapse, Divider } from 'antd'
import styles from '../../styles/CollapseBox/CollapseBox.module.scss'
import image from '../../assets/webbrowser/images/showcaseimage.svg'
import downArrow from '../../assets/webbrowser/icons/downarrow.svg'

const { Panel } = Collapse
const text = (
  <div className={styles.textContainer}>
    ` Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
    <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
    tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae. <br />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo <br />
    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus.
    Ornare lectus sit amet est placerat in. Lectus magna fringilla urna
    porttitor rhoncus vitae.
    <hr />
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
    Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
    commodo
  </div>
)
const CollapseBox = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={styles.centeredBox}>
      <div className={styles.box}>
        <Divider className={styles.divider} orientation="center">
          <Collapse
            className={styles.collapse}
            bordered={false}
            size="large"
            activeKey={isCollapsed ? '1' : undefined}
          >
            <img className={styles.bgimage} src={image} alt="showcase" />
            <Panel
              className={styles.content}
              showArrow={false}
              header={
                <div
                  style={{
                    color: 'inherit',
                  }}
                  onClick={toggleCollapse}
                >
                  <img
                    className={styles.downArrow}
                    src={downArrow}
                    alt="downarrow"
                  />
                </div>
              }
              key="1"
            >
              <p
                className={`${styles.text} ${
                  isCollapsed ? styles.collapsedText : ''
                }`}
              >
                {text}
              </p>
            </Panel>
          </Collapse>
        </Divider>
      </div>
    </div>
  )
}
export default CollapseBox
