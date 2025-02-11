import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IWeatherState {
  city: string | null
  history: string[]
}

const initialState: IWeatherState = {
  city: null,
  history: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload

      if (!state.history.includes(action.payload)) {
        state.history.unshift(action.payload)

        if (state.history.length > 5) {
          state.history.pop()
        }
      }
    },
    clearHistory: (state: IWeatherState) => {
      state.history = []
    },
  },
})

export const { getCity, clearHistory } = weatherSlice.actions

export default weatherSlice.reducer
