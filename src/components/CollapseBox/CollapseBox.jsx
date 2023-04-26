import { Collapse, Divider } from 'antd'
import styles from '../../styles/CollapseBox/CollapseBox.module.scss'
import image from '../../assets/webbrowser/images/showcaseimage.svg'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
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
      <Divider className={styles.divider} orientation="center">
        <img className={styles.bgimage} src={image} alt="showcase" />
      </Divider>
      <Collapse size="large">
        <Panel className={styles.content} header="" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  </div>
)
export default CollapseBox
