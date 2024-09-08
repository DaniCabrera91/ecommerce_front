import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { OrdersContext } from '../../context/OrdersContext/OrdersState';
import { CartContainer, CartItem, CartButtons } from './Cart.styled';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  const createNewOrder = () => {
    const products = cart.map(item => ({
      id: item.id,
      name: item.productName,
      price: item.price,
      categoryId: item.CategoryId,
    }));
    createOrder(products);
    clearCart();
  };

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  return (
    <CartContainer>
      {cart.map((cartItem, i) => (
        <CartItem key={i}>
          <span>{cartItem.productName}</span>
          <span>{cartItem.price.toFixed(2)} €</span>
        </CartItem>
      ))}
      <CartButtons>
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={createNewOrder}>Create Order</button>
      </CartButtons>
    </CartContainer>
  );
};

export default Cart;
