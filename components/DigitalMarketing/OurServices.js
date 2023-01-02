import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <div className="iot-services-area pt-80 pb-50">
            <div className="container justify-content-center">
                <div className="section-title">
                    <h2>Our Featured Services that We Provide</h2>
                    <div className="bar"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <a><Icon.Globe /></a>
                            </div>

                            <h3>Social Media Management</h3>
                            <p>{`We work with companies looking for social media management services, advice on content strategies and posting assistance to ensure their social media accounts are used to help drive business.`.substring(0,150)+`...`}</p>
                            {/* <a href='https://www.freepik.com/photos/logo'>Logo photo created by freepik - www.freepik.com</a> */}
                            <Link href="/digital-marketing-details/#social-media">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg7">
                            <div className="icon">
                                {/* <i className="flaticon-car-insurance"></i> */}
                                <Icon.Linkedin />
                            </div>

                            <h3>LinkedIn Management</h3>
                            <p>{`Reach up-to 9th connection data & connection even without connecting with them.Organic Generate leads, drive website traffic, and build brand awareness World Wide.`.substring(0,150)+`...`}</p>
                            {/* <a href='https://www.freepik.com/photos/background'>Background photo created by rawpixel.com - www.freepik.com</a> */}
                            <Link href="/digital-marketing-details/#linkedin">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg8">
                            <div className="icon">
                               <a><Icon.FileText /></a>
                            </div>

                            <h3>Content Management</h3>
                            <p>{`Anything that CLICKS your brain, SWIPES your mind and engages INTERACTION is Interactive Content in the world of Digital Marketing. It creates an immersive experience for the target users, capturing their attention span and getting the desired results.`.substring(0,150)+`...`}</p>
                            {/* <a href='https://www.freepik.com/photos/background'>Background photo created by rawpixel.com - www.freepik.com</a> */}
                            
                            <Link href="/digital-marketing-details/#content">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg9">
                            <div className="icon">
                                <a><Icon.Activity /></a>
                            </div>

                            <h3>Performance Marketing</h3>
                            <p>{`For a customer, what’s a win-win situation? You have to pay ONLY if you get the desired results. Is that possible in a digital marketing business? Yes, it is… through Performance Marketing. As the name clearly suggests, its marketing based on performance.`.substring(0,150)+`...`}</p>
                            
                            <Link href="/digital-marketing-details/#performance">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-skyline"></i>
                            </div>

                            <h3>Social Media Management</h3>
                            <p>{`We work with companies looking for social media management services, advice on content strategies and posting assistance to ensure their social media accounts are used to help drive business.`.substring(0,150)+`...`}</p>
                            {/* <a href='https://www.freepik.com/photos/logo'>Logo photo created by freepik - www.freepik.com</a> */}
                            <Link href="/digital-marketing-details/#social-media">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg7">
                            <div className="icon">
                                <i className="flaticon-car-insurance"></i>
                            </div>

                            <h3>LinkedIn Management</h3>
                            <p>{`Reach up-to 9th connection data & connection even without connecting with them.Organic Generate leads, drive website traffic, and build brand awareness World Wide.`.substring(0,150)+`...`}</p>
                            {/* <a href='https://www.freepik.com/photos/background'>Background photo created by rawpixel.com - www.freepik.com</a> */}
                            <Link href="/digital-marketing-details/#linkedin">
                                <a><Icon.ArrowRight /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
