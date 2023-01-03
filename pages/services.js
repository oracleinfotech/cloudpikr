import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from '@/utils/ActiveLink';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
 
const ServiceDetails = () => {
    return (
        <>
            <Navbar/>
            <br/>
        <div className="ml-services-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Solutions</span>
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                    <p>We provide best web & app development services in Kolkata, India</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/web-design-and-development">
                                    <a>Web Design and Development</a>
                                </Link>
                            </h3>
                            <ul>
                            <li>Custom web Designing & Web Development,</li>
                            <li>E-Commerce Development,</li> 
                            <li>School ERP Portal, </li>
                            <li>Market Place Development </li>
                            <li>Jobs Portal Development.</li></ul>
                                 
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/mobile-application-development">
                                    <a>Mobile Application Development</a>
                                </Link>
                            </h3>
                            <li>Android Development </li>
                            <li>IOS Development </li>
                            <li>Hybrid Development </li>
                            <li>Apps Development </li>
                            <li>Gaming Apps Development </li>
                            <li>Windows Apps Development</li>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/ai-ml-development">
                                    <a>AI/ML Development</a>
                                </Link>
                            </h3>
                            <p>Uraninfotech has specialized and experienced developers, with experiences in skill sets like ML, RPA, NLP, BI, Analytics DL & Cognitive Computing etc. </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/voip-development">
                                    <a>VoIP Development</a>
                                </Link>
                            </h3>
                            <li>Voice Broadcasting Solution</li>
                            <li>Sms Broadcasting</li>
                            <li>Call Center Solution</li>
                            <li>IVR Solution Development</li>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/database-service">
                                    <a>Data Base as Service </a>
                                </Link>
                            </h3>
                            <li>BI & Analytics</li>
                            <li>Database Administration</li>
                            <li>Enterprise Performance Management</li>
                            <li>Application Performance Management</li>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-details-image/service-image6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/webhosting-services">
                                    <a>Web Hosting Services</a>
                                </Link>
                            </h3>
                            <li>Fast load time</li>
                            <li>Database</li>
                            <li>Emails</li>
                            <li>Security Features</li>
                            <li>Great Support</li>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    </>
    );
}

export default ServiceDetails;