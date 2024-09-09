import React from 'react';
import HomeProducts from '../components/Products/HomeProducts';
import { HomeViewContainer, HomeViewSubtitle } from './HomeView.styled';

function HomeView() {
  return (
    <HomeViewContainer>
      <HomeViewSubtitle>SHOP</HomeViewSubtitle>
      <HomeProducts />
    </HomeViewContainer>
  );
}

export default HomeView;
