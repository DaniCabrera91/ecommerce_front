import { createContext, useReducer } from 'react'
import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const initialState = {
 products: [],
}

const API_URL = 'http://localhost:3001'

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState)

const getProducts = async () => {
  const res = await axios.get(API_URL + '/products/getAll')
   dispatch({
     type: 'GET_PRODUCTS',
     payload: res.data,
   })
   return res

}

return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}    

export const ProductsContext = createContext(initialState)