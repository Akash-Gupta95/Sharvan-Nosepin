import React from "react";
import "./FooterStyle.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-2 font-weight-bold text-warning">
              SHARVAN NOSEPIN
            </h5>
            <p>
              "Big collection of shiny gold nose pins in different beautiful
              styles."
            </p>
          </div>
          <div className="col-md2 col-lg-2 col-xl-2 mx-auto mt-3 col-6">
            <h5 className="text-uppercase mb-2 front-weight-bold text-warning">
              Products
            </h5>
            <a href="#" className="text-white">
              Nose Ring
            </a>
            <a href="#" className="text-white">
              Ear Rings
            </a>

            <a href="#" className="text-white">
              Nosepin
            </a>
            
          </div>


          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 col-6">
            <h5 className="text-uppercase mb-2 front-weight-bold text-warning">
              Contact
            </h5>
            <a href="#" className="text-white">
              Darbhanga
            </a>
         
          

            <a href="#" className="text-white">
            <a>+91- 8434381886</a> 
           <a> +91- 7903039192</a>
            </a>
            
            
            <p>
              <i className="fas fa-home mr-3"></i>
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="col-12">  
        <a href="#" className="text-white">
            akashkashyapy@gmail.com
            </a></div>
        <hr className="mb-4" />
        <div className="row align-item-center copyright">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright All rights reserved by:
              <a href="">
                <strong className="text-warning ">Akash Gupta</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white">
                    <i className=""></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
