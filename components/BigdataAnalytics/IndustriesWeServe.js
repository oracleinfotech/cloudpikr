import React from 'react';
import Link from 'next/link';

const IndustriesWeServe = () => {
    return (
        <div className="industries-serve-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Industries We Serve</h2>
					<div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>  
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-buildings'></i>
                            </div>
                            AWS Cloud Migration
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-building-house'></i>
                            </div>
                            Cloud SIEM Migration
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-car'></i>
                            </div>
                            QRadar Setup
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-credit-card'></i>
                            </div>
                            Google Cloud Solution
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-building'></i>
                            </div>
                            Oracle Cloud Migration
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bxs-plane-alt'></i>
                            </div>
                            Database Solution
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-group'></i>
                            </div>
                            Automation of Industries
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6 col-md-4">
                        <div className="single-industries-serve-box">
                            <div className="icon">
                                <i className='bx bx-bitcoin'></i>
                            </div>
                            Banking & Insurance
                            <Link href="/service-details">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-shape2">
                <img src="/images/bigdata-analytics/vector.png" alt="image" />
            </div>
        </div>
    )
}

export default IndustriesWeServe;  