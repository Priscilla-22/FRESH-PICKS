import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './CartSlice'
import { productApi } from './productApi';
import productReducer from './ProductSlice'
const store= configureStore({
    reducer:{
        cart:CartReducer,
        [productApi]:productApi.reducer,
        products:productReducer

        
    },
 middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(productApi.middleware)
    }
});

export default store