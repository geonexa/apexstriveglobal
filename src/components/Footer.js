"use client"
import React from 'react'

import DarkLogo from "../../public/images/logo/logo.png"

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling animation
        });
    };

    return (
        <footer className="footer footer-light">
            
            <div className="footer-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className="footer__copyrights">
                                <span className="fz-14">&copy; 2024 ApexStrive Global Accounting LLP, All Rights Reserved.</span>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 text-center">
                            <button onClick={handleScrollToTop} className="my-2"><i className="icon-arrow-up-2"></i></button>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
                            <ul className="social-icons list-unstyled mb-0 mr-30">
                                <li><a href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin"></i></a></li>
                                {/* <li><a href="www.google.com" target='_blank'><i className="fab fa-instagram"></i></a></li> */}
                                <li><a href="https://www.google.com" target='_blank'><i className="fab fa-twitter"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer