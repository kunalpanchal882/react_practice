import React from 'react'
import ProductCard from '../components/ProductCard'
import { useGetProduct } from '../hooks/ProductsHooks'

const Product = () => {
   
   const {allproducts,limit,total,skip,setSkip} = useGetProduct()

   console.log("skipssss",(skip+limit)+1>=total)
   console.log("skipssss total",(skip+limit))

  return (

    <div className='p-10 flex flex-col gap-10'>
        <div className='grid grid-cols-3 gap-7'>
            {allproducts?.products?.map((val) => (
            <ProductCard key={val.id} product={val}/>
        ))}
        </div>

        <div className='w-full flex items-center gap-5  justify-center'>
            <button
            disabled={skip===0}
            onClick={() => setSkip(prev => prev-limit)} className='px-4 py-1 text-xl bg-red-500 rounded-xl'>prev</button>
            <button className='text-xl'>total <span>{Math.floor((skip/limit+1))}</span>/ <span>{Math.ceil(total/limit)}</span> </button>
            <button
            disabled={(skip+limit)>=total}
            onClick={() => setSkip(prev => prev+limit)} className='px-4 py-1 text-xl bg-red-500 rounded-xl'>next</button>
        </div>
    </div>
  )
}

export default Product