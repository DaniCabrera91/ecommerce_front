import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
  background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#fff')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Aligns to the right */
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  text-decoration: none;
  margin: 0 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#ffeb3b' : '#ff9800')};
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

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: row; /* Change to horizontal layout */
  align-items: center;
  padding: 1.5rem;
  width: 100%;

  a {
    margin: 0 1rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    &:hover {
      color: ${({ theme }) => (theme === 'dark' ? '#ffeb3b' : '#ff9800')};
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
