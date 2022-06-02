import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import { FiMapPin, FiMail } from "react-icons/fi";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGofore } from "react-icons/fa";
import { Row, Col, Container } from 'react-bootstrap';
export default function Footer() {
    return (
        <div className='main2'>
            <section className='s1'>
                <Container>
                    <Row>
                        {/* <div className='sigma_info-warper style-26 mb-5'> */}
                        <Col className='ci1' lg={4}>

                            <div className='sigma_info style-26'>

                                <div className='sigma_info-title'>
                                    <FiMapPin />
                                </div>
                                <div className='sigma_info-description'>
                                    <p>Our Address</p>
                                    <p className='secondary-color'>Drive Chicago, IL 60607</p>
                                </div>

                            </div>
                        </Col>
                        <Col className='ci1' lg={4}>
                            <div className='sigma_info style-26'>

                                <div className='sigma_info-title'>
                                    <FaPhoneAlt />
                                </div>
                                <div className='sigma_info-description'>
                                    <p>Call Us</p>

                                    <p className='secondary-color'>360-779-2228</p>
                                </div>


                            </div>
                        </Col>
                        <Col className='ci1' lg={4}>
                            <div className='sigma_info style-26'>

                                <div className='sigma_info-title'>
                                    <FiMail />
                                </div>
                                <div className='sigma_info-description'>
                                    <p>Our Mail</p>
                                    <p className='secondary-color'>example@example.com</p>

                                </div>

                            </div>
                        </Col>

                        {/* </div> */}
                    </Row>
                </Container>
            </section>
            <section className='s2'>
                <Container>
                    <Row className='row42'>
                        <Col lg={4}>
                            {/* <div className='sigma_footer-widget'> */}
                                <div className='sigma_footer-logo mb-4'>
                                    <img className='mylogo1' src="../../../../Images/logo2.png" alt='logo' />
                                </div>
                            {/* </div> */}
                            <div className='pan'>

                                <p className='mb-0'>It is a long established fact that a reader will be distracted by the readable.</p>

                            </div>
                            <ul className='sigma_social-icon'>
                                <li>
                                    <FaFacebookF />
                                </li>
                                <li>
                                    <FaTwitter />
                                </li>
                                <li>
                                    <FaInstagram />
                                </li>
                                <li>
                                    <FaLinkedin />
                                </li>
                                <li>
                                    <FaGofore />
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} sm={3}>
                            <div className='but'>
                                <h5 className='widget-title'>Services</h5>
                                <ul className='siga_footer-link'>
                                    <li className='list'>Therapiya</li>
                                    <li className='list'>Dentistry</li>
                                    <li className='list'>Virusology</li>
                                    <li className='list'>Pharmocology</li>
                                    <li className='list'>Cardiology</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} sm={3}>
                            <div className='but'>
                                <h5 className='widget-title'>Useful Links</h5>
                                <ul className='siga_footer-link'>
                                    <li className='list'>Therapiya</li>
                                    <li className='list'>Home</li>
                                    <li className='list'>
                                        <a><Link to={"/aboutpage"}>About Us</Link></a>
                                    </li>
                                    <li className='list'>
                                        <a><Link to={"/contactpage"}>Contact Us</Link></a>
                                    </li>
                                    <li className='list'>News</li>
                                    <li className='list'>Doctor</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className='but'>
                                <h5 className='widget-title'>Subscribe</h5>
                                <form className='f2'>
                                    <input type='email' name='email' placeholder='Email Pleace' required />
                                    <buton type='button' name='btn' className='mt-3 btn-block'>SUBSCRIBE</buton>
                                    <p className='mb-0 mt-3'>Get The Latest Updates via email. Any time you may unsubscribe</p>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className='s3'>
                {/* <div className='container12'> */}
                    {/* <div className=''> */}
                        <div className='sigma_footer-copyright sigma_footer-bottom'>
                            <p className='p4'>© Website 2022 | All Rights Reserved</p>


                        </div>
                        <div className='unlink'>
                            <ul className='ullink'>
                                <li className='list1'>Privacy</li>
                                <li className='list1'>Terms</li>
                                <li className='list1'>Sitemap</li>
                                <li className='list1'>Help</li>
                            </ul>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}
