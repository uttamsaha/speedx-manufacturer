import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mb-20">
      <h2 className="lg:text-3xl sm:text-2xl text-center mt-20 text-primary popular-review-heading uppercase font-bold">
        Popular reviews
      </h2>
      <h1 className="text-center xs:text-xs lg:text-xl uppercase mt-3">
        What People Says About Us.
      </h1>
      <div className="popular-reviews">
        {reviews.map((review) => (
          <SingleReview key={review.id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
