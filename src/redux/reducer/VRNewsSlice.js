import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useCallback } from 'react'

const initialState = {
  articles: [],
  loading: false,
  error: null,
}

export const fetchVRNews = createAsyncThunk('vrnews/fetchVRNews', async () => {
  const { data } = await axios.get(
    'https://api.currentsapi.services/v1/search?' +
      'keywords=vr+headset&language=en&' +
      'apiKey=mdrmBuQM4H-fRXECBsKVPrzBmBaCXdDsuA-3E1-rDQufeTNf'
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

export const useFetchVRNews = () => {
  const dispatch = useDispatch()
  const memoizedFetchVRNews = useCallback(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  return memoizedFetchVRNews
}

export default VRNewsSlice.reducer
