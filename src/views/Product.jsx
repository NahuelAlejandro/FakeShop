import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsQueries from '../services/productsQueries'
import LayoutMain from '../components/LayoutMain'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, addFavorites, removeFavorites } from '../redux/actions/actions'
import { Slide, toast } from 'react-toastify'


const Product = () => {

  const params = useParams()
  let [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const [fav,setFav] = useState(false)

  const {favorites} = useSelector(store=> store.products)

  const dispatch = useDispatch()
  useEffect(() => {
    favorites.forEach(item => {
      if(item.id == product.id){
        setFav(true)
      }
    });
    productsQueries.getProduct(params.id).then(data => {
      if (data) {
        setProduct(data)
        setLoading(false)
      }
    })

  },[])

  const handleAddCart = (data) => {
    dispatch(addCart(data))
    toast.success('the product is added to the cart successfully', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
  }

function handleClick() {
  if(fav){
    dispatch(removeFavorites(product))
    setFav(!fav)
    toast.info('the product is remove to favorites successfully', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
  }else{
    dispatch(addFavorites(product))
    setFav(!fav)
    toast.success('the product is added to favorites successfully', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
  }
}

  return (
    <LayoutMain>
      <main className='grow w-full py-4 flex justify-center items-center'>
        {loading ? <Loader />
          : <section className='w-11/12 flex flex-col gap-14 justify-center lg:flex-row'>
            <img className='w-full lg:w-[500px] md:h-[500px]' src={`${product.image}`} alt={`${product.title}`} />
            <article className='flex flex-col justify-center gap-4 w-full xl:w-[400px]'>
              <h2 className='uppercase font-bold text-xl'>{product.title}</h2>
              <p className='text-lg text-pretty'> {product.description}</p>
              <p className='text-lg font-semibold text-green-600'>${product.price}</p>
              <span className='flex items-center gap-1'>
                <svg className="w-6 h-6 text-yellow-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                {product.rating.rate}</span>
              <span>Stock: {product.rating.count}</span>
              <div className='flex gap-4'>
              <button className='bg-[#802C6E] border-[1px] flex items-center gap-1 border-transparent text-white py-1 px-2 rounded font-semibold hover:bg-white hover:text-[#802C6E] hover:border-[#802C6E]' onClick={() => { handleAddCart(product) }}>
              <svg className="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
              </svg>Add to cart
              </button>
              <button className='bg-[#802C6E] border-[1px] flex items-center gap-1 border-transparent text-white py-1 px-2 rounded font-semibold hover:bg-white hover:text-[#802C6E] hover:border-[#802C6E]' onClick={() => { handleClick(product) }}>
              <svg className="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>Add to favorites
              </button>
              </div>
            </article>
          </section>
        }
      </main>
    </LayoutMain>
  )
}

export default Product