import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Drawer as AntDrawer } from 'antd';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.headerFooterBackground}; 
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin: 0 10px;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }

  &.active {
    font-weight: bold; /* O cualquier otro estilo que quieras para el enlace activo */
    color: ${({ theme }) => theme.colors.highlight};
  }

  svg {
    margin-right: 5px;
  }
`;

export const MenuButton = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledDrawer = styled(AntDrawer)`
  .ant-drawer-header {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-drawer-header .ant-drawer-title {
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-drawer-body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-drawer-footer {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  a {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }

    &.active {
      font-weight: bold; /* O cualquier otro estilo que quieras para el enlace activo */
      color: ${({ theme }) => theme.colors.highlight};
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ThemeToggleButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  display: flex;
  align-items: center;
  margin-left: 10px;
  
  &:hover {
    opacity: 0.8;
  }
  
  svg {
    font-size: 1.5rem;
  }
`;
