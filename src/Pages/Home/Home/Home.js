import React from 'react'
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import PopularProducts from '../PopularProducts/PopularProducts';
import Tools from '../Tools/Tools';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Tools></Tools>
        <PopularProducts></PopularProducts>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home;