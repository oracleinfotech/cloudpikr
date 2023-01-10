import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>What We Do</h2>
					<div className="bar"></div>
					 
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-what-we-do-box">
							<div className="icon">
                                <i className="flaticon-monitor"></i>
                            </div>
                            <h3>
                                <Link href="/cloud-consulting">
                                    <a>Cloud Consulting</a>
                                </Link>
                            </h3>
                            <p>Consultations for the C-suite  define the skills and trainings required for the project's success, if you choose the right cloud services.</p>

                            <Link href="/cloud-consulting">
                                <a className="read-more-btn">
                                    <Icon.ArrowRight /> Read More
                                </a>
                            </Link>
						</div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-what-we-do-box">
							<div className="icon">
                                <i className="flaticon-idea"></i>
                            </div>
                            
                            <h3>
                                <Link href="/cloud-migration">
                                    <a>Cloud Migration</a>
                                </Link>
                            </h3>

                            <p>Cloud migration is the process of moving a company’s digital means, services, databases, IT resources, Cloud migration is also about moving from to another.</p> 
                            <Link href="/cloud-migration">
                                <a className="read-more-btn">
                                    <Icon.ArrowRight /> Read More
                                </a>
                            </Link>
						</div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-what-we-do-box">
							<div className="icon">
                                <i className="flaticon-software"></i>
                            </div>
                            <h3>
                                <Link href="/cloud-security-and-compliance">
                                    <a>Cloud Security</a>
                                </Link>
                            </h3>
                            <p>Public, Private, Hybrid & Multi  Clould Consulting Services :- Enjoy the ease of use and maintenance, flexible pricing, and near-unlimited scalability.</p>

                            <Link href="/cloud-security-and-compliance">
                                <a className="read-more-btn">
                                    <Icon.ArrowRight /> Read More
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default WhatWeDo;  