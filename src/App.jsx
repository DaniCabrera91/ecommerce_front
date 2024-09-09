import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import Register from './components/RegisterUser/RegisterUser';
import Forbidden from './components/Forbidden/Forbidden';
import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import { OrdersProvider } from './context/OrdersContext/OrdersState';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import TheHeader from './components/TheHeader/TheHeader';
import Footer from './components/TheFooter/TheFooter';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalStyles';
import { lightTheme, darkTheme } from './theme/theme';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <UserProvider>
        <ProductsProvider>
          <OrdersProvider>
            <Router>
              <TheHeader onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
                <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
                <Route path="/admin" element={<ProtectedRoute element={<Admin />} requiredRole="admin" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/403" element={<Forbidden />} />
              </Routes>
              <Footer />
            </Router>
          </OrdersProvider>
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
