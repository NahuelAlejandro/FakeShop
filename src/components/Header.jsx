import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import CartProducts from "./CartProducts"

const Header = () => {
  const location = useLocation()
  const Links = [
    { path: "/", title: "Home", active: "/" == location.pathname },
    { path: "/Products", title: "Products", active: "/Products" == location.pathname },
    { path: "/Favorites", title: "Favorites", active: "/Favorites" == location.pathname }
  ]
  const {cart} = useSelector((store)=> store.products) 

  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  
 const handleCart = ()=>{
  setOpenCart(!openCart)
 }

  const handleMenu = ()=>{
    setOpenMenu(!openMenu)   
  }
  return (
    <header className="flex justify-between sticky top-0 z-[1] h-16 w-full px-2 bg-[#802C6E]">
      <section className="flex items-center gap-2">
        <img className='w-12' src="https://fakestoreapi.com/icons/logo.png" alt="logo image" />
        <h1 className="font-semibold text-xl text-white">Fake<span className="text-yellow-400 font-bold">Shop</span></h1>
      </section>
      <nav className="flex items-center gap-2">
        <div className= "relative mr-10 md:mr-2" >
          <svg onClick={handleCart} className="w-8 h-8 text-white cursor-pointer hover:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
          </svg>
          <span className="rounded-full text-xs w-5 h-5 flex justify-center items-center font-bold py-2 px-1 absolute -top-2 -right-2 bg-yellow-400 text-[#802C6E]" >{cart.reduce((acc, product) => acc + product.quantity, 0)}</span>
        </div>
        <svg className={`duration-1000 h-8 w-8 text-white  md:hidden ${openMenu? "fixed  -right-full origin-left" :"origin-right absolute right-2 "}`} onClick={handleMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
        </svg>
        <ul className={`flex flex-col items-center justify-center w-full z-10 h-full top-0 bg-[rgb(0,0,0,.7)] fixed duration-1000 ${openMenu? " gap-4 right-0 origin-right " :"origin-left duration-1000 gap-2 -right-full md:bg-transparent md:flex-row md:items-center md:right-2 md:static "}`}>
          <svg className={`w-8 h-8 text-white top-4 fixed duration-1000 ${openMenu?" right-2  origin-right":" -right-full origin-left"}`} onClick={handleMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
          {Links.map(link => link.active ? <li key={link.title}><Link
            className={openMenu?"text-yellow-400 font-bold text-xl" :"text-yellow-400 font-bold text-xl md:py-1 md:px-2 md:font-semibold md:rounded md:text-lg md:bg-white md:text-[#802C6E]"}
            to={link.path}>{link.title}
          </Link></li>
            : <li key={link.title}><Link
              className={openMenu?"text-white font-semibold text-lg" :"text-white font-semibold text-lg md:py-1 md:px-2 md:font-semibold md:rounded md:bg-[#802C6E] md:text-white md:text-lg md:hover:bg-white md:hover:text-[#802C6E]"}
              to={link.path}>{link.title}
            </Link></li>)}
        </ul>
      </nav>
         <section className={`fixed h-full w-full md:w-[450px] flex flex-col gap-4 bg-slate-100 z-10 duration-1000 ${openCart? "right-0 origin-right" : "origin-left -right-[150%]"}`}>
            <h3 className="text-center text-2xl uppercase font-semibold text-[#802C6E] bg-slate-200 py-4">Cart</h3>
            <svg className={`w-8 h-8 text-[#802C6E] top-4 fixed cursor-pointer  duration-1000 ${openCart? "right-2 origin-right" :"-right-full origin-left"}`} onClick={()=>setOpenCart(!openCart)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>
        <div className={`grow flex flex-col max-h-full overflow-y-auto gap-2 ${cart.length > 0 ? "" :"justify-center items-center"}`}>
           {cart.length > 0 
           ? cart.map(product =><CartProducts key={product.id} product={product}/> )
           : <h4 className="flex text-xl gap-2 font-semibold">
            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
         </svg>
          Cart is empty</h4>}
        </div>
              <article className="h-12 bg-slate-200 flex items-center justify-end gap-2 px-2">
                <h4 className="font-semibold text-xl text-[#802C6E] ">Total</h4>
                <span className="font-semibold text-xl">$ {(cart.reduce((acc, product) => acc + product.price * product.quantity, 0)).toFixed(2)}</span>
              </article>
          </section>   
    </header>
   
  )
}

export default Header