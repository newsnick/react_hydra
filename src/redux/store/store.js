import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../../features/counter/counterSlice'
import VRNews from '../reducer/VRNewsSlice.js'
import VRNews2 from '../reducer/VRNewsSlice2.js'

export const store = configureStore({
  reducer: {
    vrnews: VRNews,
    vrnews2: VRNews2,
  },
})
