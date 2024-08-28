"use client"
import React from 'react'
import LightLogo from "../../public/images/logo/logo.png"
import Link from 'next/link';
import Image from 'next/image';


const FooterDark = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling animation
        });
    };

    return (
        <div>

            <footer className="footer">

                <div className="footer-secondary">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5 col-lg-5">
                                <div className="footer__copyrights">
                                    <span className="fz-14">&copy; 2024 GeoNexa, All Rights Reserved.</span>

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 text-center">
                                <button onClick={handleScrollToTop} id="scrollTopBtn" className="my-2"><i className="icon-arrow-up-2"></i></button>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
                                <ul className="social-icons list-unstyled mb-0 mr-30">
                                    <li><Link href="https://www.linkedin.com/company/geonexa/" target='_blank'><i className="fab fa-linkedin"></i></Link></li>
                                    <li><Link href="www.google.com" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default FooterDark