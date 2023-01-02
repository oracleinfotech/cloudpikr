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

            <PageBanner pageTitle="IAC & DevOps Integration/Implementation Service" />

            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>IAC & DevOps Integration/Implementation Service</h3>
                                <p>
                                 We leverage a  structured customer engagement methodology centered around detailed discovery and design workshops, and a standardized design deliverable and automation that produces the terraform provisioning code directly based on the agreed design. That TF code we produce for deploying your cloud tenancy can then be leveraged as Cloud Resource Manager stacks, or integrated with existing customer CI/CD frameworks and pipelines. We develop  Dev/Sec/Ops practices, processes, and Reusable assets with automation capabilities for industry standard use cases leveraging Cloud native tooling or platform provided by cloud vendors, we also help with standard open source tools such as Jenkins, Hashicorp, and git as part of the engagement. The idea behind this engagement is to not just leave the code but also set up processes and workflow in place so that a cloud tenancy can be managed well with ongoing changes in tenancy.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/bigdata-analytics/iac-devops-integration-service.png"
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