import { useDispatch } from "react-redux"
import { addCart, removeAllCart, removeCart } from "../redux/actions/actions"

const CartProducts = ({product}) => {

  const dispatch = useDispatch()
  return (
    <article className='w-full p-2 grid grid-cols-7 bg-white items-center text-center'>
        <img className='h-12 w-12' src={`${product.image}`} alt={`${product.title}`} />
        <h3 className='text-pretty px-2 col-span-3'>{product.title.slice(0,20)}</h3>
        <span className='flex gap-1'>
          <button className="border-[1px] h-6 w-6 flex justify-center items-center  border-[#802C6E] rounded" onClick={()=>{dispatch(removeCart(product))}}>-</button>
          {product.quantity}
          <button className="border-[1px] flex justify-center items-center h-6 w-6 border-[#802C6E] rounded" onClick={()=>{dispatch(addCart(product))}}>+</button></span>
        <span className='text-green-500 '>$ {product.price}</span>
        <button className="flex justify-center" onClick={()=>{dispatch(removeAllCart(product))}}>
        <svg className="w-6 h-6  text-[#802C6E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

        </button>
    </article>
  )
}

export default CartProducts