import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import Link from 'next/link';
 
const Blog5 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Blog Posts" /> 

            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blogs/website-designing-services-blog">
                                        <a>
                                            <img src="/images/blog-image/moodle-blog2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">moodleconsultancy</a></li>
                                        <li>Jan 6, 2022</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blogs/website-designing-services-blog">
                                            <a>Website Designing <br /> Services</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blogs/website-designing-services-blog">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blogs/performance-marketing-blog">
                                        <a>
                                            <img src="/images/blog-image/moodle-blog3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">moodleconsultancy</a></li>
                                        <li>December 20, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blogs/performance-marketing-blog">
                                            <a>Performance Marketing – A Win-Win Solution for Everyone</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blogs/performance-marketing-blog">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blogs/digital-marketing-blog">
                                        <a>
                                            <img src="/images/blog-image/moodle-blog1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">moodleconsultancy</a></li>
                                        <li>October 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blogs/digital-marketing-blog">
                                            <a>Best Digital Marketing Company in India</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blogs/digital-marketing-blog">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blogs/storytelling-blog">
                                        <a>
                                            <img src="/images/blog-image/moodle-blog4.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">moodleconsultancy</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blogs/storytelling-blog">
                                            <a>"STORY = SALE"​ - A Tale Of BRAND STORYtelling !!!</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog/storytelling-blog">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blogs/pandemic-era-blog">
                                        <a>
                                            <img src="/images/blog-image/moodle-blog5.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">moodleconsultancy</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blogs/pandemic-era-blog">
                                            <a>Digital Marketing during the Pandemic ERA !!!</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blogs/pandemic-era-blog">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pagination */}
                        {/* <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                    
                                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                        
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Shape Images */}
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
    )
}

export default Blog5;