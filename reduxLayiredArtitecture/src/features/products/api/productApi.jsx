import { api } from "../../../config/axiosInstance"

export const getAllProductApi = async(search) => {
    let url =search ? `/products/search?q=${search}` : '/products'
    let res = await api.get(url)
    console.log("data in product api",res.data)
    return res.data
}

export const getProductCategorylist = async() => {
    try {
        let res = await api.get('/products/categories')
        return res.data
    } catch (error) {
        console.log("error in get all product category",error)
    }
}