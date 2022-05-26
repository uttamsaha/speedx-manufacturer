import React from 'react'
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <PopularProducts></PopularProducts>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home;