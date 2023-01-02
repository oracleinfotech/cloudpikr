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
import OurServices from '@/components/IOT/OurServices';
 
const DigitalMarketingDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Digital Marketing" />

            
            <div className="services-details-area pt-150">
                <div className="container">
                    <div className="row align-items-center" id="social-media">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Social Media Management</h3>
                                <p>
                                We work with companies looking for social media management services, advice on content strategies and posting assistance to ensure their social media accounts are used to help drive business.
                                </p>

                                <p>
                                There is a big difference between having a social media account and using it with purpose and focus. Helping you outline your goals, determine who your key audiences are, and how your social media accounts can be used to form new connections with them is how we assist.
                                </p>

                                <p>
                                Our social media management services vary with each business and each new engagement. But consistent among those engagements is a focused approach to using a combination of community, culture, and commerce posts to help you create more connections, interactions, and inquiries.  
                                </p>

                                <p>
                                Our Social Media & Digital Management Package Includes:
                                    <ul>
                                        <li>Digital Strategy Review & Recommendations</li>
                                        <li>Social Media Management Services</li>
                                        <li>Digital Campaign Creation & Monthly Reporting</li>
                                        <li>Website Content & Functionality Audit</li>
                                        <li>Google Business Optimization</li>
                                        <li>SEO Audit</li>
                                        <li>Monthly Key Metric Reporting</li>
                                        <li>Website Keyword Plan / Landing Page</li>
                                        <li>Creation of 1 Blog Posts / Month</li>
                                        <li>Email List Management</li>
                                        <li>Social Media Playbook</li>
                                        <li>Creation of 4 Social Posts / Month</li>
                                    </ul>
                                Our programs can be customized to fit your specific needs and goals
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/custom-download/social-media.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center" id="linkedin">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/custom-download/linkedin-tile.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Linkedin Management</h3>
                                <p>
                                    <ul>
                                       <li>Reach up-to 9th connection data & connection even without connecting with them.</li>
                                       <li>Organic Generate leads, drive website traffic, and build brand awareness World Wide.</li>
                                       <li>Target professionals by job title, function, industry, and more with 2x higher engagement.</li>
                                       <li>Bridge the gaps between Paid Media and Business Assets. I undertake Data Synced in one place, Automate Workflow & save time.</li>
                                       <li>Increase brand awareness by setting up Follow up tools, and engagements with connections.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>
                    
                    <div className="row align-items-center" id="content">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Content Management</h3>
                                <p>
                                Anything that CLICKS your brain, SWIPES your mind and engages INTERACTION is Interactive Content in the world of Digital Marketing. It creates an immersive experience for the target users, capturing their attention span and getting the desired results.
                                </p>

                                <p>
                                Interactive Infographics, 360-degree videos, quizzes, polls and surveys, calculator widgets, assessments, white papers/e-books, interactive emails, user generated contents/product recommendations, contests, games, augmented reality, etc. are some of the examples of interactive content widely used among marketers today.
                                </p>

                                <p>
                                Interactive content is more appealing and engaging, easier to understand, more personalized, helps in collecting data on user preferences, expanding brand loyalty, etc. It is versatile, effective and most importantly it creates a sense of enjoyment for the users, as people want to interact with brands, not just read about them. 
                                </p>

                                <p>
                                Differentiate your brand from others and improve your business dynamics through interactive content marketing.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/custom-download/content-mng.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                            {/* <a href="https://www.freepik.com/vectors/business">Business vector created by stories - www.freepik.com</a> */}
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center" id="performance">
                        <div className="col-lg-6 services-details-image">
                            <img 
                                src="/images/custom-download/table-analysis.jpg" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Performance Marketing</h3>
                                <p>
                                    For a customer, what’s a win-win situation? You have to pay ONLY if you get the desired results.
                                    Is that possible in a digital marketing business?
                                    Yes, it is… through <b>Performance Marketing</b>.
                                    As the name clearly suggests, its marketing based on performance.
                                </p>
                                <p>
                                The non-profit Performance Marketing Association defines it as “a comprehensive term that refers to online marketing and advertising programs in which advertisers (a.k.a., “retailers” or “merchants”) pay marketing companies (a.k.a., “affiliates” or “publishers”) when a specific action is completed; such as a sale, lead or click.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DigitalMarketingDetails;