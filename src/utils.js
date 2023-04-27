const images = ['homebg1', 'homebg2', 'homebg3', 'homebg4', 'homeimage']

export const bgVectors = images
  .slice(0, -1)
  .map((name) => require(`./assets/webbrowser/images/${name}.svg`))

export const homeImage = require(`./assets/webbrowser/images/${
  images.slice(-1)[0]
}.svg`)

export const nameRegex = /^[A-Za-z]{2,}$/
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

/* import bgvector1 from './assets/webbrowser/images/homebg1.svg'
import bgvector2 from './assets/webbrowser/images/homebg2.svg'
import bgvector3 from './assets/webbrowser/images/homebg3.svg'
import bgvector4 from './assets/webbrowser/images/homebg4.svg'
import homeimage from './assets/webbrowser/images/homeimage.svg'

export const bgVectors = [bgvector1, bgvector2, bgvector3, bgvector4]

export const homeImage = homeimage */

/* const obj = {
  bgvector1: require('./assets/webbrowser/images/homebg1.svg'),
  bgvector2: require('./assets/webbrowser/images/homebg2.svg'),
  bgvector3: require('./assets/webbrowser/images/homebg3.svg'),
  bgvector4: require('./assets/webbrowser/images/homebg4.svg'),
  homeimage: require('./assets/webbrowser/images/homeimage.svg'),
}

export const bgVectors = [
  obj.bgvector1,
  obj.bgvector2,
  obj.bgvector3,
  obj.bgvector4,
]

export const homeImage = obj.homeimage */
