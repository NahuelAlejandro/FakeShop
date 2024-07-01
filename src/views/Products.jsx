import { useEffect, useRef, useState } from 'react'
import productsQueries from '../services/productsQueries'
import ProductCards from '../components/ProductCards'
import LayoutMain from '../components/LayoutMain'
import Loader from '../components/Loader'

const Products = () => {
  let [products, setProducts] = useState([])
  let [filterProduct, setfilterProduct] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [laoding, setLoading] = useState(true)
const inputSearch = useRef([])

  useEffect(() => {
    productsQueries.getProducts().then(data => {
      if (data) {
        setProducts(data)
        setfilterProduct(data)
        setLoading(false)
      }
    })
  }, [])

  let categories = []

  products.map(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category)
    }
  })

  const filteredProducts = (list, value) =>{
    if (value === "all"){
      return setfilterProduct(list)
    }
    const filterProduct = list.filter(item=> item.category == value)
    return setfilterProduct(filterProduct)
  }

  const handleInput = (list, value)=>{
 
    if(value != ""){
      const filterByTitle = list.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
      return setSuggestions(filterByTitle)
    }else{
      setSuggestions([])
    }
    

  }
  const handleClick=(e, list, value)=>{
    e.preventDefault()
    const filterProduct = list.filter(product => product.title.toLowerCase().includes(value.slice(0, 20)))
    inputSearch.current.value = ""
    return setfilterProduct(filterProduct)
  }

const filteredProductsByTitle = (list, value) => {
  const filterProduct = list.filter(product => product.title.includes(value.slice(0, 20)))
  inputSearch.current.value = ""
  return setfilterProduct(filterProduct)
}

  return (
    <LayoutMain>
      <main className='grow flex flex-col items-center py-4'>
        <section className='flex flex-col items-center w-[90%] gap-6 xl:w-[85%] 2xl:w-[80%]'>
          <h2 className='text-[#802C6E] font-semibold text-4xl'>Latest Products</h2>
          <section className='flex flex-col gap-4 items-center justify-between w-full lg:flex-row'>
            <div className='flex flex-wrap gap-2 w-full items-center justify-center lg:justify-start'>
              <span onClick={(e)=>{filteredProducts(products, e.target.innerHTML)}} className='py-1 px-3 uppercase cursor-pointer bg-[#802C6E] text-white font-semibold rounded border-[1px] border-[#802C6E] hover:text-[#802C6E] hover:bg-white'>all</span>
              {categories.map(category => <span onClick={(e)=>{filteredProducts(products, e.target.innerHTML)}} key={category} className='py-1 px-3 uppercase cursor-pointer bg-[#802C6E] text-white font-semibold rounded border-[1px] border-[#802C6E] hover:text-[#802C6E] hover:bg-white'>{category}</span>)}
            </div>
            <form className='w-full flex flex-col items-center relative lg:w-[30%]'>
              <ul className='shadow-lg z-[1] shadow-slate-400 rounded w-72 absolute top-8 rounded-b bg-white max-h-60 overflow-y-auto md:w-[650px] lg:w-full'>{suggestions && inputSearch.current.value ? suggestions.map(product => <li className='cursor-pointer pl-1 py-1 hover:bg-slate-200' key={product.id} onClick={(e)=>{filteredProductsByTitle(products, e.target.innerHTML)}}>{product.title}</li>):""}</ul>              
              <label className='h-8 w-72 relative md:w-[650px] lg:w-full'>

              <input onInput={()=>handleInput(filterProduct, inputSearch.current.value.trim())} className='border-[#802C6E] border-[1px] rounded outline-none pl-1 pr-8 h-full w-full' placeholder='Serach...' type="search" ref={inputSearch}/>
              <button className='w-8 h-8 absolute pl-1 right-0 bg-[#802C6E] rounded-r' onClick={(e)=>handleClick(e, filterProduct, inputSearch.current.value.trim())} type="submit">
                <svg className=" text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>
</button>
              </label>
            </form>
          </section>
          {laoding
            ? <div className='flex gap-5 justify-center items-center h-[700px]'><Loader /></div>
            : <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              {filterProduct.length >0 ? filterProduct.map(product => <ProductCards key={product.title} product={product}></ProductCards>): <h4 className='text-3xl text-pretty py-4 text-center md:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5'>Not found this products in this category</h4>}
            </div>
          }

        </section>
      </main>
    </LayoutMain>
  )
}

export default Products