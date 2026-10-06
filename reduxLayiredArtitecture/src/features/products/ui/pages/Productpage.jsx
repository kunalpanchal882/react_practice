import { useProductHook } from '../../hooks/useProductHooks'
import ProductCard from '../components/ProductCard '
import ProductFilter from '../components/ProductFilter'

const Productpage = () => {

 const {data,isPending,error, search, setSearch} = useProductHook()

  console.log("data in product page",data)


 if(isPending) return <h1>loading products..</h1>
 if(error) return <p role="alert">Could not load products: {error.message}</p>


  return (
    <div className='flex flex-col gap-10 mt-10'>
      <ProductFilter search={search} setSearch={setSearch}/>
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
  {(data?.products ?? []).map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
    </div>
  )
}

export default Productpage