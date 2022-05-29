import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineRateReview, MdManageSearch } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineFileAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  //drawer for mobile + fixed sidebar for desktop daisyui
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl text-purple-500 font-bold mt-3 ">
          <span className="text-green-500">
            {" "}
            {user?.displayName.split(" ")[0]}
          </span>
          , Welcome to your Dashboard
        </h2>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">
              {" "}
              <RiProfileLine className="text-2xl font-bold text-primary" />
              My Profile
            </Link>
          </li>

          {admin ? (
            <>
              <li>
                <Link to="/dashboard/manageOrders">
                  {" "}
                  <FaRegEdit className="text-2xl font-bold text-primary" />
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">
                  {" "}
                  <AiOutlineFileAdd className="text-2xl font-bold text-primary" />{" "}
                  Add a Product
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">
                  <MdManageSearch className="text-2xl font-bold text-primary" />{" "}
                  Manage Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allUsers">
                  <FiUsers className="text-2xl font-bold text-primary" />
                  All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/addreview">
                  {" "}
                  <MdOutlineRateReview className="text-2xl font-bold text-primary" />
                  Add Reviews
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myorders">
                  {" "}
                  <AiOutlineShoppingCart className="text-2xl font-bold text-primary" />
                  My Orders
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
