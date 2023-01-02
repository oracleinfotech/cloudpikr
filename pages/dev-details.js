import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const DigitalMarketingDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Website & Mobile Application Developemnt" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Website Development Services</h3>
                                <p>
                                    Through our exceptional services, we aim to put life into your ideas. We’re backed up by a team of expert developers who believe in providing tailor-made solutions to suit even complex business requirements.
                                </p>
                                <p>
                                    <ul>
                                        <li>Corporate Website Development</li>
                                        <li>eCommerce Web Development</li>
                                        <li>Web Portal Development</li>
                                        <li>CMS Development</li>
                                        <li>Custom Full Stack Development</li>
                                        <li>Enterprise Solutions</li>
                                        <li>API/Web Services</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/services-details-image/services-details1.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/services-details-image/services-details2.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Ecommerce Website Services</h3>
                                <p>
                                    Getting an eCommerce website developed can be someone’s dream idea that would have surfaced after putting in so many thoughts. We try to understand your purpose, aim and idea so that we could put it into reality while also keeping in mind factors that are crucial for such businesses like increased traffic, high retention & ROI. Want to know how? Below are the details of the services we provide.
                                </p>
                                <p>
                                    <ul>
                                        <li>Store Development</li>

                                        <li>UI/UX Design</li>

                                        <li>Custom Web Development</li>

                                        <li>Third Party Integration</li>

                                        <li>Payment & Shipping Integration</li>

                                        <li>Speed Optimization</li>

                                        <li>Mobile App Development</li>

                                        <li>Infrastructure & DevOps Consulting</li>

                                        <li>Support & Maintenance</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Mobile App Builder</h3>
                                <p>
                                    Convert your dreams into reality with Tech9logy Creators. We will assist you by shaping it into an amazing mobile app and then providing it a space in the app store or on the web. Want to know how? Below are the details of the services we provide.
                                </p>
                                <p>
                                    <ul>
                                        <li>Strategy & Prototyping</li>

                                        <li>Wireframes & Mockups</li>

                                        <li>UI/UX Designing</li>

                                        <li>Development & Integration</li>

                                        <li>Debugging & Testing</li>

                                        <li>Analytics</li>

                                        <li>Mobile App Marketing</li>

                                        <li>Client Training</li>

                                        <li>Support & Maintenance</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/services-details-image/services-details1.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/services-details-image/services-details2.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Web Hosting Solutions</h3>
                                <p>
                                    MooDle Consultancy provides an excellent web hosting service that offers an array of powerful tools, including a terrific website builder, for bloggers and small businesses.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Web Maintenance Solution</h3>
                                <p>
                                    Website development is not a one-time task but an on-going process that needs timely updates to keep up with the latest technology & trends. However, this puts businessmen in the constant struggle of “how to focus on core business operations?”. At Tech9logy Creators, we completely understand your challenges & are there to back you up with our reliable website support & maintenance services.
                                </p>
                                <p>
                                    We aim to keep the clients’ websites secure, up-to-date & high-performing. All these boxes are checked by our dedicated team who possess the experience & expertise to work with all kinds of businesses including start-ups and Fortune 500 clients. You can talk to our consultants & they’ll walk you through our process and create a customized plan to suit your budget & requirement.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/services-details-image/services-details1.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DigitalMarketingDetails;