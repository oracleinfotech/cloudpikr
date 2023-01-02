import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>Mail Here</h3>
                            <p><a href="mailto:info@gmail.com">info@moodleconsultancy.com</a></p>
                            <p style={{visibility:'hidden'}}><a href="mailto:info@gmail.com">info@moodleconsultancy.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Visit Here</h3>
                            <p>Electronic City, Bangalore, Karnataka - 06</p>
                            <p style={{visibility:'hidden'}}>Electronic City, Bangalore, Karnataka - 06</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p>Zalo: <a href onClick={e=> e.preventDefault()}>+ (84) 908 850 2643</a></p>
                            <p>Phone: <a href="tel:+91 8971987004">+ (91) 897 198 7004</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  