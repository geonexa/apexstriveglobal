"use client"
import React, { useEffect, useState } from 'react'
import backgroundImg from "../../public/images/contact/1.jpg"

import MainNavbar from '@/components/MainNavbar'

import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'


const ContactPage = () => {
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
                <meta name="description" content="Contact Us: Contact us today to discover how we can assist you in achieving your financial goals and driving your success." />
                <meta name="keywords" content="ApexStrive, accounting, auditing, taxation, financial services, tax planning, financial clarity, business solutions, compliance, financial management" />
                <meta name="author" content="ApexStrive Global LLP" />
                <meta name="copyright" content="ApexStrive Global Accounting LLP" />
                <meta name="robots" content="follow" />
                <title>Contact Us |  ApexStrive Global Accounting LLP </title>
            </Head>




            <div className='wrapper'>
                <MainNavbar />
                <PageHeader
                    title="Contact Us"
                    description="Your Queries, Our Priority" />






                <section className="contact-layout1 pb-60">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-4  mb-3">
                                <div className="contact-form">
                                    <p className="contact-info__desc">
                                        Whether you&apos;re a growing business seeking reliable accounting support, a corporation in need of thorough auditing, or an individual looking for expert tax advice, ApexStrive Global LLP is here to help. Contact us today to discover how we can assist you in achieving your financial goals and driving your success.
                                    </p>

                                    <ul className="contact__info-list list-unstyled mb-30">
                                        <li className="mb-0"><strong>Mobile:</strong><br />
                                            +91 9426303628 <br />+91 9638443800 <br />+91 9099065361</li><br />
                                        <li className="mb-0"><strong>Email:</strong> connect@apexstriveglobal.com</li><br />
                                        <li className="mb-20"><strong>Address:</strong> 02, S.F., Camps Corner-1, Nr. Paras Bungalows, 100 Ft Road, Satellite, Ahmedabad, Gujarat, India - 380015</li>
                                        {/* <li>Mon-Fri: 8am – 7pm</li> */}
                                    </ul>
                                    {/* <a href="contact-us.html" className="btn btn__primary btn__icon">
                                        <span>Get Started</span>
                                        <i className="icon-arrow-right"></i>
                                    </a> */}
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-8 mb-3">
                                <div className="contact-form">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h4 className="contact-panel__title">Get In Touch</h4>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text" className="form-control"
                                                    name='name'
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    required
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Contact Number" name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-20">
                                                <textarea className="form-control" placeholder="Message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange} required></textarea>
                                            </div>

                                            <button onClick={onSubmit}
                                                disabled={isLoading}
                                                style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                                                type="submit" className="btn btn__primary btn__xhight mt-10">
                                                {isLoading ? 'Sending...' : 'Send Message'}  </button>


                                            <div className="contact-result">
                                                <p>{message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>









                        </div>
                    </div>
                </section>


                <section className="google-map py-0">
                    <div id="map" className="height-500">


                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.261166450719!2d72.5074032!3d23.0121929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b002b251f4d%3A0xbd3aebecc2d6b859!2sApexstrive%20Global%20accounting%20LLP!5e0!3m2!1sen!2sin!4v1724759500292!5m2!1sen!2sin" style={{ border: "none", width: "100%", height: "100%" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    {/* <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-info-box mb-0">
                                    <h4 className="contact__info-box-title">Quick Contacts</h4>
                                    <ul className="contact__info-list list-unstyled mb-30">
                                        <li className="mb-20">Campus Corner 1, 100 Feet Anand Nagar Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015</li>
                                        <li className="mb-0">Email: <a href="mailto:connect@apexstriveglobal.com">connect@apexstriveglobal.com</a></li>
                                        <li className="mb-0">Mobile: <a href="mailto:connect@apexstriveglobal.com">+91 9999999999</a></li>
                                  
                                    </ul>
                                    <a href="contact-us.html" className="btn btn__primary btn__icon">
                                        <span>Get Started</span>
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>






                {/* <section className="contact-layout2 pt-0 pb-80">
        <div className="container">
          <div className="row">

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">London Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>Email: <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a></li>
                  <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                  <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                  <li>Hours: Mon-Fri: 8am – 7pm</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">Berlin Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>Email: <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a></li>
                  <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                  <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                  <li>Hours: Mon-Fri: 8am – 7pm</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">Manchester Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>Email: <a href="mailto:smartdata@7oroof.com">SmartData@7oroof.com</a></li>
                  <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                  <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                  <li>Hours: Mon-Fri: 8am – 7pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}


                <Footer />

            </div>
        </>

    )
}

export default ContactPage