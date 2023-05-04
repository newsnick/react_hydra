import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  articles: [],
  loading: false,
  error: null,
}

export const fetchVRNews2 = createAsyncThunk(
  'vrnews2/fetchVRNews2',
  async () => {
    const { data } = await axios.get(
      'https://api.currentsapi.services/v1/search?' +
        'keywords=facebook&language=en&' +
        'apiKey=ALgzf8tTD9AHJT7pHdWAfo1-IkUNDvdEQszGCG2a3f5gQFM7'
    )
    console.log(data)

    return data.news
  }
)

export const VRNewsSlice2 = createSlice({
  name: 'vrnews2',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVRNews2.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchVRNews2.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.articles = action.payload
      })
      .addCase(fetchVRNews2.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default VRNewsSlice2.reducer
