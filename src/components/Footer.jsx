import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css';
const Footer = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between gap-4 flex-wrap text-light text-center">
        <div className="col-lg-3 col-md-4">
        <div className="soc d-flex justify-content-between ms-4 text-white">
                    <BsInstagram/>
                    <FaFacebookF/>
                    <FaXTwitter/>
                </div>
          <ul className='mt-5'>
            <li><a href='#' className='text-white'>Audio Description</a></li>
            <li><a href='#' className='text-white'>Invester Relation</a></li>
            <li><a href='#' className='text-white'>Legal Notices</a></li>
            <li><button className='btn btn-outline-light'>Service Code</button></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4">
            <ul>
              <li><a href='#' className='text-white'>Help Center</a></li>
              <li><a href='#' className='text-white'>Jobs</a></li>
              <li><a href='#' className='text-white'>Cookie Preference</a></li>
            </ul>
        </div>
        <div className="col-lg-3 col-md-4">
          <ul>
          <li><a href='#' className='text-white'>Gift Cards</a></li>
          <li><a href='#' className='text-white'>Terms of Use</a></li>
          <li><a href='#' className='text-white'>Corporate Info</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4">
          <ul>
          <li><a href='#' className='text-white'>Media Center</a></li>
          <li><a href='#' className='text-white'>Privacy</a></li>
          <li><a href='#' className='text-white'>Contact us</a></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
