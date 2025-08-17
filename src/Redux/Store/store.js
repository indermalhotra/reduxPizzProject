import { configureStore } from '@reduxjs/toolkit'
import seatReducer from "../SeatSlice/seatSlice";


const store = configureStore({
  reducer: {
    seats:seatReducer
  },
})

export default store;