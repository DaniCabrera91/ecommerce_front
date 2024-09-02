import { createContext, useReducer } from 'react'
import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const cartStorage = JSON.parse(localStorage.getItem('cart'))

const initialState = {
  products: [],
  cart: cartStorage ? cartStorage : [],
}

const API_URL = 'http://localhost:3000'

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState)

  const deleteProduct = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.delete(`${API_URL}/products/id/${id}`, {
      headers: {
        authorization: token,
      },
    })
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: res.data.response,
    })
  }

  const getProducts = async () => {
    const res = await axios.get(API_URL + '/products')

    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    })
    return res
  }

  const addCart = (product) => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )

}


export const ProductsContext = createContext(initialState)
