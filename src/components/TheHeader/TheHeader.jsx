import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import {
  ShoppingCartOutlined,
  HomeOutlined,
  ProfileOutlined,
  LogoutOutlined,
  UserAddOutlined,
  LoginOutlined,
  DashboardOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { HeaderContainer, NavLink, HeaderTitle, MenuButton, DrawerContainer, NavLinks, Drawer } from './TheHeader.styled'; 
import ThemeToggle from '../../theme/ThemeToggle'; // Importamos el componente ThemeToggle

function TheHeader({ toggleTheme, isDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { token, logout, user } = useContext(UserContext);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>DenDA</HeaderTitle>
      <NavLinks>
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}> 
          <HomeOutlined /> Home 
        </NavLink>
        {token ? (
          <>
            <NavLink to="/profile" className={location.pathname === "/profile" ? "active" : ""}> 
              <ProfileOutlined /> Profile 
            </NavLink>
            <NavLink to="/cart" className={location.pathname === "/cart" ? "active" : ""}> 
              <ShoppingCartOutlined /> Cart 
            </NavLink>
            <NavLink to="/" onClick={logoutUser}> 
              <LogoutOutlined /> Logout 
            </NavLink>
            {user?.role === 'admin' && (
              <NavLink to="/admin" className={location.pathname === "/admin" ? "active" : ""}> 
                <DashboardOutlined /> Admin 
              </NavLink>
            )}
          </>
        ) : (
          <>
            <NavLink to="/login" className={location.pathname === "/login" ? "active" : ""}> 
              <LoginOutlined /> Login 
            </NavLink>
            <NavLink to="/register" className={location.pathname === "/register" ? "active" : ""}> 
              <UserAddOutlined /> Register 
            </NavLink>
          </>
        )}
      </NavLinks>
      
      {/* Añadimos el componente ThemeToggle */}
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <MenuButton icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        width={250}
      >
        <DrawerContainer>
          <NavLink to="/" onClick={onClose} className={location.pathname === "/" ? "active" : ""}> 
            <HomeOutlined /> Home 
          </NavLink>
          {token ? (
            <>
              <NavLink to="/profile" onClick={onClose} className={location.pathname === "/profile" ? "active" : ""}> 
                <ProfileOutlined /> Profile 
              </NavLink>
              <NavLink to="/cart" onClick={onClose} className={location.pathname === "/cart" ? "active" : ""}> 
                <ShoppingCartOutlined /> Cart 
              </NavLink>
              <NavLink to="/" onClick={() => { logoutUser(); onClose(); }}> 
                <LogoutOutlined /> Logout 
              </NavLink>
              {user?.role === 'admin' && (
                <NavLink to="/admin" onClick={onClose} className={location.pathname === "/admin" ? "active" : ""}> 
                  <DashboardOutlined /> Admin 
                </NavLink>
              )}
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={onClose} className={location.pathname === "/login" ? "active" : ""}> 
                <LoginOutlined /> Login 
              </NavLink>
              <NavLink to="/register" onClick={onClose} className={location.pathname === "/register" ? "active" : ""}> 
                <UserAddOutlined /> Register 
              </NavLink>
            </>
          )}
        </DrawerContainer>
      </Drawer>
    </HeaderContainer>
  );
}

export default TheHeader;
