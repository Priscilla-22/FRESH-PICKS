import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi=createApi(
{
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://127.0.0.1:5555/"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"cart"
        })
    })
}
)
export const {useGetAllItemQuery}=productApi