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
                                <h3>Fully Managed Cloud Hosting</h3>
                                <p>We free you up to focus on your business!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                <img src="/images/backup.png" />
                                </div>
                                <h3>Cloud Simplified</h3>
                                <p>Secure, powerful and easily scalable</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                <img src="/images/enterprise.png" />
                                </div>
                                <h3>Implement Solution</h3>
                                <p>Fast, reliable and efficient storage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;  