import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Services = () => {
    return (
        <div className="bigdata-services-area ptb-80 bg-eef6fd">
            <div className="container">
                <div className="section-title">
                    <h2>Services We Can Help You With</h2>
					<div className="bar"></div>
                    <p>Whether you’re a client or a candidate, our service goes beyond simply filling vacancies. We connect professionals across functions.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-advisory-service">
                                    <a>Cloud Advisory Service</a>
                                </Link>
                            </h3>
                            <p>Cloud has changed the way many organizations operate, both allowing for and forcing rapid innovation for IT teams.   </p>
                            
                            <Link href="/cloud-advisory-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/secure-design-architecture-service">
                                    <a>Secure Design Architecture Service</a>
                                </Link>
                            </h3>
                            <p>As part of the engagement, our security architect meets with the CISO team and understands overall objectives.</p>
                            
                            <Link href="/secure-design-architecture-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/cloud-governance-design-service">
                                    <a>Cloud Governance Design &  Implementation Services</a>
                                </Link>
                            </h3>
                            <p>This service is designed to help you set up operational practices around key areas such as Monitoring.</p>
                            
                            <Link href="/cloud-governance-design-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/security-risk-assessment-service">
                                    <a>Security/Risk Assessment Service</a>
                                </Link>
                            </h3>
                            <p>The purpose of this engagement is to make sure we protect the cloud tenancy from pre-existing conditions or vulnerabilities. </p>
                            
                            <Link href="/security-risk-assessment-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/iac-devops-integration-service">
                                    <a>IAC & DevOps Integration/Implementation Service</a>
                                </Link>
                            </h3>
                            <p>We leverage a  structured customer engagement methodology centered around detailed discovery and design workshops.</p>
                            
                            <Link href="/iac-devops-integration-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/compliance-evaluation-service">
                                    <a>Compliance(PCI/DSS, HIPAA, NIST, etc) Evaluation & Implementation Service</a>
                                </Link>
                            </h3>
                            <p>We help you assess requirements around compliance and design a solution that best fits the needed controls around the application</p>
                            
                            <Link href="/compliance-evaluation-service">
                                <a className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;  