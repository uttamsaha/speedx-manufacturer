import React from "react";
import uttam from "../../Images/uttam.jpg";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <div className="flex justify-center mb-16 myprofile-container">
      <div className="my-portfolio mt-8 pb-8 ">
        <h2 className="text-center font-bold text-primary text-3xl mt-5">
          My Portfolio
        </h2>
        <div className="flex justify-center mt-8">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={uttam} alt="" />
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mt-3">
          Name: <span className="text-purple-500">Uttam Kumar Saha</span>
        </h3>
        <h3 className="text-md font-bold text-center mt-3">
          Email: <span className="text-sky-500">uttamsaha982@gmail.com</span>
        </h3>
        <h3 className="text-md font-bold text-center mt-3">
          Educational Background:{" "}
          <span className="text-primary">
            B.Sc in CSE, Southeast University
          </span>
        </h3>
        <div className="flex justify-center">
          <div>
            <h3 className="text-md font-bold text-center mt-3 mb-5">
              List of Technologies I Know:
            </h3>
            <ol className="list-disc pl-10">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap5</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>React JS</li>
              <li>Node JS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div>
            <h3 className="text-xl text-primary font-bold mb-2">
              My Three Recent Projects:{" "}
            </h3>
            <div>
              <h3 className="text-md font-bold">
                Project Title: Warehouse Management System
              </h3>
              <p>
                Live Website Link:{" "}
                <a
                  className="text-sky-600"
                  href="https://redx-warehouse.web.app/"
                >
                  https://redx-warehouse.web.app
                </a>
              </p>

              <h3 className="text-md font-bold mt-5">
                Project Title: Dentist Website
              </h3>
              <p>
                Live Website Link:{" "}
                <a
                  className="text-sky-600"
                  href="https://my-dentist-5c77e.web.app/"
                >
                  https://my-dentist-5c77e.web.app
                </a>
              </p>

              <h3 className="text-md font-bold mt-5">
                Project Title: Car Shop
              </h3>
              <p>
                Live Website Link:{" "}
                <a
                  className="text-sky-600"
                  href="https://car-shop-bd.netlify.app/"
                >
                  https://car-shop-bd.netlify.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
