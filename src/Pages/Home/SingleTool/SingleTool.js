import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleTool.css';

const SingleTool = ({tool}) => {
    const {_id,name, price, description, img, available, minOrderQuantity} = tool;

    const navigate = useNavigate();

    const navigateTool = (id) => {
      navigate(`/purchase/${id}`);
    }
  return (
    <div className='card bg-base-100 shadow-xl card-wrapper lg:max-w-sm xs:max-w-xs sm:max-w-sm'>
        <div className='card-body card-container'>
        <img src={img} alt="" />
        <h3 className='card-title'>{name}</h3>
        <p className='mt-4'><span className='font-bold'>Price: </span><span className='font-bold text-primary'>{price}$</span>/<span className='text-sm font-bold text-red-500'>Unit</span></p>
        <p>{description.slice(0,150)}</p>
        <p className='mt-4'> <span className='font-bold text-sm'>Minimum Order Quantity:</span> <span className='font-bold text-primary'>{minOrderQuantity}</span></p>
            <p className='font-bold'><span className='text-sm'>Available:</span> <span className='text-primary'>{available}</span></p>
        <button onClick={()=>navigateTool(_id)} className='btn btn-primary block mx-auto text-white'>buy now</button>
        </div>
    </div>
  )
}

export default SingleTool;