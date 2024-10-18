import { createSlice } from "@reduxjs/toolkit";

// Define the slice (renamed to avoid conflict)
const userSlice = createSlice({
  name: "userData",
  initialState:{
    name:"",
    email:"",
  },
  reducers: {
    userName:(state,action)=>{
      state.name=action.payload;
    },
    userEmail:(state,action)=>{
      state.email=action.payload
    }
  }
});

// Export the reducer
export default userSlice.reducer;

// Export the actions
export const { userName,userEmail } = userSlice.actions;
