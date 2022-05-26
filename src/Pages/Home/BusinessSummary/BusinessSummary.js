import React from "react";
import "./BusinessSummary.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {BiGitBranch} from 'react-icons/bi';
import {MdOutlineRateReview} from 'react-icons/md';
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <div className="stock-container">
        <h2 className="text-white text-3xl font-bold text-center pt-8 uppercase xs:text-2xl">Business Summary</h2>
      <div className="stock">
        <div className="stock-div items-center">
          <AiOutlineUserAdd className="summary-icon" />
          <h4 className="text-2xl font-bold">10M+</h4>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="stock-div items-center">
          <RiMoneyDollarCircleLine className="summary-icon" />
          <h4 className="text-2xl font-bold">100M+</h4>
          <p className="uppercase">Annual revenue</p>
        </div>
        <div className="stock-div items-center">
          <BiGitBranch className="summary-icon" />
          <h4 className="text-2xl font-bold">10K+</h4>
          <p>BRANCHES</p>
        </div>
        <div className="stock-div items-center">
          <MdOutlineRateReview className="summary-icon" />
          <h4 className="text-2xl font-bold">30K+</h4>
          <p>REVIEWS</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
