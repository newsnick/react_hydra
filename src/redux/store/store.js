import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../../features/counter/counterSlice'
import VRNews from '../reducer/VRNewsSlice.js'

export const store = configureStore({
  reducer: {
    vrnews: VRNews,
  },
})
