import { createContext, useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const OrdersProvider = ({ children }) => {
	const [orders, setOrders] = useState([])

	const createOrder = async (order) => {
		const productIds = order.map((cartItem) => cartItem.id)
		const productNames = order.map((cartItem) => cartItem.name)
		const productPrices = order.map((cartItem) => cartItem.price)
		const categoryIds = order.map((cartItem) => cartItem.categoryId)

		const token = JSON.parse(localStorage.getItem('token'))

		try {
			const response = await axios.post(`${API_URL}/orders`, {
				productIds,
				productPrices,
				categoryIds,
				orderDate: new Date().toISOString().split('T')[0],
				deliveryDate: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
			}, {
				headers: { Authorization: token }
			})

			console.log('Order created')
		} catch (error) {
			console.error('Error creating order:', error)
		}
	}

	const getOrders = async () => {
    const token = JSON.parse(localStorage.getItem('token'))

    if (!token) {
        console.error('No token found. Skipping orders fetch.')
        setOrders([])
        return
    }

    try {
        const response = await axios.get(`${API_URL}/orders`, {
            headers: { Authorization: token }
        })
        setOrders(response.data)
    } catch (error) {
        if (error.response?.status === 401) {
            console.error('Unauthorized. Token might be invalid or expired.')
            setOrders([])
        } else {
            console.error('Error fetching orders:', error.response?.data || error.message)
        }
    }
}
	return (
		<OrdersContext.Provider value={{ createOrder, getOrders, orders }}>
			{children}
		</OrdersContext.Provider>
	)
}

export const OrdersContext = createContext()
