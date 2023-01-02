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

            <PageBanner pageTitle="Cloud Governance Design &  Implementation Services" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Cloud Governance Design &  Implementation Services</h3>
                                <p>
                                This service is designed to help you set up operational practices around key areas such as Monitoring and alerting, the configuration of logging and SIEM tool integration, setting up cost governance & chargeback strategies, design & implementation of CMDB, Incident management & Notifications, Configuration Management and asset tracking, IAM and Federation Configuration, Cloud Security Posture Management(CSPM) implementation or integration, Database monitoring using cloud-native technologies. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/cloud-governance-design-service.png"
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