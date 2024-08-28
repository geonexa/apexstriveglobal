"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LightLogo from "../../public/images/logo/logo.png"
import DarkLogo from "../../public/images/logo/logo.png"
import { useRouter } from 'next/router'
import { useTechnologyContext } from '@/context/TechnologyContext'

const MainNavbar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { technologyRef } = useTechnologyContext();

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };


    const handleNavLinkClick = (event) => {
        event.preventDefault();
        setShowDropdown(!showDropdown)
    };


    const navigateToTechnology = (e) => {
        e.preventDefault();
        if (router.pathname !== "/") {
            router.push("/").then(() => {
                technologyRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        } else {
            technologyRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 992) {
                const stickyNavbar = document.querySelector('.sticky-navbar');
                if (window.scrollY > 50) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`header header-light  is-sticky `}>


{/* <div class="d-none d-md-block">
        <div class="topbar">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <span class="topbar__text">
                  Need Help: Providing Innovative and Sustainable Solutions, Call (002) 01061245741
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}


            {/* <div class="d-none d-md-block">
                <div class="topbar topbar-dark">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex align-items-center justify-content-between">
                                    <ul class="topbar__contact d-flex flex-wrap list-unstyled mb-0">
                                        <li>
                                            <i class="icon-phone"></i><a href="tel:+5565454117">+91 9999999999</a>
                                        </li>
                                        <li>
                                            <i class="icon-mail"></i><a href="mailto:connect@apexstriveglobal.com">connect@apexstriveglobal.com</a>
                                        </li>
                                        <li>
                                            <i class="icon-clock"></i><Link href="/contact">Hours: Mon-Fri: 9AM – 7PM</Link>
                                        </li>
                                    </ul>
                                    <div class="d-flex">
                                        <ul class="social-icons list-unstyled mb-0 mr-30">
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="navbar navbar-expand-lg">
                <div className="container">

                    <Link className="navbar-brand" href="/">
                        <Image src={LightLogo} className="logo-light" alt="logo" />
                        <Image src={DarkLogo} className="logo-dark" alt="logo" />
                    </Link>



                    <button className={`navbar-toggler ${showMenu ? 'actived' : ''}`} type="button" onClick={handleToggle}>
                        <span className="menu-lines"><span></span></span>
                    </button>


                    <div className={`collapse navbar-collapse ${showMenu ? 'menu-opened' : ''}`}>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav__item">
                                <Link href="/"
                                    className={router.pathname == "/" ? " nav__item-link nav__item-link_active" : "nav__item-link"}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link href="/about"
                                    className={router.pathname == "/about" ? " nav__item-link nav__item-link_active" : "nav__item-link"}
                                >
                                    About
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link href="/services"
                                    className={router.pathname == "/services" ? " nav__item-link nav__item-link_active" : "nav__item-link"}
                                >
                                    Services
                                </Link>
                            </li>






                            <li className="nav__item">
                                <Link href="/contact"
                                    className={router.pathname == "/contact" ? " nav__item-link nav__item-link_active" : "nav__item-link"}
                                >
                                    Contact Us</Link>
                            </li>


                        </ul>
                    </div>

                    {/* <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
                        <li className="d-none d-xl-block">
                            <Link href="/" className="btn action__btn-contact">Request A Quote</Link>
                        </li>
                    </ul> */}

                </div>
            </div>
        </div>




    )
}

export default MainNavbar