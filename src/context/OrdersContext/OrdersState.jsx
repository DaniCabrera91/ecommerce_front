import { createContext } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    const productIds = order.map((cartItem) => cartItem.id)
    const productNames = order.map((cartItem) => cartItem.name)
    const productPrices = order.map((cartItem) => cartItem.price)
    const categoryIds = order.map((cartItem) => cartItem.categoryId)

    const token = JSON.parse(localStorage.getItem('token'))

    try {
      const response = await axios.post(`${API_URL}/orders`, { 
        productIds, 
        productNames, 
        productPrices, 
        categoryIds,
        orderDate: new Date().toISOString().split('T')[0],
        deliveryDate: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
      }, { 
        headers: { authorization: token } 
      });

      console.log('Order created:', response.data);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <OrdersContext.Provider value={{ createOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};


export const OrdersContext = createContext()