/* import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  articles: [],
  loading: false,
  error: null,
}

export const fetchVRNews = createAsyncThunk('vrnews/fetchVRNews', async () => {
  const { data } = await axios.get(
    'https://api.currentsapi.services/v1/search?' +
      'keywords=vr+headset&language=en&' +
      'apiKey=ALgzf8tTD9AHJT7pHdWAfo1-IkUNDvdEQszGCG2a3f5gQFM7'
  )
  console.log(data)

  return data.news
})

export const VRNewsSlice = createSlice({
  name: 'vrnews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVRNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchVRNews.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.articles = action.payload
      })
      .addCase(fetchVRNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default VRNewsSlice.reducer */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  articles: [],
  loading: false,
  error: null,
}

export const fetchVRNews = createAsyncThunk('vrnews/fetchVRNews', async () => {
  const { data } = await axios.get(
    'https://api.currentsapi.services/v1/search?' +
      'keywords=vr+headset&language=en&' +
      'apiKey=ALgzf8tTD9AHJT7pHdWAfo1-IkUNDvdEQszGCG2a3f5gQFM7'
  )
  console.log(data)

  return data.news
})

export const VRNewsSlice = createSlice({
  name: 'vrnews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVRNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchVRNews.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.articles = action.payload
      })
      .addCase(fetchVRNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default VRNewsSlice.reducer
