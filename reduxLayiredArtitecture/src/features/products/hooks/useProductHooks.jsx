import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getAllProductApi, getProductCategorylist } from "../api/productApi"

export const useProductHook = () => {

const [search, setSearch] = useState("")
const [debounceSearch, setDebounceSearch] = useState("")

    const {data,isPending,error} =  useQuery({
        queryKey:['products',debounceSearch],
          queryFn: () => getAllProductApi(debounceSearch),
    })

    useEffect(() => {
        let time = setTimeout(() => {
            setDebounceSearch(search)
        },1000)

        return () => clearTimeout(time)

    },[search])

    console.log("data in product hook",data)

    return{
        data,
        isPending,
        error,
        search,
        setSearch
    }

}

export const useProductCategoryHook = () => {
    const {data,isPending,error} =  useQuery({
        queryKey:['AllCategory'],
        queryFn:getProductCategorylist,
    })

    return{
        data,
        isPending,error
    }

}