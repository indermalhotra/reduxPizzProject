import { createSlice } from "@reduxjs/toolkit";

import createSeatPlan from "../../Util/createSeatPlan";

const TOTALSEATS = 40;
const rowNumber = ["GOLD","SILVER","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
const ticketPrice = [1250,1000,350,280];
const seatsInRow = 5;

const settingPlan = createSeatPlan(TOTALSEATS, rowNumber, seatsInRow, ticketPrice);
console.log(settingPlan);

const initialState = {selectedSeat:[],totalPrice:0,seatPlan:settingPlan, message:""}

export const seatsSlice = createSlice({
    name:"seats",
    initialState,
    reducers:{
        bookTicket:(state, action)=>{
            let selectedSeat = state.seatPlan.find(seat=>seat.seats === action.payload);
            if(selectedSeat.available){
                selectedSeat.available = false;
                state.message = `${selectedSeat.seats} is available`;
                state.selectedSeat.push(action.payload);
                state.totalPrice = state.totalPrice + selectedSeat.price
            }else{
                state.message = `${selectedSeat.seats} not available.`
            }
        }
    }
})


export const {bookTicket} = seatsSlice.actions


export default seatsSlice.reducer
