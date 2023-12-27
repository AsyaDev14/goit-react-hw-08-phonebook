import { createSlice } from "@reduxjs/toolkit"

// import axios from "axios";
const initialState = {
  user: {
    email: '',
    name: ''
  },
  token: '',
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
})

export const authReducer = slice.reducer