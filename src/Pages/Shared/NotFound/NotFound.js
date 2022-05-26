import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
    return (
      <div className="flex justify-center items-center pt-28">
        <section className="page_404">
          <div className="container">
                <div className=" text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>The page you are looking for not available!</p>

                    <Link to="/" className="link_404">
                      Go to Home
                    </Link>
                  </div>
                </div>
            </div>
        </section>
      </div>
    );
}
export default NotFound;