import './HomeView.scss';
import React from 'react';
import HomeProducts from '../components/Products/HomeProducts';

function HomeView() {
  return (
    <div className="homeview">
      <h2 className="homeview__subtitle">Special Offers</h2>
      <HomeProducts />
    </div>
  );
}

export default HomeView;
