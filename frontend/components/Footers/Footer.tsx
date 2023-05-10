import React from "react";
import {Input} from "reactstrap";
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';


export default function Footer() {
  return ( 
    <>
    <footer>
          <div  style={{backgroundColor:'#FFF'}}  className="container-fluid">
            <div className="relative container mx-auto darkgray py-3">
              {/* Flex container */}
              <div className="row d-flex justify-content-lg-between align-items-center">
                <div className="col-lg-4 col-sm-12 text-center py-2">
                  <span className="gray text-sm text-right sm:text-right"> 
                  All rights reserved <a href="#" className="darkgray hover:text-teal  mx-1" target="_blank" rel="noopener noreferrer"> 2023 </a>
                  </span>
                </div>
                <div className="col-lg-4 col-sm-12 text-center" >
                  <div className="d-lg-inline d-md-inline">
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><GoMail size='16' /></a>
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><FiFacebook size='16' /></a>
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><FiInstagram size='16'/></a>
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><FiTwitter size='16'/></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 text-center py-2" >
                  <span className="hover:text-teal text-sm"> 
                    <a href="" className="gray ml-1" target="_blank" rel="noopener noreferrer">Terms of service</a>
                  </span>
                </div>
              </div>
            </div>
        </div>
    </footer>
    </>
  );
}
