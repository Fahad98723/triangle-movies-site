import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../redux/slices/movieSlice'
export const store = configureStore({
    reducer: {
        movie : movieReducer,

      },
    //   middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    //   }),
})

