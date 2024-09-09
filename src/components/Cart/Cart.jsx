import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'
import { CartContainer, CartItem } from './Cart.styled'
import Button from '../Button/Button'

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext)
  const { createOrder } = useContext(OrdersContext)

  const createNewOrder = () => {
    const products = cart.map(item => ({
      id: item.id,
      name: item.productName,
      price: item.price,
      categoryId: item.CategoryId,
    }))
    createOrder(products)
    clearCart()
  }

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>
  }

  return (
    <CartContainer>
      {cart.map((cartItem, i) => (
        <CartItem key={i}>
          <span>{cartItem.productName}</span>
          <span>{cartItem.price.toFixed(2)} €</span>
        </CartItem>
      ))}
      <div>
        <Button onClick={clearCart}>Limpiar Carrito</Button>
        <Button onClick={createNewOrder}>Crear Pedido</Button>
      </div>
    </CartContainer>
  )
}

export default Cart
