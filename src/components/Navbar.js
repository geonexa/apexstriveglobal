import React, { useEffect, useState } from 'react'
import LightLogo from "../../public/images/logo/logo-light.png"
import DarkLogo from "../../public/images/logo/logo-dark.png"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
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


  const handleNavLinkClick = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown)
  };


  return (

    <header className={`header header-light ${isSticky ? 'is-sticky' : ''}`}>
      <div className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">

          <Link className="navbar-brand" href="/">
            {/* <Image src={LightLogo} className="logo-light" alt="logo" /> */}
            <Image src={DarkLogo} className="logo-dark" alt="logo" />

          </Link>
          <button className={`navbar-toggler ${showMenu ? 'actived' : ''}`} type="button" onClick={handleToggle}>
            <span className="menu-lines"><span></span></span>
          </button>
          <div className={`collapse navbar-collapse ${showMenu ? 'menu-opened' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <Link
                className={router.pathname == "/" ? "active nav__item-link" : "nav__item-link"}
                  href="/">Home</Link>
              </li>

              <li className="nav__item">
                <Link
                className={router.pathname == "/about" ? "active nav__item-link" : "nav__item-link"}
               
                  href="/about">About Us</Link>
              </li>



              {/* <li className="nav__item  has-dropdown">
                <NavLink href="/company" onClick={handleNavLinkClick}
                  className={({ isActive }) => (isActive ? 'active dropdown-toggle nav__item-link' : 'dropdown-toggle nav__item-link')}
                  data-toggle="dropdown">About Us</NavLink>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link href="/company/about" className="nav__item-link">About Us</Link>
                  </li>

                
                  <li className="nav__item">
                    <Link href="/company/careers" className="nav__item-link">Careers</Link>
                  </li>

                </ul>
              </li> */}

              <li className={`nav__item has-dropdown ${showDropdown ? "show" : ""}`}>

                <Link href="/services"
                  onClick={handleNavLinkClick}
                  className={
                    router.pathname.startsWith("/services")
                        ? "active dropdown-toggle nav__item-link"
                        : "dropdown-toggle nav__item-link"
                }

                 
                >
                  Services</Link>
                <ul  className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                  <li className="nav__item">
                    <Link href="/services/webgis-development" className="nav__item-link">WebGIS Development</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/services/spatial-analysis" className="nav__item-link">Spatial Analysis</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/services/data-on-demand" className="nav__item-link">Data on Demand</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/services/custom-software-development" className="nav__item-link">Custom Software Development</Link>
                  </li>

                </ul>

              </li>

              <li className="nav__item">
                <Link href="/projects"

                  className={router.pathname == "/projects" ? "active nav__item-link" : "nav__item-link"}
                >Projects</Link>
              </li>








              <li className="nav__item">
                <Link href="/contact"
                 className={router.pathname == "/contact" ? "active nav__item-link" : "nav__item-link"}
                

                >Contact</Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li className="d-none d-xl-block">
              <Link href="/" className="btn action__btn-contact">Request A Quote</Link>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </div>
    </header>

  )
}

export default Navbar