import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Head from 'next/head'
import MainNavbar from '@/components/MainNavbar'
import Service1 from "../../public/images/services/3.jpg";
import Service2 from "../../public/images/services/2.jpg";
import Service3 from "../../public/images/services/1.jpg";



import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content=" ApexStrive Global Accounting LLP." />
        <meta name="keywords" content=" ApexStrive Global Accounting LLPn" />
        <meta name="author" content=" ApexStrive Global Accounting LLP" />
        <meta name="copyright" content=" ApexStrive Global Accounting LLP" />
        <meta name="robots" content="follow" />
        <title>Services |  ApexStrive Global Accounting LLP </title>
      </Head>



      <div className='wrapper'>
        <MainNavbar />
        <PageHeader
          title="Services"
          description="Connect with  ApexStrive Global Accounting LLP" />



        <section class="about-layout1">
          <div class="container">
            <div class="heading mb-30">
              <h3 class="heading__title mb-40">Accounting</h3>
              <div class="d-flex align-items-center mb-20">
                <div class="divider divider-primary mr-30"></div>
                {/* <h2 class="heading__subtitle mb-0">Specializing in personalized accounting, auditing, and tax services to drive your business forward. </h2> */}
              </div>
            </div>
            <div class="row">

              <div class="col-sm-12 col-md-12 col-lg-6">

                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    Managing your finances efficiently is essential for growth and stability. Our comprehensive accounting services are designed to streamline your financial operations, offering you peace of mind and allowing you to focus on what you do best. From day-to-day bookkeeping to complex financial analysis, we handle it all with precision and care.
                  </p>
                  <ul class="list-items list-items-layout2 list-unstyled  mb-50">
                    <li>Bookkeeping: Accurate and timely recording of financial transactions.</li>
                    <li>Financial Reporting: Clear and insightful reports to guide your decision-making.</li>
                    <li>Payroll Services: Hassle-free payroll management ensuring compliance and accuracy.</li>
                    <li>Financial Planning: Strategic advice to help you plan for future growth.</li>
                  </ul>

                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={Service1} alt="about" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-layout1">
          <div class="container">
            <div class="heading mb-30">
              <h3 class="heading__title mb-40">Auditing</h3>
              <div class="d-flex align-items-center mb-20">
                <div class="divider divider-primary mr-30"></div>
                {/* <h2 class="heading__subtitle mb-0">Specializing in personalized accounting, auditing, and tax services to drive your business forward. </h2> */}
              </div>
            </div>

            <div class="row">
       

              <div class="col-sm-12 col-md-12 col-lg-6">

                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    In an era of increasing regulatory scrutiny, a thorough and reliable audit is crucial. Our audit services are designed to provide you with a detailed, objective assessment of your financial health. We ensure compliance with all relevant standards and regulations, helping you build trust with stakeholders and making informed business decisions.
                  </p>
                  <ul class="list-items list-items-layout2 list-unstyled  mb-50">
                    <li>Internal Audits: Evaluating internal controls and risk management processes.</li>
                    <li>External Audits: Comprehensive examination of financial statements.</li>

                  </ul>

                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={Service2} alt="about" />
                </div>
              </div>


            </div>
          </div>
        </section>

        <section class="about-layout1">
          <div class="container">
          <div class="heading mb-30">
                  <h3 class="heading__title mb-40">Taxation</h3>
                  <div class="d-flex align-items-center mb-20">
                    <div class="divider divider-primary mr-30"></div>
                    {/* <h2 class="heading__subtitle mb-0">Specializing in personalized accounting, auditing, and tax services to drive your business forward. </h2> */}
                  </div>
                </div>

            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                
                <div class="position-relative offset-xl-1">
                  <i class="icon-quote"></i>
                  <p class="mb-40">
                    Navigating the complexities of tax regulations can be overwhelming. Our taxation services are here to simplify the process, offering expert guidance and strategic planning to optimize your tax position. We are dedicated to helping you manage your tax obligations efficiently while maximizing your benefits.
                  </p>
                  <ul class="list-items list-items-layout2 list-unstyled  mb-50">
                    <li>Tax Planning: Proactive strategies to minimize tax liabilities and enhance savings.</li>
                    <li>Tax Compliance: Ensuring timely and accurate filing of tax returns.</li>
                    <li>Tax Advisory: Expert advice on complex tax issues and regulations.</li>
                    <li>International Taxation: Guidance on cross-border tax matters and compliance.</li>
                  </ul>

                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                <div class="about__img mb-40">
                  <Image src={Service3} alt="about" />
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

export default ServicesPage