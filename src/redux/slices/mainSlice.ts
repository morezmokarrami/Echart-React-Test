import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FirstRace, MainSliceInterface } from "../../interfaces/mainSliceInterface";


const initialState: MainSliceInterface = {
     hamburgerMenuState: false,
     firstRace: {
          name: '',
          date: '',
          location: ''
     },
     dashboardLoading: true
}

const mainSlice = createSlice({
     initialState,
     name: 'main',
     reducers: {
          SET_HAMBURGER_MENU_STATE: (state, action:PayloadAction<boolean>) => {
               state.hamburgerMenuState = action.payload
          },
          SET_FIRST_RACE: (state, action:PayloadAction<FirstRace>) => {
               state.firstRace = action.payload
          },
          SET_DASHBOARD_LOADING: (state, action:PayloadAction<boolean>) => {
               state.dashboardLoading = action.payload
          }
     }
})

export const { SET_HAMBURGER_MENU_STATE, SET_FIRST_RACE, SET_DASHBOARD_LOADING } = mainSlice.actions;
export default mainSlice.reducer;