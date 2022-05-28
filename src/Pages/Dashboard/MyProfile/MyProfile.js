import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import profile from "../../../Images/profile.png";
import "./MyProfile.css";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2 className=" text-2xl mt-12 text-green-600 font-bold uppercase text-center">
        My Profile
      </h2>
      <div>
        <div className="flex justify-center mt-8">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || profile} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
              <span>Email</span>
              <input
                type="text"
                value={user?.email}
                class="input input-bordered"
                disabled
              />
            </label>
            <label class="label">
              <span class="label-text">Your Name</span>
            </label>
            <label class="input-group">
              <span>Name</span>
              <input
                type="text"
                value={user?.displayName}
                class="input input-bordered"
                disabled
              />
            </label>
            <label class="label">
              <span class="label-text">Last Login</span>
            </label>
            <label class="input-group">
              <span>Last Login</span>
              <input
                type="text"
                value={user?.metadata.lastSignInTime?.split('2022')[0]}
                class="input input-bordered"
                disabled
              />
            </label>
            <Link className="btn btn-primary mt-5 text-white " to="/updateprofile">Update Profile</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
