
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';
import menuReducer from './MenuSlice';
import searchReducer from './SearchSlice';
import loadingReducer from './LoadingSlice';



  export const store = configureStore({
    reducer:{
      auth: authReducer,
      menu: menuReducer,
      search:searchReducer,
      loading:loadingReducer
    }
    
  })
