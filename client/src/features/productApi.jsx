import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi=createApi(
{
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://group-c.onrender.com/"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"cart"
        })
    })
}
)
export const {useGetAllItemQuery}=productApi