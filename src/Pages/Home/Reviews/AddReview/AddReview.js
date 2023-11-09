import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import "./AddReview.css";
import auth from "../../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.result?.insertedId) {
          swal(
            "Review Successfully Added!",
            "Your Review Successfully Added to Database!",
            "success"
          );
        }
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    reset();
  };
  return (
    <div className="form-container">
      <form
        className="add-item block mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="text-xl font-bold text-primary mb-3"
          htmlFor="add-item"
        >
          Add Your Review Here:
        </label>
        <input
          className="input input-bordered input-success w-full max-w-xs mb-3"
          type="text"
          {...register("email")}
          value={user?.email}
        />
        <input
          className="input input-bordered input-success w-full max-w-xs mb-3"
          type="text"
          {...register("name")}
          placeholder="name"
          required
          defaultValue={user?.displayName}
        />
        <input
          className="input input-bordered input-success w-full max-w-xs mb-3"
          type="number"
          {...register("ratings", { pattern: /^[1-5]+$/ })}
          placeholder="Enter Ratings between 1 to 5"
          required
        />
        <input
          className="input input-bordered input-success w-full max-w-xs mb-3"
          type="text"
          {...register("img")}
          placeholder="Image URL"
          required
        />
        <textarea
          className="input input-bordered input-success w-full max-w-xs mb-3 h-28"
          {...register("description")}
          cols="30"
          rows="10"
          placeholder="Write  Description"
          required
        ></textarea>
        <input
          type="submit"
          value="Add Review"
          className="btn btn-primary text-white w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddReview;
