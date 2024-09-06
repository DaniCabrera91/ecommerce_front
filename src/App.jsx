import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import TheHeader from './components/TheHeader/TheHeader';
import Footer from './components/Footer/Footer'
import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import { OrdersProvider } from './context/OrdersContext/OrdersState';
import Register from './components/RegisterUser/RegisterUser';
import './reset.css';

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <OrdersProvider>
          <Router>	
            <TheHeader />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/register" element={<Register />} />
            </Routes>
						<Footer />
          </Router>
        </OrdersProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
