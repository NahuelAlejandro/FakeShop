import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, addFavorites, removeFavorites } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const ProductCards = ({ product }) => {
  
  const { image, title, category, id, price } = product;

  const [fav,setFav] = useState(false)

  const {favorites} = useSelector(store=> store.products)
  
useEffect(()=>{
  favorites.forEach(item => {
    if(item.id == id){
      setFav(true)
    }
  });
},[])

  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart(product))
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
      autoClose:500,
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
    <article className="w-[288px] relative p-1 rounded border-[#802C6E] border-[1px] bg-white flex flex-col gap-2 group/item overflow-hidden">
      <img className="w-full h-[160px] object-contain" src={`${image}`} alt={`${title}`}/>
      <span className="uppercase text-xs text-end px-2 text-gray-400">{category}</span>
      <h2 className="h-28 text-center uppercase text-lg text-pretty font-semibold">{title}</h2>
      <span className="text-xl text-green-500 px-2 ">$ {price}</span>
      <div className="flex justify-center items-center lg:hidden">
        <Link to={`/Products/${id}`} className="text-white font-semibold border-[#802C6E] border-[1px] rounded-lg bg-[#802C6E] py-1 px-3 hover:text-[#802C6E] hover:bg-white">Details</Link>
      </div>
      <div className="hidden lg:absolute lg:flex lg:flex-col lg:items-center lg:justify-between lg:gap-4 lg:transition-all lg:duration-500 lg:group/edit lg:p-2 lg:h-full lg:top-0 lg:-right-full lg:group-hover/item:bg-[#802C6E] lg:group-hover/item:right-0 ">
        <div className="flex flex-col gap-4">
        <button className="text-white hover:text-yellow-400" onClick={handleAddCart}>
          <svg className="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
          </svg>
        </button>
        <button className={`${fav? "text-red-500": "text-white hover:text-red-500"}`} onClick={handleClick}>
          <svg className="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
          </svg>
        </button>
        </div>
        <Link to={`/Products/${id}`} className="text-white font-semibold border-white border-[1px] rounded-lg bg-[#802C6E] py-1 px-2 hover:text-[#802C6E] hover:bg-white">Details</Link>
      </div>
    </article>
  );
};

export default ProductCards;
