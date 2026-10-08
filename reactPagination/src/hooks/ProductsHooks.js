import { useEffect, useState } from "react"
import { api } from "../app/axios.instance"

export const useGetProduct = () => {
     const [allproducts, setAllproducts] = useState([])
     const [limit, setLimit] = useState(10)
     const [total, settotal] = useState(null)
    const [skip, setSkip] = useState(0)

    const fetchAPi = async() =>{
       try {
         let res = await api.get(`/products?limit=${limit}&skip=${skip}`)
        setAllproducts(res?.data)
        settotal(res.data.total)
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(() => {
      fetchAPi()
    }, [skip])

    return {
        allproducts,
        limit, 
        setLimit,
        total,
        skip,
        setSkip
    }
}