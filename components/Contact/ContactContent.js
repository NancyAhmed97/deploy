import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <>
                <section className="contact-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">Contact Us</span>
                                    <h2>Say Hello</h2>
                                    <p>Your email address will not be published. We promise not to spam!</p>
                                </div>

                                <div className="contact-info">
                                    <ul className="contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-location"></i>
                                            </div>
                                            <span>Address</span>
                                            CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-email"></i>
                                            </div>
                                            <span>Email</span>
                                            tuam@email.com <br />
                                            fax@email.com
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <span>Phone</span>
                                            +44 587 154756 <br />
                                            +55 5555 14574
                                        </li>
                                    </ul>

                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">Have a Question?</span>
                                    <h2>Send a Message</h2>
                                    <p>Your email address will not be published. We promise not to spam!</p>
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default ContactContent;