import React, { useState } from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import './SingleReview.css'

const SingleReview = ({review}) => {
    const {name, description, ratings, img} = review;
    let ratting = [];
    for(let i = 1; i <= ratings; i++){
      ratting.push("");
    }
    let remaining = 5 - ratting.length;
    const rest = [];
    for(let i = 1; i <= remaining; i++){
        rest.push('');
    }
  return (
    <div className='popular-product mb-20'>
        <div>
        <div className='popular-image'>
        <img src={img} alt="" />
        </div>
        
        <div className='popular-name'>
        <h4 className='text-center'>{name}</h4>
        <hr className='hr' />
        <div className='flex items-center mt-4'>
          <h4 className='mr-3'>Ratings:  </h4>
        <div className='flex'>
          {
            ratting?.map(rating => <AiFillStar className='iconx'/>)
          }
          {rest.map((rest) => (
            <AiOutlineStar className="iconx"></AiOutlineStar>
          ))}
        </div>
        </div>
        
        </div>
        <p className='text-dark'>{description}</p>
        </div>
    </div>
  )
}

export default SingleReview;