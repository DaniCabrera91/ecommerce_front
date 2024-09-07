import React from 'react'
import Products from '../components/Products/Products'

function HomeView() {
  return (
    <div className="homeview">
      <h2 className="homeview__subtitle">Special Offers</h2>
      <Products />
    </div>
  )
}

export default HomeView
