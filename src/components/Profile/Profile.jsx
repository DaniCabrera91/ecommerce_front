import './Profile.scss';
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'
import { Tabs, List, Card } from 'antd'

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext)
  const { getOrders, orders = [] } = useContext(OrdersContext)
  const [loadingOrders, setLoadingOrders] = useState(true)
  const [ordersFetched, setOrdersFetched] = useState(false)

  useEffect(() => {
    if (!user) {
      getUserInfo()
    }
  }, [getUserInfo, user])

  useEffect(() => {
    if (user && !ordersFetched) {
      getOrders().finally(() => setLoadingOrders(false))
      setOrdersFetched(true)
    }
  }, [user, getOrders, ordersFetched])

  if (!user) {
    return <p>Loading user data...</p>
  }

  if (loadingOrders) {
    return <p>Loading orders...</p>
  }

  const tabItems = [
    {
      key: '1',
      label: 'Mi Perfil',
      children: (
        <div>
          <p>Nombre: {user.firstName}</p>
          <p>Apellidos: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Dirección: {user.address}</p>
          <p>Teléfono: {user.phone}</p>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Mis Pedidos',
      children: (
        orders.length > 0 ? (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={orders}
            renderItem={(order) => (
              <List.Item>
                <Card title={`Pedido ID: ${order.id}`}>
                  <p>Order Date: {order.orderDate}</p>
                  <p>Delivery Date: {order.deliveryDate}</p>
                  <p>Order: {order.productNames.join(', ')}</p>
                </Card>
              </List.Item>
            )}
          />
        ) : (
          <p>No has realizado ningún pedido.</p>
        )
      ),
    }
  ];

  return (
    <div>
      <h1>Bienvenid@ {user.firstName}</h1>
      <Tabs items={tabItems} defaultActiveKey="1" />
    </div>
  )
}

export default Profile
