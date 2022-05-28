import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import './PurchasePage.css';

const PurchasePage = () => {
    const {id} = useParams();
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [tool, setTool] = useState([]);
    const productName = tool?.name;
    useEffect(()=>{
        fetch(`http://localhost:5000/tool/${id}`)
        .then(res => res.json())
        .then(data => setTool(data))
    },[id])

    const handleOrder = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const product = event.target.product.value;
      const quantity = event.target.quantity.value;
      const address = event.target.address.value;
      const phone = event.target.phone.value;

      const data = {name: name, email: email, product: product, quantity: quantity, address: address, phone: phone};
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data?.result?.insertedId){
              swal(
                  "Order Successful!",
                  "Your Order Successfully Added to Database!",
                  "success"
                );
          }
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });


    }
  return (
    <div className='flex justify-center gap-8 mt-8'>
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
                {/* <p className='tool-available'>Available: <span className="text-primary">{} pcs</span></p> */}
                <p className='tool-available'>Total Price: <span className="text-primary">{tool?.available} pcs</span></p>
            </div>
        </div>
      </div>

      <form className='flex flex-col justify-center items-center mt-5 lg:w-96 xs:w-xs' onSubmit={handleOrder}>
      <input type="number" className='input input-bordered w-full max-w-lg mb-3' name='quantity'  placeholder="Enter quantity" required/>
      <input className='input input-bordered w-full max-w-lg mb-3' name='product'  value={productName}/>
      <input className='input input-bordered w-full max-w-lg mb-3' name='email'value={user?.email} />
      <input className='input input-bordered w-full max-w-lg mb-3' name='name'  value={user?.displayName}/>
      {/* <input className='input input-bordered w-full max-w-lg mb-3' {...register("age", { min: 18, max: 99 })} placeholder="Enter address"/> */}
      <input className='input input-bordered w-full max-w-lg mb-3' name='address' placeholder="Enter address" required/>
      <input className='input input-bordered w-full max-w-lg mb-3' placeholder="Enter Phone Number" name='phone' required/>
      <input className='btn btn-primary text-white lg:w-96 xs:w-xs' type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default PurchasePage;