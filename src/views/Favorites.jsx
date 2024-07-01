import { useSelector } from "react-redux"
import LayoutMain from "../components/LayoutMain"
import ProductCards from "../components/ProductCards"
const Favorites = () => {
    const {favorites} = useSelector(store=>store.products)
  return (
    <LayoutMain>
        <main className="grow flex flex-col gap-4 justify-center items-center py-4">
          <h2 className='text-[#802C6E] font-semibold text-center text-4xl'>Favorite Products</h2>
        <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              {favorites.length > 0 ? favorites.map(product => <ProductCards key={product.title} product={product}></ProductCards>): <h4 className='text-3xl text-pretty py-4 text-center md:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5'>Not found Favorites products</h4>}
            </div>
        </main>
    </LayoutMain>
  )
}

export default Favorites