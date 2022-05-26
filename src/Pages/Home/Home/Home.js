import React from 'react'
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <PopularProducts></PopularProducts>
    </div>
  )
}

export default Home;