import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const MainBanner = () => {
    return (
        <div className="bigdata-analytics-banner">
            <div className="container">
                <div className="bigdata-analytics-content">
                    <h1>Cloud Computing & Hosting Services</h1>
                    <p>Flexible Cloud Computing | Tailored-made Cloud for applications
                        We offer you cloud hosting solutions with choices of OS, 
                        applications and scalability over your public cloud.</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Get Started</a>
                    </Link>
                </div>
            </div>

            <div className="banner-boxes-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                     <img src="/images/cloud.png" />
                                </div>
                                <h3>Fully Managed Cloud Services</h3>
                                <p>We provide all cloud solution</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                <img src="/images/backup.png" />
                                </div>
                                <h3>Cloud Security & audit</h3>
                                <p>Leader in QRadar and SIEM</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                <img src="/images/enterprise.png" />
                                </div>
                                <h3>Cloud Consulting</h3>
                                <p>Solution for all cloud migration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;  