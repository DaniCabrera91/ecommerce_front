import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import {
  HeaderContainer,
  NavLink,
  HeaderTitle,
  MenuButton,
  DrawerContainer,
  NavLinks,
  RightContainer,
  StyledDrawer
} from './TheHeader.styled';
import ThemeToggle from '../../theme/ThemeToggle';

const TheHeader = ({ onThemeToggle, isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obtener la URL actual
  const { token, logout, user } = React.useContext(UserContext);
  const [drawerVisible, setDrawerVisible] = React.useState(false);

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
      <RightContainer>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            <HomeOutlined /> Home
          </NavLink>
          {token ? (
            <>
              <NavLink to="/profile" className={location.pathname === '/profile' ? 'active' : ''} key="profile">
                <ProfileOutlined /> Profile
              </NavLink>
              <NavLink to="/cart" className={location.pathname === '/cart' ? 'active' : ''} key="cart">
                <ShoppingCartOutlined /> Cart
              </NavLink>
              <NavLink to="/" onClick={logoutUser} className={location.pathname === '/' ? 'active' : ''} key="logout">
                <LogoutOutlined /> Logout
              </NavLink>
              {user?.role === 'admin' && (
                <NavLink to="/admin" className={location.pathname === '/admin' ? 'active' : ''} key="admin">
                  <DashboardOutlined /> Admin
                </NavLink>
              )}
            </>
          ) : (
            <>
              <NavLink to="/login" className={location.pathname === '/login' ? 'active' : ''} key="login">
                <LoginOutlined /> Login
              </NavLink>
              <NavLink to="/register" className={location.pathname === '/register' ? 'active' : ''} key="register">
                <UserAddOutlined /> Register
              </NavLink>
            </>
          )}
        </NavLinks>
        <ThemeToggle toggleTheme={onThemeToggle} theme={isDarkMode ? 'dark' : 'light'} />
        <MenuButton icon={<MenuOutlined />} onClick={showDrawer} />
      </RightContainer>
      <StyledDrawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        width={250}
      >
        <DrawerContainer>
          <NavLink to="/" onClick={onClose} className={location.pathname === '/' ? 'active' : ''} key="drawer-home">
            <HomeOutlined /> Home
          </NavLink>
          {token ? (
            <>
              <NavLink to="/profile" onClick={onClose} className={location.pathname === '/profile' ? 'active' : ''} key="drawer-profile">
                <ProfileOutlined /> Profile
              </NavLink>
              <NavLink to="/cart" onClick={onClose} className={location.pathname === '/cart' ? 'active' : ''} key="drawer-cart">
                <ShoppingCartOutlined /> Cart
              </NavLink>
              <NavLink to="/" onClick={() => { logoutUser(); onClose(); }} className={location.pathname === '/' ? 'active' : ''} key="drawer-logout">
                <LogoutOutlined /> Logout
              </NavLink>
              {user?.role === 'admin' && (
                <NavLink to="/admin" onClick={onClose} className={location.pathname === '/admin' ? 'active' : ''} key="drawer-admin">
                  <DashboardOutlined /> Admin
                </NavLink>
              )}
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={onClose} className={location.pathname === '/login' ? 'active' : ''} key="drawer-login">
                <LoginOutlined /> Login
              </NavLink>
              <NavLink to="/register" onClick={onClose} className={location.pathname === '/register' ? 'active' : ''} key="drawer-register">
                <UserAddOutlined /> Register
              </NavLink>
            </>
          )}
        </DrawerContainer>
      </StyledDrawer>
    </HeaderContainer>
  );
}

export default TheHeader;
