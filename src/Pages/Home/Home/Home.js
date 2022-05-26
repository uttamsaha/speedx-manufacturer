import React from 'react'
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import PopularProducts from '../PopularProducts/PopularProducts';
import Reviews from '../Reviews/Reviews/Reviews';
import Tools from '../Tools/Tools';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <PopularProducts></PopularProducts>
        <Contact></Contact>
        <Reviews></Reviews>
        <Footer></Footer>
    </div>
  )
}

export default Home;