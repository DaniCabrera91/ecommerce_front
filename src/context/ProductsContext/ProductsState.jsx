import { createContext, useReducer, useCallback } from 'react'
import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const cartStorage = JSON.parse(localStorage.getItem('cart')) || []

const initialState = {
    products: [],
    cart: cartStorage,
    product: {},
    categories: [],
};

const API_URL = import.meta.env.VITE_API_URL;

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState)

    const getProducts = useCallback(async () => {
        try {
            const res = await axios.get(`${API_URL}/products`)
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data,
            });
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }, [])

    const addCart = useCallback((product) => {
        dispatch({
            type: 'ADD_CART',
            payload: product,
        })
    }, [])

    const clearCart = useCallback(() => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }, [])

    const createProduct = async (product) => {
        const token = JSON.parse(localStorage.getItem('token'))
        try {
            const res = await axios.post(`${API_URL}/products`, product, {
                headers: { authorization: token },
            })
            dispatch({
                type: 'CREATE_PRODUCT',
                payload: res.data.product,
            })
            return res.data.product
        } catch (error) {
            console.error('Error creating product:', error)
        }
    }

    const deleteProduct = useCallback(async (id) => {
        const token = JSON.parse(localStorage.getItem('token'))
        try {
            await axios.delete(`${API_URL}/products/id/${id}`, {
                headers: {
                    authorization: token,
                },
            })
            dispatch({
                type: 'DELETE_PRODUCT',
                payload: id, 
            })
        } catch (error) {
            console.error('Error deleting product:', error)
        }
    }, [])

    const getProductById = useCallback(async (id) => {
        try {
            const res = await axios.get(`${API_URL}/products/id/${id}`)
            dispatch({
                type: 'GET_PRODUCT_BY_ID',
                payload: res.data,
            })
        } catch (error) {
            console.error('Error fetching product by id:', error)
        }
    }, [])

    const editProduct = useCallback(async (product, id) => {
        const token = JSON.parse(localStorage.getItem('token'))
        try {
            const res = await axios.put(`${API_URL}/products/id/${id}`, product, {
                headers: { authorization: token },
            });
            dispatch({
                type: 'EDIT_PRODUCT',
                payload: res.data,
            })
        } catch (error) {
            console.error('Error editing product:', error)
        }
    }, [])

    const getCategories = useCallback(async () => {
        try {
            const res = await axios.get(`${API_URL}/categories`)
            const validCategories = res.data.filter(category => category.id !== null && category.id !== undefined)
            dispatch({
                type: 'GET_CATEGORIES',
                payload: validCategories,
            })
        } catch (error) {
            console.error("Error fetching categories", error)
        }
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                product: state.product,
                categories: state.categories,
                getProducts,
                addCart,
                clearCart,
                deleteProduct,
                createProduct,
                getProductById,
                editProduct,
                getCategories,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const ProductsContext = createContext(initialState)
export default ProductsProvider
