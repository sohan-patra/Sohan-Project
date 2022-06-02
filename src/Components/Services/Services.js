import React from 'react'
import './Services.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaStethoscope,FaVirus,FaResearchgate} from "react-icons/fa";
import { GiDoctorFace, GiHeartOrgan  } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";

export default function Services() {
  return (
    <div>
        <section className='s15'>
        <div className='container20'>
          <div className='sigma_subheader-inner'>
            <h1 className='hp1'>Services</h1>
          </div>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a className='btn-link'><Link to={"/"}>Home</Link></a>
            </li>
            <li className='breadcrumb-item active'>Services</li>
          </ol>
        </div>
      </section>
      <section className='s28'>
          <Container>
          <div className='section-title centered'>
                      
                        <h3 className='hb3'>Services for You</h3>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                    <FaStethoscope/>
                                </div>
                                <div class="sigma_service-body">
                                    <h5>Therapiya</h5>
                                    <p>VANA THERAPIYA PRIVATE LIMITED is a Private Company, who was incorporated 11 Year(s) 0 Month(s) 14 Day(s) ago on dated 06-May-2011 .</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                    <GiDoctorFace/>
                                </div>
                                <div class="sigma_service-body">
                                    <h5>Dentistry</h5>
                                    <p>dentistry, the profession concerned with the prevention and treatment of oral disease,</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                    <FaVirus/>
                                    
                                </div>
                                <div class="sigma_service-body">
                                    <h5>Virology</h5>
                                    <p>Virology is the scientific discipline concerned with the study of the biology of viruses and viral diseases, including the distribution,</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                   <MdLocalPharmacy/>
                                </div>
                                <div class="sigma_service-body">
                                    <h5>Pharmocology</h5>
                                    <p>Pharmacology is the science of how drugs act on biological systems and how the body responds to the drug.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                    <GiHeartOrgan/>
                                </div>
                                <div class="sigma_service-body">
                                    <h5>Cardiology</h5>
                                    <p>Cardiology is a medical specialty and a branch of internal medicine concerned with disorders of the heart.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                    <FaResearchgate/>
                                </div>
                                <div class="sigma_service-body">
                                    <h5>Researches</h5>
                                    <p>The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
          </Container>
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
            <section className='s8'>
                <Container>
                    <div className='section-title centered'>
                        <span className='subtitle'>Client Testimonials</span>
                        <h3 className='title'>What Our Clients Say</h3>
                    </div>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className='sigma_testimonial style 13 text-left bg-white'>
                                <div className='main'>
                                    <div className='sigma_testimonoial-thumb mr-4'>
                                        <img src='../../../../Images/doctor4.jpg' className='img11' />
                                        {/* <ImQuotesLeft/> */}
                                    </div>
                                    <div className='sigma_author-block'>
                                        <h5>Matthew Reyes</h5>
                                        <span className='sigma_testimonial-category'>Obstetrics & Gynaecology</span>
                                    </div>
                                </div>
                                <div className='sigma_testimoial-body'>
                                    <p className='mb-0'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className='sigma_testimonial style 13 text-left bg-white'>
                                <div className='main'>
                                    <div className='sigma_testimonoial-thumb mr-4'>
                                        <img src='../../../../Images/doctor2.jpg' className='img11' />
                                    </div>
                                    <div className='sigma_author-block'>
                                        <h5>Rebecca Gilbert</h5>
                                        <span className='sigma_testimonial-category'>Obstetrics & Gynaecology</span>

                                    </div>
                                </div>
                                <div className='sigma_testimoial-body'>
                                    <p className='mb-0'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    </div>
  )
}
