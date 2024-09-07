import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import Register from './components/RegisterUser/RegisterUser';
import Forbidden from './components/Forbidden/Forbidden'; // Página para acceso denegado
import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import { OrdersProvider } from './context/OrdersContext/OrdersState';
import './reset.scss';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import TheHeader from './components/TheHeader/TheHeader';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <OrdersProvider>
          <Router>
            <TheHeader />
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
              <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
              <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
              <Route path="/admin" element={<ProtectedRoute element={<Admin />} requiredRole="admin" />} />
              <Route path="/register" element={<Register />} />
              <Route path="/403" element={<Forbidden />} /> {/* Página de acceso denegado */}
            </Routes>
            <Footer />
          </Router>
        </OrdersProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
