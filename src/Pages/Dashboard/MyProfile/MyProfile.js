import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../../Images/profile.png";
import "./MyProfile.css";
import { FiEdit } from "react-icons/fi";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import Loading from "../../Shared/Loadng/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  // console.log('Your email is: ',email);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/user?email=${email}`).then(
      (res) => res.json()
    )
  );
  // console.log(users?.[0]._id);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className=" text-3xl mt-12 text-green-600 font-bold text-center">
        My Profile
      </h2>
      <div>
        <div className="flex justify-center mt-8">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || profile} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <div className="form-control w-96">
            <hr className="mt-5 border-2 rounded-3xl" />
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                value={email || ""}
                className="input input-bordered lg:w-96"
                disabled
              />
            </label>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                value={user?.displayName}
                className="input input-bordered lg:w-96"
                disabled
              />
            </label>
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <label className="input-group lg:w-96">
              <span>Phone</span>
              <input
                type="text"
                value={users?.[0]?.phone || ""}
                className="input input-bordered lg:w-96"
                disabled
              />
            </label>
            <label className="label">
              <span className="label-text">Education ex: SSC/HSC</span>
            </label>
            <label className="input-group lg:w-96">
              <span>Education</span>
              <input
                type="text"
                value={users?.[0]?.education || ""}
                className="input input-bordered lg:w-96"
                disabled
              />
            </label>
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <label className="input-group">
              <span>Linkedin</span>
              <input
                type="text"
                value={users?.[0]?.linkedin || ""}
                className="input input-bordered lg:w-96"
                disabled
              />
            </label>
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <label className="input-group">
              <span>Address</span>
              <input
                type="text"
                value={users?.[0]?.address || ""}
                className="input input-bordered lg:w-96"
                disabled
              />
            </label>

            <Link
              className="btn btn-success bg-green-500 mt-5 text-white flex items-center justify-center lowercase text-xl font-normal"
              to="/updateprofile"
            >
              {" "}
              <FiEdit className="text-xl mr-1" />
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
