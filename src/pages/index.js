import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import thumbsImg from "../../public/images/testimonials/thumbs/1.png"
import taxationImg from "../../public/images/icons/taxation.png"
import auditImg from "../../public/images/icons/audit.png"
import accountsImg from "../../public/images/icons/accounts.png"
import AboutImg1 from "../../public/images/about/about-1.jpg";
import WhyUsImg1 from "../../public/images/about/why-us-1.jpg";
import WhyUsImg2 from "../../public/images/about/why-us-2.jpg";
import WhyUsImg3 from "../../public/images/about/why-us-3.jpg";
import WhyUsImg4 from "../../public/images/about/why-us-4.jpg";



import Image from "next/image";
import { useTechnologyContext } from "@/context/TechnologyContext";
import axios from "axios";

const HomePage = () => {
    const aboutProgressRef = useRef(null);

    const { technologyRef } = useTechnologyContext();

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")

    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setMessage('');
        }, 2000);

        return () => {
            clearTimeout(messageTimer);
        };
    }, [message]);


    const handleChange = ({ target }) =>
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));



    const onSubmit = async () => {


        const hasNullValue = Object.values(formData).some(value => value === null || value === '');
        if (hasNullValue) {
            setMessage('Please fill in all fields before submitting.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('/api/contact', formData, {
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });

            if (response.status !== 200) {
                throw new Error('Failed to send message');
            }

            setIsLoading(false);
            setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
            setMessage('Message Sent Successfully');
        } catch (error) {
            setIsLoading(false);
            setMessage('Error sending message:', error);
        }
    };




    return (
        <>
            <Head>
                <meta name="description" content="ApexStrive Global LLP specializes in personalized accounting, auditing, and taxation services. We empower businesses and individuals with financial clarity and integrity through tailored solutions that drive success." />
                <meta name="keywords" content="ApexStrive, accounting, auditing, taxation, financial services, tax planning, financial clarity, business solutions, compliance, financial management" />
                <meta name="author" content="ApexStrive Global LLP" />
                <meta name="copyright" content="ApexStrive Global Accounting LLP" />
                <meta name="robots" content="follow" />
                <title>ApexStrive Global Accounting LLP </title>
            </Head>

            <div className="wrapper">
                <MainNavbar />





                <section className="slider">

                    <div className='background_img_container'>



                        <div className="container background_img_writeup">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                                    <div className="slide__content">

                                        <h2 className="slide__title mt-50">
                                            Your Trusted Partner in Accounting, Auditing, and Taxation
                                        </h2>

                                        <p className="slide__desc">Focused on your financial success with customized, client-centric services.</p>

                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                aboutProgressRef.current.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                });
                                            }}
                                            className="btn btn__primary btn__icon mr-30"
                                        >
                                            <span>Explore More</span>
                                            <i className="icon-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* <div
                        style={{
                            backgroundImage: `url(${BackgroundIMg.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="slide-item align-v-h bg-overlay bg-overlay-gradient"
                    >
                        
                    </div> */}
                </section>



                <section className="about-layout1" ref={aboutProgressRef}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="heading mb-30">
                                    <div className="d-flex align-items-center mb-20">
                                        <div className="divider divider-primary mr-30"></div>
                                        <h2 className="heading__subtitle mb-0">Specializing in personalized accounting, auditing, and tax services to drive your business forward. </h2>
                                    </div>
                                    {/* <h3 className="heading__title mb-40">Manages service delivery across various business like, HR, Legal and
                                        other IT departments!!
                                    </h3> */}
                                </div>
                                <div className="position-relative offset-xl-1">
                                    <i className="icon-quote"></i>
                                    <p className="mb-40">At ApexStrive Global LLP, we understand that navigating the complex world of accounting, auditing, and taxation can be daunting. That&apos;s why we&apos;re here—to provide you with tailored, top-notch services that not only meet but exceed your expectations. As a firm specializing in these critical areas, our primary focus is you, our valued client. We are committed to delivering exceptional results with a customer-centric approach that sets us apart.</p>
                                    {/* <ul className="list-items list-items-layout2 list-unstyled d-flex flex-wrap list-horizontal mb-50">
                                        <li>Eliminate Repeat Entry</li>
                                        <li>Simplify Communication</li>
                                        <li>Drive Business Process</li>
                                        <li>Speed Up Transactions</li>
                                        <li>Structure Data & Docs</li>
                                        <li>Automate Workflows</li>
                                    </ul> */}
                                </div>

                                <div className="heading mb-30">
                                    <div className="d-flex align-items-center mb-20">
                                        <div className="divider divider-primary mr-30"></div>
                                        <h2 className="heading__subtitle mb-0">Our Mission </h2>
                                    </div>
                                    {/* <h3 className="heading__title mb-40">Manages service delivery across various business like, HR, Legal and
                                        other IT departments!!
                                    </h3> */}
                                </div>
                                <div className="position-relative offset-xl-1">
                                    <i className="icon-quote"></i>
                                    <p className="mb-40">Our mission at ApexStrive Global LLP is to empower businesses and individuals with unparalleled financial clarity and integrity. We strive to be your trusted partner, offering bespoke solutions that are designed to meet your unique needs and objectives. By placing your interests at the forefront of our operations, we ensure that every service we provide is meticulously crafted to support your success.</p>


                                </div>

                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                                <div className="about__img mb-40">
                                    <Image src={AboutImg1} alt="about" />
                                    <blockquote className="blockquote d-flex align-items-end mb-0">
                                        <div className="blockquote__avatar">
                                            <Image src={thumbsImg} alt="thumb" />
                                        </div>
                                        <div className="blockquote__content">
                                            <h4 className="blockquote__title mb-0">Integrity in Every Transaction
                                            </h4>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>






                {/* <section className="banner-layout4 pt-130 pb-130">

                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6" style={{ padding: "0px" }}>
                                <Image src={AboutImg1} alt="banner" style={{ width: "100%" }} />
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 " style={{ padding: "0px" }}>

                                <div style={{
                                    backgroundImage: `url(${BackgroundIMg.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "100%"
                                }}


                                >
                                    <div className="inner-padding">

                                        <div className="heading heading-light mb-60">
                                            <h3 className="heading__title mb-30">
                                                Why ApexStrive Global Accounting LLP?
                                            </h3>
                                            <h6 className="heading__title mb-30" style={{ fontSize: "20px", textAlign: "justify" }}>
                                                At ApexStrive Global Accounting LLP, we are dedicated to revolutionizing the way we address carbon emissions. Our cutting-edge technology offers a sustainable, energy-efficient solution for capturing and transforming CO2. By leveraging renewable resources and our unique regeneration method, we provide an innovative approach to closing the carbon cycle, making a positive impact on the environment and driving the transition to a greener future. Choose ApexStrive Global Accounting LLP for reliable, advanced, and eco-friendly carbon capture solutions.
                                            </h6>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}


                <section className="portfolio-grid portfolio-grid-carousel pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="heading mb-50">
                                    <div className="d-flex align-items-center">
                                        <div className="divider divider-primary mr-30"></div>
                                        <h2 className="heading__subtitle mb-0">Why Choose ApexStrive Global LLP?</h2>
                                    </div>
                                    <h3 className="heading__title mb-0">Our Edge</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={WhyUsImg1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">

                                        <h4 className="portfolio__title">Customer-Centric Approach</h4>
                                        <p className="portfolio__desc">At ApexStrive Global LLP, your satisfaction is our top priority. We take the time to understand your specific needs and challenges, tailoring our services to deliver the most effective solutions. Our team of professionals is always available to address your questions and concerns, ensuring a seamless and personalized experience.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={WhyUsImg3} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">

                                        <h4 className="portfolio__title">Excellence in Service</h4>
                                        <p className="portfolio__desc">We are committed to maintaining the highest standards of excellence in everything we do. Our team comprises highly skilled and experienced professionals who are dedicated to providing accurate, reliable, and timely services. We leverage the latest technology and industry best practices to deliver superior results and keep you ahead of the curve.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={WhyUsImg2} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">

                                        <h4 className="portfolio__title">Integrity and Transparency</h4>
                                        <p className="portfolio__desc">Trust is the cornerstone of our relationship with clients. We operate with the highest level of integrity and transparency, ensuring that you are always informed and confident in the services we provide. Our straightforward approach and open communication build lasting partnerships based on mutual respect and trust.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <Image src={WhyUsImg4} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">

                                        <h4 className="portfolio__title">Innovative Solutions</h4>
                                        <p className="portfolio__desc">In a rapidly evolving business landscape, staying ahead requires innovative thinking. At ApexStrive Global LLP, we continuously explore new technologies and methodologies to enhance our services and provide you with cutting-edge solutions. Our commitment to innovation ensures that you receive the most effective and efficient support available.</p>

                                    </div>
                                </div>

                            </div>







                        </div>
                    </div>
                </section>




                <section className="services-layout2 services-carousel pt-130 bg-gray">
                    <div className="container">
                        <div className="row heading mb-40">
                            <div className="col-lg-12">
                                <div className="d-flex align-items-center">
                                    <div className="divider divider-primary mr-30"></div>
                                    <h2 className="heading__subtitle mb-0">Expert Services for Your Business Needs</h2>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <h3 className="heading__title">
                                    Services we offer
                                </h3>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <p className="heading__desc">
                                    At ApexStrive Global LLP, our accounting services are designed to provide you with accurate, timely, and insightful financial information. From bookkeeping to financial reporting, we ensure that every transaction is meticulously recorded and every financial statement reflects the true health of your business.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <div className="service__content">
                                        <div className="service__icon">
                                            <Image src={accountsImg} alt="services-img" />
                                        </div>
                                        <h4 className="service__title">
                                            Accounting
                                        </h4>
                                        <p className="service__desc">
                                            Our accounting services provide a solid foundation for your financial success. We deliver accurate, comprehensive financial records that give you the clarity needed to make informed decisions. Trust us to keep your finances organized and compliant.
                                        </p>
                                        <ul className="list-items list-unstyled mb-30">
                                            <li>Bookkeeping</li>
                                            <li> Financial Reporting</li>
                                            <li> Payroll Services</li>
                                            <li>Financial Planning</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <div className="service__content">
                                        <div className="service__icon">
                                            <Image src={auditImg} alt="services-img" />
                                        </div>
                                        <h4 className="service__title">
                                            Auditing

                                        </h4>
                                        <p className="service__desc">
                                            With our auditing services, we ensure that your financial practices are transparent and compliant. We conduct thorough audits that not only meet regulatory standards but also enhance the integrity of your financial operations.
                                        </p>
                                        <ul className="list-items list-unstyled mb-30">
                                            <li>Internal Audits</li>
                                            <li>External Audits</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="service-item">
                                    <div className="service__content">
                                        <div className="service__icon">
                                            <Image src={taxationImg} alt="services-img" />
                                        </div>
                                        <h4 className="service__title">
                                            Taxation
                                        </h4>
                                        <p className="service__desc">
                                            Our taxation services are designed to optimize your tax position while ensuring full compliance with all legal obligations. We work closely with you to develop strategies that minimize tax liabilities and align with your business goals.
                                        </p>
                                        <ul className="list-items list-unstyled mb-30">
                                            <li>Tax Planning</li>
                                            <li>Tax Compliance</li>
                                            <li>Tax Advisory</li>
                                            <li>International Taxation</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-12 btn-wrapper">
                                <Link
                                    href="/services"
                                    className="btn btn__secondary btn__bordered btn__icon"
                                >
                                    <span>Explore All Service</span>
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="banner-layout1 pt-90 pb-90 bg-overlay ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 col-inner d-flex flex-column justify-content-between">
                                <div className="heading heading-dark">
                                    <h3 className="heading__title mb-30">Get in Touch with Us</h3>
                                    <p className="heading__desc mb-30" style={{ fontSize: "20px" }}>
                                        At ApexStrive Global LLP, we&apos;re here to help you navigate your financial journey with confidence and ease. Whether you have a question about our services, need expert advice, or want to schedule a consultation, our team is ready to assist you.


                                    </p>
                                    <p className="heading__desc mb-30" style={{ fontSize: "20px" }}>
                                        <strong>Reach out to Us: </strong><br />

                                        <strong>Phone:</strong> <br />+91 9426303628 <br />+91 9638443800 <br />+91 9099065361<br />
                                        <strong>Email:</strong> connect@apexstriveglobal.com<br />
                                        <strong>Address:</strong> 02, S.F., Camps Corner-1, Nr. Paras Bungalows, 100 Ft Road, Satellite, Ahmedabad, Gujarat, India - 380015<br />
                                    </p>

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                <div className="contact-panel">
                                    <div className="contact-panel__form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="contact-panel__title mb-20">
                                                    Contact Us
                                                </h4>

                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={formData.name}
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={formData.email}
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <select
                                                        className="form-control"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="General">General</option>
                                                        <option value="Customer Service">Customer Service</option>
                                                        <option value="Careers">Careers</option>
                                                        <option value="Media">Media</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Contact Number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        required
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                            </div>


                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Message"
                                                        name="message"
                                                        value={formData.message}
                                                        required
                                                        onChange={handleChange}

                                                    ></textarea>
                                                </div>

                                                <button onClick={onSubmit}
                                                    disabled={isLoading}
                                                    style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                                                    type="submit" className="btn btn__primary btn__xl btn__block">
                                                    {isLoading ? 'Sending...' : 'Submit'}
                                                </button>


                                                <div className="contact-result">
                                                    <p>{message}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default HomePage;
