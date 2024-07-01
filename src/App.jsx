import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Products from "./views/Products"
import Product from "./views/Product"
import { Provider } from "react-redux"
import store from "./redux/store"
import Favorites from "./views/Favorites"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<Product/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>
      </Routes>
    </Provider>
    <ToastContainer />
    </BrowserRouter>      
    </>
  )
}

export default App
