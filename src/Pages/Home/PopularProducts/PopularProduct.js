import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import './PopularProduct.css'

const PopularProduct = ({product}) => {
    const {name, price, img} = product;
  return (
    <div className='popular-product mb-20'>
        <div>
        <div className='popular-image'>
        <img src={img} alt="" />
        </div>
        
        <div className='popular-name'>
        <h4 className=''>{name}</h4>
        <hr className='hr' />
        </div>
        <div className='price-info'>
            <p className='font-bold'>${price}</p>
            <div className='star'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
        </div>
        <button className='pp-buy-btn'>BUY NOW</button>
        </div>
    </div>
  )
}

export default PopularProduct;