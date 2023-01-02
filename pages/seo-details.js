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

            <PageBanner pageTitle="SEO & SMO" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Search Engine Optimization</h3>
                                <p>
                                    Research your competitors, find traffic-driving keywords, build quality backlinks & more. Competitor analysis, keyword research, link building, rank tracking, on-page & tech SEO.
                                </p>
                                <p>
                                    The SEO process includes six general phases: <br />
                                    Research, including business research, competitor analysis, current state assessment, and keyword searching. Planning and strategy, including decisions on how to handle content, build links to the website, manage social media presence and technical implementation strategies.
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
                                <h3>Social Media Optimization</h3>
                                <p>
                                    Social media optimization (SMO) is the use of social media networks to manage and grow an organization’s message and online presence. As a digital marketing strategy, social media optimization can be used to increase awareness of new products and services, connect with customers, and mitigate potential damaging news.
                                    <ul>
                                        <li>
                                            Social media optimization (SMO) involves using social media platforms to grow a company or organization’s online presence.
                                        </li>
                                        <li>It can increase awareness of new products and services and allow organizations to connect with customers.</li>
                                        <li>Popular social media platforms such as Facebook, Twitter, Instagram, Linkedin, YouTube, Snapchat, and Pinterest can be used for digital marketing.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DigitalMarketingDetails;