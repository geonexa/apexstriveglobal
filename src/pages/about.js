import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Head from 'next/head'
import MainNavbar from '@/components/MainNavbar'

import VRGopaniImg from "../../public/images/team/VRGopani.jpg"
import JaydeepImg from "../../public/images/team/Jaydeep.jpg"
import ShraddhaImg from "../../public/images/team/Shraddha.jpg"

import linkedin from "../../public/images/linkedin.png"
import Image from 'next/image'
import AboutImg1 from "../../public/images/about/about-1.jpg";
import thumbsImg from "../../public/images/testimonials/thumbs/1.png"


const AboutPage = () => {
  return (
    <>
      <Head>
      <meta name="description" content="ApexStrive Global LLP specializes in personalized accounting, auditing, and taxation services. We empower businesses and individuals with financial clarity and integrity through tailored solutions that drive success." />
        <meta name="keywords" content="ApexStrive, accounting, auditing, taxation, financial services, tax planning, financial clarity, business solutions, compliance, financial management" />
        <meta name="author" content="ApexStrive Global LLP" />
        <meta name="copyright" content="ApexStrive Global Accounting LLP" />
        <meta name="robots" content="follow" />
        <title>About Us |  ApexStrive Global Accounting LLP </title>
      </Head>



      <div className='wrapper'>
        <MainNavbar />
        <PageHeader
          title="About Us"
          description="Who We Are" />


        <section class="about-layout1" >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    <h2 class="heading__subtitle mb-0">Specializing in personalized accounting, auditing, and tax services to drive your business forward. </h2>
                  </div>
                  {/* <h3 class="heading__title mb-40">Manages service delivery across various business like, HR, Legal and
                                        other IT departments!!
                                    </h3> */}
                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">At ApexStrive Global LLP, we understand that navigating the complex world of accounting, auditing, and taxation can be daunting. That&apos;s why we&apos;re here—to provide you with tailored, top-notch services that not only meet but exceed your expectations. As a firm specializing in these critical areas, our primary focus is you, our valued client. We are committed to delivering exceptional results with a customer-centric approach that sets us apart.</p>
                  {/* <ul class="list-items list-items-layout2 list-unstyled d-flex flex-wrap list-horizontal mb-50">
                                        <li>Eliminate Repeat Entry</li>
                                        <li>Simplify Communication</li>
                                        <li>Drive Business Process</li>
                                        <li>Speed Up Transactions</li>
                                        <li>Structure Data & Docs</li>
                                        <li>Automate Workflows</li>
                                    </ul> */}
                </div>

                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    <h2 class="heading__subtitle mb-0">Our Mission </h2>
                  </div>
                  {/* <h3 class="heading__title mb-40">Manages service delivery across various business like, HR, Legal and
                                        other IT departments!!
                                    </h3> */}
                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">Our mission at ApexStrive Global LLP is to empower businesses and individuals with unparalleled financial clarity and integrity. We strive to be your trusted partner, offering bespoke solutions that are designed to meet your unique needs and objectives. By placing your interests at the forefront of our operations, we ensure that every service we provide is meticulously crafted to support your success.</p>


                </div>

              </div>
              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={AboutImg1} alt="about" />
                  {/* <blockquote class="blockquote d-flex align-items-end mb-0">
                    <div class="blockquote__avatar">
                      <Image src={thumbsImg} alt="thumb" />
                    </div>
                    <div class="blockquote__content">
                      <h4 class="blockquote__title mb-0">Integrity in Every Transaction
                      </h4>
                    </div>
                  </blockquote> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-layout1">
          <div class="container">

            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-50">
                  <div class="d-flex align-items-center">
                    <h3 class="heading__title mb-0">The People Behind ApexStrive</h3>
                    <div class="divider divider-primary mr-30"></div>
                    {/* <h2 class="heading__subtitle mb-0">Success Stories</h2> */}
                  </div>
                </div>
              </div>
            </div>



            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    <h2 class="heading__subtitle mb-0">V.R. Gopani  <br />Founder and Chairman</h2>
                  </div>
                  {/* <h2 class="heading__title mb-40">V.R. Gopani  <br />Founder and Chairman</h2> */}
                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    Vaikunth Gopani is a qualified chartered accountant with more than 30 years of experience in audit, taxation and accounting and a member of The Institute of Chartered Accountants of India.
                  </p>


                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={VRGopaniImg} alt="about" />
                  <blockquote class="blockquote d-flex align-items-end mb-0">
                    <div class="blockquote__avatar">
                      <a href='https://www.linkedin.com/' target='_blank' ><Image src={linkedin} alt="thumb" /></a>
                    </div>
                    <div class="blockquote__content">

                      <h4 class="blockquote__title mb-0">V.R. Gopani</h4>
                    </div>
                  </blockquote>
                </div>
              </div>


            </div>
          </div>
        </section>


        <section class="about-layout1">
          <div class="container">
            <div class="row">

              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={JaydeepImg} alt="about" />
                  <blockquote class="blockquote d-flex align-items-end mb-0">
                    <div class="blockquote__avatar">
                      <a href='https://www.linkedin.com/in/ca-jaydeep-gopani-634113178/' target='_blank' ><Image src={linkedin} alt="thumb" /></a>
                    </div>
                    <div class="blockquote__content">
                      <h4 class="blockquote__title mb-0"> Jaydeep Gopani
                      </h4>
                    </div>
                  </blockquote>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    <h2 class="heading__subtitle mb-0">Jaydeep Gopani <br />Managing Director </h2>
                  </div>
                  {/* <h3 class="heading__title mb-40"> Jaydeep Gopani <br />Managing Director</h3> */}



                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    Jaydeep Gopani is a qualified chartered accountant with more than 10 years of experience in audit, taxation and accounting and a member of The Institute of Chartered Accountants of India.
                  </p>


                </div>
              </div>

            </div>
          </div>
        </section>

        <section class="about-layout1">
          <div class="container">
            <div class="row">

              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading mb-30">
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    <h2 class="heading__subtitle mb-0">Shraddha Gopani <br />CEO </h2>
                  </div>
                  {/* <h3 class="heading__title mb-40"> Shraddha Gopani <br />CEO </h3> */}



                </div>
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    Shraddha Gopani is a qualified chartered accountant with more than 10 years of experience in audit, taxation and accounting and a member of The Institute of Chartered Accountants of India.
                  </p>


                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={ShraddhaImg} alt="about" />
                  <blockquote class="blockquote d-flex align-items-end mb-0">
                    <div class="blockquote__avatar">
                      <a href='https://www.linkedin.com/' target='_blank' ><Image src={linkedin} alt="thumb" /></a>
                    </div>
                    <div class="blockquote__content">
                      <h4 class="blockquote__title mb-0"> Shraddha Gopani
                      </h4>
                    </div>
                  </blockquote>
                </div>
              </div>



            </div>
          </div>
        </section>

        <Footer />

      </div>

    </>
  )
}

export default AboutPage