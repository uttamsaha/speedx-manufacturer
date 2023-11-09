import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loadng/Loading";
import "./UpdateProfile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

const UpdateProfile = () => {
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(
    "users",
    async () =>
      await fetch(
        `https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/user?email=${email}`
      ).then((res) => res.json())
  );
  console.log(users);
  if (updating) {
    return <Loading></Loading>;
  }
  const handleUpdate = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    await updateProfile({ displayName: name });

    const phone = event.target.phone.value;
    const education = event.target.education.value;
    const linkedin = event.target.linkedin.value;
    const address = event.target.address.value;

    const data = {
      phone: phone,
      education: education,
      linkedin: linkedin,
      address: address,
    };
    fetch(`https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    swal(
      "Successfully Updated.",
      "Your data successfully updated.!",
      "success"
    );
    event.target.reset();
  };
  return (
    <div>
      <h2 className="text-2xl text-bold text-primary text-center m-5 font-bold">
        Update Your Profile...
      </h2>
      <div className="update-profile">
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Your name:</label>
          <input
            className="input input-bordered w-full max-w-xs mb-5"
            type="text"
            name="name"
            id=""
            placeholder="Enter your updated name."
            required
          />{" "}
          <br />
          <label htmlFor="name">Phone:</label>
          <input
            className="input input-bordered w-full max-w-xs mb-5"
            type="text"
            name="phone"
            id=""
            placeholder="Enter your updated Phone."
            required
          />{" "}
          <br />
          <label htmlFor="name">Education:</label>
          <input
            className="input input-bordered w-full max-w-xs mb-5"
            type="text"
            name="education"
            id=""
            placeholder="Enter your updated education."
            required
          />{" "}
          <br />
          <label htmlFor="name">LinkedIn:</label>
          <input
            className="input input-bordered w-full max-w-xs mb-5"
            type="text"
            name="linkedin"
            id=""
            placeholder="Enter your updated linkedin."
            required
          />{" "}
          <br />
          <label htmlFor="name">Address</label>
          <input
            className="input input-bordered w-full max-w-xs mb-5"
            type="text"
            name="address"
            id=""
            placeholder="Enter your updated address."
            required
          />{" "}
          <br />
          <input
            className="btn btn-primary text-white"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
