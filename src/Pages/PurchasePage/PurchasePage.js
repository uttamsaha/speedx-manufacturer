import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './PurchasePage.css';

const PurchasePage = () => {
    const {id} = useParams();
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [tool, setTool] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/tool/${id}`)
        .then(res => res.json())
        .then(data => setTool(data))
    },[id])

    const onSubmit = data => console.log(data);
  return (
    <div>
      <div>
            <div className='card-item'>
            <div>
                <img className='w-56' src={tool?.img} alt="" />
            </div>
            <div>
                <p className='tool-title'>{tool?.name}</p>
                <p className='tool-price'>Price: <span className='text-primary'>{tool?.price}$/pcs</span></p>
                <p>{tool?.description?.slice(0,100)}</p>
                <p className='tool-min-order'>Minimum Order Quantity: <span className="text-primary">{tool.minOrderQuantity} pcs</span></p>
                <p className='tool-available'>Available: <span className="text-primary">{tool?.available} pcs</span></p>
            </div>
        </div>
      </div>

      <form className='flex flex-col justify-center items-center mt-5' onSubmit={handleSubmit(onSubmit)}>
      <input className='input input-bordered w-full max-w-lg mb-3' {...register("email", { required: true, maxLength: 100 })} defaultValue={user?.email} />
      <input className='input input-bordered w-full max-w-lg mb-3' {...register("name")} defaultValue={user?.displayName}/>
      {/* <input className='input input-bordered w-full max-w-lg mb-3' {...register("age", { min: 18, max: 99 })} placeholder="Enter address"/> */}
      <input className='input input-bordered w-full max-w-lg mb-3' {...register("address")} placeholder="Enter address"/>
      <input className='input input-bordered w-full max-w-lg mb-3' {...register("phone")} placeholder="Enter Phone Number"/>
      <input className='btn btn-primary text-white' type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default PurchasePage;