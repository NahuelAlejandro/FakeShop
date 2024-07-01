import { useEffect, useState } from 'react'
import LayoutMain from '../components/LayoutMain'
import ProductCards from '../components/ProductCards'
import productsQueries from '../services/productsQueries'
import Loader from '../components/Loader'
import Hero from '../components/Hero'

const Home = () => {

  let [products, setProducts] = useState([])
  const [laoding, setLoading] = useState(true)
  useEffect(() => {
    productsQueries.getProducts().then(data => {
      if (data) {
        setProducts(data)
        setLoading(false)
      }
    })
  }, [])

  const mostRatingProducts = products.toSorted((a, b) => b.rating.rate - a.rating.rate).slice(0, 10)



  return (
    <LayoutMain>
      <main className='grow flex flex-col items-center gap-4 pb-4'>
        <Hero/>
        <section className='flex flex-col items-center w-11/12 gap-4'>
          <h2 className='text-[#802C6E] font-semibold text-center text-4xl'>Most Rate Products</h2>
          {laoding
            ? <div className='flex gap-5 justify-center items-center h-[600px]'><Loader /></div>
            : <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              {mostRatingProducts.map(product => <ProductCards key={product.title} product={product}></ProductCards>)}
            </div>
          }
        </section>
      </main>
    </LayoutMain>
  )
}

export default Home