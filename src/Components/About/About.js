import React from 'react'
import './About.css'
import {Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import DoctorJson from '../Doctor/Doctor.json'
import { AiOutlineMonitor } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";

export default function About() {
  const Home2 = () => {
    let navigate = useNavigate();
    navigate('/')
  }
  return (
    <div>
      <section className='s15'>
        <div className='container20'>
          <div className='sigma_subheader-inner'>
            <h1 className='hp1'>About Us</h1>
          </div>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a className='btn-link'><Link to={"/"}>Home</Link></a>
            </li>
            <li className='breadcrumb-item active'>About Us</li>
          </ol>
        </div>
      </section>
      <section className='s16'>
        <Container>
          <Row>
            <Col lg={5}>
              <div className='section-title'>
                <p className='subtitle2'>Work Process</p>
                <h3 className='title'>How it Works?</h3>
              </div>
            </Col>
            <Col lg={4}>
              <p className='mb-0 para'>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis.</p>

            </Col>
            <Col lg={3}>
              <a className='sigma_btn mt-4 mt-lg-0'>MAKE APPOINTMENT</a>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6}>
              <div className='sigma_info style-25 d-block d-xl-flex'>
                <div className='sigma_info-title'>
                  <span className='sigma_info-icon'>
                   <AiOutlineMonitor/>
                  </span>
                </div>
                <div className='sigma_info-description mt-4 mt-xl-0'>
                  <h5 className='hp'>Search Best Online <br /> Professional</h5>
                  <p className='pb1'>It is a long established fact that a reader will be distracted by the readable.</p>
                  <span className='step'>Step 1</span>
                </div>

              </div>

            </Col>
            <Col lg={4} md={6}>
              <div className='sigma_info style-25 d-block d-xl-flex'>
                <div className='sigma_info-title'>
                  <span className='sigma_info-icon'>
                  <BsFillCalendarDateFill/>
                  </span>
                </div>
                <div className='sigma_info-description mt-4 mt-xl-0'>
                  <h5 className='hp'>Get Instant <br />Appointment</h5>
                  <p className='pb1'>It is a long established fact that a reader will be distracted by the readable.</p>
                  <span className='step'>Step 2</span>
                </div>

              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='sigma_info style-25 d-block d-xl-flex'>
                <div className='sigma_info-title'>
                  <span className='sigma_info-icon'>
                    <FcFeedback/>
                  </span>
                </div>
                <div className='sigma_info-description mt-4 mt-xl-0'>
                  <h5 className='hp'>Leave Your <br />Feedback</h5>
                  <p className='pb1'>It is a long established fact that a reader will be distracted by the readable.</p>
                  <span className='step'>Step 3</span>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='s17'>
        <Container className='con2'>
          <Row className='row40'>
            <Col className='col2' lg={5}>
              <div className='sigma_about style-21'>
                <div className='sec-title'>
                  <h3 className='title text-white'>Why Choose PATRA PHARMACY ?</h3>
                </div>
                <div className='sigma_about-content'>
                  <p className='pb2'>You cannot expect the pharmacist to give you too many options. Apollo Pharmacy is the solution to all these. We deliver the medicines to you without you having to step out or wait in the queue to buy medicines.</p>
                  <div className='sigma_info style-15'>
                    <div className='sigma_info-title'>
                      {/* <i className='sigma_info-icon flaticon-heartbeat'></i> */}
                    </div>
                    <div className='sigma_info-description'>
                      <h5 className='hp2'>Quality Control System</h5>
                      <p className='pb2'>Quality control (QC) is a process through which a business seeks to ensure that product quality is maintained or improved. Quality control requires the company to create an environment in which both management and employees strive for perfection.</p>
                    </div>
                  </div>
                  <div className='sigma_info style-15'>
                    <div className='sigma_info-title'>
                      {/* <i className='sigma_info-icon flaticon-group'></i> */}
                    </div>
                    <div className='sigma_info-description'>
                      <h5 className='hp2'>Highly Professional Staff</h5>
                      <p className='pb2'>Good and professional employees know their job roles inside and out. The most valuable employees understand more than just their jobs; they understand the industries in which their companies operate, the way in which their companies functions in big-picture terms and the way in which their individual job roles contribute to the success of their firms.</p>
                    </div>
                  </div>
                </div>
                

              </div>
            </Col>
            <Col lg={6}>
                  <div className='sigma_about style-21 mt-0 w-100 h-100'>
                    <div className='sigma_about-image-1'>
                      <img src='../../../../Images/banner2.jpg' className='img50'/>
                    </div>
                    <div className='sigma_about-image-2 d-none d-sm-block'>
                    <img src='../../../../Images/banner3.jpg' className='img51'/>
                    </div>
                  </div>
                </Col>
          </Row>
        </Container>
        <div className='sigma_counter-warper margin-negative bg-primary-1 style-5'>
          <Row className='row10'>
            <Col lg={3} md={4}>
              <div className='sigma_counter style-5'>
                <span>
                  <b className='counter'>3500</b>
                  <span className='plus'>+</span>
                </span>
                <p className='pb3'>Happy Customers</p>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className='sigma_counter style-5'>
                <span>
                  <b className='counter'>600</b>
                  <span className='plus'>+</span>
                </span>
                <p className='pb3'>Project Done</p>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className='sigma_counter style-5'>
                <span>
                  <b className='counter'>30</b>
                  <span className='plus'>+</span>
                </span>
                <p className='pb3'>Awards Win</p>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className='sigma_counter style-5'>
                <span>
                  <b className='counter'>675</b>
                  <span className='plus'>+</span>
                </span>
                <p className='pb3'>Clients Work</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className='s18'>
      <div className='mainsection1'>
                    <div className='min1'>
                        <h5 className='hb1'>Meet Our Team</h5>
                        <h1 className='hb2'>Our Creative Team</h1>
                    </div>
                    <div className='fetch1'>
                        <Row>
                            {
                                DoctorJson.Doctor.map((prod) => {
                                    return (
                                        <React.Fragment key={prod.doc_id}>
                                            <Col xs={12} md={2} lg={4}>
                                                <>
                                                    <img className='img30' src={prod.doc_img} />
                                                    <h2>{prod.doc_name}</h2>
                                                    <h3>{prod.doc_department}</h3>
                                                    <button className='bt12'>View Doctor's Details</button>
                                                </>
                                            </Col>

                                        </React.Fragment>
                                    )
                                })
                            }

                        </Row>
                    </div>
                </div>
      </section>
      <section className='s7'>
                <div className='container35'>
                    <Row>
                        <Col lg={2}>
                            <img src='../../../../Images/doctor2.jpg' className='img10' />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src='../../../../Images/doctor3.jpg' className='img10' />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src='../../../../Images/docmedicine.jpg' className='img10' />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src='../../../../Images/doccar.jpg' className='img10' />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src='../../../../Images/docuro.jpg' className='img10' />
                        </Col>
                        <Col xs={12} lg={2}>
                            <img src='../../../../Images/doctor1.png' className='img10' />
                        </Col>


                    </Row>
                </div>
            </section>
    </div>
  )
}
