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
      {/* <Divider orientation="left">Default Size</Divider>
    <Collapse>
      <Panel header="This is default size panel header" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
    <Divider orientation="left">Small Size</Divider>
    <Collapse size="small">
      <Panel header="This is small size panel header" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse> */}
      {/* <Divider className={styles.divider} orientation="center">
        <Collapse bordered={false} size="large">
          <img className={styles.bgimage} src={image} alt="showcase" />
          <Panel
            className={styles.content}
            showArrow={false}
            header={
              <img
                className={styles.downArrow}
                src={downArrow}
                alt="downarrow"
              />
            }
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Divider> */}
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
            {/* <p className={styles.text}>{text}</p> */}
            <p className={`${styles.text} text`}>{text}</p>
          </Panel>
        </Collapse>
      </Divider>
    </div>
  </div>
)
export default CollapseBox
