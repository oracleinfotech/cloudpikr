import React from 'react';
import NavbarStyleFourOne from "@/components/_App/NavbarStyleFourOne";
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
            <NavbarStyleFourOne />

            <PageBanner pageTitle="Secure Design Architecture Service" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Secure Design Architecture Service</h3>
                                <p>
                                As part of the engagement, our security architect meets with the CISO team and understands overall objectives in and around a secure deployment of production or non-production workloads to the cloud, and delivers to them innovative cloud security engagements and programs that standardize and accelerate the adoption of public or private cloud.  In this cloud journey, we work closely with the security team & CISO organization to help transform and reimagine their security against recommended cybersecurity frameworks and regulations. While we have established several years of practices with several cloud vendors and on-premise deployments, we standardize and advise on a secure architecture based on customer needs. We make sure customers understand the importance of secure cloud deployment against cybersecurity industry-standard certification criteria and make sure these are followed during design discussions. The purpose of the engagement is to deliver required artifacts and Secure design documentation factoring a secure and maintainable environment adhering to industry best practices around Network, Hosts, databases, perimeter, applications, and required governance such as inspecting network traffic, centralizing log collection, monitoring, alerting, change and configuration tracking, encryption, key management identity, and access controls, etc. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/secure-design-architecture-service.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div> 

                </div>
            </div>

            <Footer />
        </>
    );
};

export default DigitalMarketingDetails;