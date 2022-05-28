import { async } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import React from 'react'
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../../firebase.init';
import './UpdateProfile.css'

const UpdateProfile = () => {
    const [updateProfile, updating, error1] = useUpdateProfile(auth); 
    const handleUpdate = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        await updateProfile({ displayName: name});
        swal("Name Successfully Updated.", "Your Name successfully updated.!", "success");
    }
  return (
    <div>
        <h2 className='text-2xl text-bold text-primary text-center m-5'>Update Your Profile...</h2>
        <div className='update-profile'>
        <form onSubmit={handleUpdate} className=''>
            <label htmlFor="name">Your name:</label>
            <input className='input input-bordered w-full max-w-xs mb-5' type="text" name="name" id="" placeholder='Enter your updated name.' required/> <br />
            <input className='btn btn-primary text-white' type="submit" value="Update" />
        </form>
        </div>
    </div>
  )
}

export default UpdateProfile;