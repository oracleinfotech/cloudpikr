import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Services3 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Our Services" />

            <div className="solutions-area ptb-80">
                <div className="container">
                    <div className="row justify-content-start">
                        {/* <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                <img src="/images/services-image/icons/digital-learning.png" alt="image" />
                                {/* <a href="https://www.flaticon.com/free-icons/digital" title="digital icons">Digital icons created by Freepik - Flaticon</a> --*--/--}
                                </div>
                                <h3>
                                    <Link href="/digital-marketing-details">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </h3>
                                <p>{(`We provide a broad range of digital marketing services and solutions to help organizations facilitate change, achieve their vision and optimize performance and productivity.`).substring(0, 150) + `...`}</p>

                                <Link href="/digital-marketing-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/data.png" alt="image" />
                                    
                                </div>
                                <h3>
                                    <Link href="/data-science-details">
                                        <a>Data Science Consulting</a>
                                    </Link>
                                </h3>
                                <p>
                                    {(`Our Data Science capability building solutions prepare you for the challenges ahead with a focus an next gen skills and competencies, so that you move from just being a Data 'Management' Team to being a Data 'Science'Team.`).substring(0,150) + `...`}</p>

                                <Link href="/data-science-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/share.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/data" title="data icons">Data icons created by Kiranshastry - Flaticon</a> *--/}
                                </div>
                                <h3>
                                    <Link href="/social-stack-details">
                                        <a>Social Intelligence Stack</a>
                                    </Link>
                                </h3>
                                <p>{(`The Social Intelligence Stacks' for Digital Analytics helps us devise strategies that can create or strengthen an organisations Digital presence.`).substring(0,150) + `...`}</p>

                                <Link href="/social-stack-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/engineering.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/training" title="training icons">Training icons created by Pixel perfect - Flaticon</a> *--/}
                                </div>
                                <h3>
                                    <Link href="/industry-training-details">
                                        <a>Industry Training</a>
                                    </Link>
                                </h3>
                                <p>{`Backed by a team of experienced professionals, our strategic services meet the needs of all types and sizes of clients - from small startups to large firms - and deliver lasting changes with measurable growth.`.substring(0,150) + `...`}</p>

                                <Link href="/industry-training-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/executive.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/executive" title="executive icons">Executive icons created by Eucalyp - Flaticon</a> *--/}
                                </div>
                                <h3>
                                    <Link href="/executive-research-details">
                                        <a>Contingency & Executive Research</a>
                                    </Link>
                                </h3>
                                <p>{`Whether you’re a client or a candidate, our service goes beyond simply filling vacancies. We connect professionals across functions to organisations who offer rewarding career opportunities.`.substring(0,150) + `...`}</p>

                                <Link href="/executive-research-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                        
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/shopping.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/ecommerce" title="ecommerce icons">Ecommerce icons created by Freepik - Flaticon</a> */}
                                </div>
                                <h3 className='service-title'>
                                    <Link href="/ecommerce-details">
                                        <a>Ecommerce Management</a>
                                    </Link>
                                </h3>
                                <p>{`Whether you’re a client or a candidate, our service goes beyond simply filling vacancies. We connect professionals across functions to organisations who offer rewarding career opportunities.`.substring(0,150) + `...`}</p>

                                <Link href="/ecommerce-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/seo.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/search-engine-optimization" title="search engine optimization icons">Search engine optimization icons created by Eucalyp - Flaticon</a> */}
                                </div>
                                <h3 className='service-title'>
                                    <Link href="/seo-details">
                                        <a>Search Engine Optimization</a>
                                    </Link>
                                </h3>
                                <p>{`Whether you’re a client or a candidate, our service goes beyond simply filling vacancies. We connect professionals across functions to organisations who offer rewarding career opportunities.`.substring(0,150) + `...`}</p>

                                <Link href="/seo-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/development.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/mobile-app" title="mobile app icons">Mobile app icons created by Freepik - Flaticon</a> */}
                                </div>
                                <h3 className='service-title'>
                                    <Link href="/dev-details">
                                        <a>Website & Mobile App Development</a>
                                    </Link>
                                </h3>
                                <p>{`Whether you’re a client or a candidate, our service goes beyond simply filling vacancies. We connect professionals across functions to organisations who offer rewarding career opportunities.`.substring(0,150) + `...`}</p>

                                <Link href="/dev-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/services-image/icons/coding.png" alt="image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by surang - Flaticon</a> */}
                                </div>
                                <h3 className='service-title'>
                                    <Link href="/software-dev-details">
                                        <a>Software Development</a>
                                    </Link>
                                </h3>
                                <p>{`Whether you’re a client or a candidate, our service goes beyond simply filling vacancies. We connect professionals across functions to organisations who offer rewarding career opportunities.`.substring(0,150) + `...`}</p>

                                <Link href="/software-dev-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/icon7.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Analysts</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/icon5.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Health & Manufacturing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box s3-ht-350">
                                <div className="icon">
                                    <img src="/images/icon4.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Software Engineers</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div> */}
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
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Services3;