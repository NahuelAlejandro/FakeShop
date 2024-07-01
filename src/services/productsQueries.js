
const getProducts = async()=>{
    try {
        const response = await fetch('https://fakestoreapi.com/products').then(response => response.json())
        return response
    } catch (error) {
        return []
    }

}

const getProduct = async(data)=>{ 
    try{
        const response = await fetch('https://fakestoreapi.com/products/'+ data).then(response => response.json())
        return response
    } catch (error) {
        return []
    }
}

export default {getProducts, getProduct};