import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {AdminloginApi} from "../../../Api/AdminApis/admin"

// Admin login slcie 
export const AdminAuthLogin =createAsyncThunk("AdminLogin",async(data)=>{
  try {
      const response =await AdminloginApi(data);
      
      return  response.data
  } catch (error) {
      throw error;
  }
})


// create reducer and action 
export const AdminSlice = createSlice({
      name:"AdminSlice",
      initialState:{
        adminlogin:[],
        loading:false,
        error:null

      },
     extraReducers:(builder)=>{
       builder.addCase(AdminAuthLogin.pending,(state)=>{
           state.loading=true;
       })
       .addCase(AdminAuthLogin.fulfilled,(state,action)=>{
           state.loading=false;
           state.adminlogin = action.payload;
       })

       .addCase(AdminAuthLogin.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.payload;
    }) 
     }
})


export default AdminSlice.reducer;

