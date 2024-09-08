import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { HeaderContainer, NavLink, HeaderTitle, MenuButton, DrawerContainer, NavLinks } from './TheHeader.styled';
import { Drawer } from 'antd';

function TheHeader() {
  const navigate = useNavigate();
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
        <NavLink to="/"> <HomeOutlined /> Home </NavLink>
        {token ? (
          <>
            <NavLink to="/profile"> <ProfileOutlined /> Profile </NavLink>
            <NavLink to="/cart"> <ShoppingCartOutlined /> Cart </NavLink>
            <NavLink to="/" onClick={logoutUser}> <LogoutOutlined /> Logout </NavLink>
            {user?.role === 'admin' && (
              <NavLink to="/admin"> <DashboardOutlined /> Admin </NavLink>
            )}
          </>
        ) : (
          <>
            <NavLink to="/login"> <LoginOutlined /> Login </NavLink>
            <NavLink to="/register"> <UserAddOutlined /> Register </NavLink>
          </>
        )}
      </NavLinks>
      <MenuButton icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        width={250}
      >
        <DrawerContainer>
          <NavLink to="/" onClick={onClose}> <HomeOutlined /> Home </NavLink>
          {token ? (
            <>
              <NavLink to="/profile" onClick={onClose}> <ProfileOutlined /> Profile </NavLink>
              <NavLink to="/cart" onClick={onClose}> <ShoppingCartOutlined /> Cart </NavLink>
              <NavLink to="/" onClick={() => { logoutUser(); onClose(); }}> <LogoutOutlined /> Logout </NavLink>
              {user?.role === 'admin' && (
                <NavLink to="/admin" onClick={onClose}> <DashboardOutlined /> Admin </NavLink>
              )}
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={onClose}> <LoginOutlined /> Login </NavLink>
              <NavLink to="/register" onClick={onClose}> <UserAddOutlined /> Register </NavLink>
            </>
          )}
        </DrawerContainer>
      </Drawer>
    </HeaderContainer>
  );
}

export default TheHeader;
