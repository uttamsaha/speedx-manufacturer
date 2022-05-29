import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../Images/logo.png';
import './Header.css';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-white">Home</Link>
      </li>
      <li>
        <Link to="/tools" className="text-white">All Tools</Link>
      </li>
      <li>
        <Link to="/myportfolio" className="text-white">My Portfolio</Link>
      </li>
      <li>
        <Link to="/blogs" className="text-white">Blogs</Link>
      </li>
      <li>
        {
          user && <Link to="/dashboard" className="text-white">Dashboard</Link>
        }
      </li>
      <li>
        {user ? <>
        <li className="user-name">
        {user?.displayName}
        </li>
          <button onClick={logout} className="btn btn-ghost text-white">Sign Out</button>
        </> : <Link to="/login" className="text-white text">Login</Link>}
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#1D293A] h-24">
      <div className="navbar-start text-white">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#1D293A]"
          >
            {menuItems}
          </ul>
        </div>
       <div className="flex justify-start items-center ">
         <img className="w-12 header-img" src={logo} alt="" />
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white xs:mx-[-150px] xs:mr[-150px]">SpeedX Manufacturer</Link>
       </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end text-white lg:hidden">
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
