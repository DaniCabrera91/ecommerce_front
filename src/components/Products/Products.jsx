import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const Products = () => {
    const { getProducts, products, addCart, cart } = useContext(ProductsContext)

    useEffect(() => {
        getProducts()
    }, [getProducts])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <>
            {products && products.map((product) => (
                <div key={product.id}>
                    <span>{product.productName} </span>
                    <span>{product.price !== undefined ? product.price.toFixed(2) : 'N/A'}</span>
                    <button onClick={() => addCart(product)}>Add Cart</button>
                </div>
            ))}
        </>
    )
}

export default Products
