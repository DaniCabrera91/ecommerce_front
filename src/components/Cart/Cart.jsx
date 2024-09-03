import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'

const Cart = () => {
	const { cart, clearCart } = useContext(ProductsContext)
	const { createOrder } = useContext(OrdersContext)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  const createNewOrder = () => {
    const products = cart.map(item => ({
        id: item.id,
        name: item.productName,
        price: item.price,
        categoryId: item.CategoryId 
    }));
    createOrder(products);
    clearCart();
  }

	if (cart.length <= 0) {
		return <span>No tienes ningún producto añadido</span>
	}

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.productName}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    )
  })
  return (
    <>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </>
  )
 }
 
 export default Cart


 