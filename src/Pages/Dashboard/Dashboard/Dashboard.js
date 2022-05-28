import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import {RiProfileLine} from 'react-icons/ri';
import {MdOutlineRateReview} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  //drawer for mobile + fixed sidebar for desktop daisyui
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl text-purple-500 font-bold mt-3 ">
         <span className="text-green-500"> {user?.displayName.split(' ')[0]}</span>, Welcome to your Dashboard
        </h2>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard"> <RiProfileLine className="text-2xl font-bold text-primary"/>My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview"> <MdOutlineRateReview className="text-2xl font-bold text-primary"/>Add Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history"> <AiOutlineShoppingCart className="text-2xl font-bold text-primary"/>My Orders</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add a Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
