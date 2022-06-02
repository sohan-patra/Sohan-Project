import React from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
import HomeJson from '../Shop/Homemap.json'
import Doctorjson from '../Doctor/Doctor.json'
import { FaArrowRight, FaStethoscope,FaVirus,FaResearchgate} from "react-icons/fa";
import { GiDoctorFace, GiHeartOrgan  } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";



export default function Home() {
    // let prod=ProductJson.Product.find((x)=>x.prod_name === data.prodname);
    // console.log("Product :",prod);
    // <script src="https://kit.fontawesome.com/285b92cd61.js" crossorigin="anonymous"></script>

    return (
        <div>
            <section className='s1'>

                {/* <img src='../../../../Images/tr.png' className='tr' alt='img' />
            <img src='../../../../Images/br.png' className='br' alt='img' />
            <img src='../../../../Images/bl.png' className='bl' alt='img' /> */}
                <div className='sigmeband'>

                    <div className='container1'>
                        {/*  alt='img' /> */}
                        {/* <img src='../../../../Images/banner1.jpg' className='br' */}
                        <Row className='r1'>
                            <Col xs={12} lg={6} className='c1'>
                                <h5 className='m1'>Markets And Resourses</h5>
                                <h1 className='m2'>Find The Best Doctor near By You</h1>
                                <button><Link to={"/aboutpage"}>GET A QUOTE</Link><FaArrowRight /></button>

                            </Col>
                            <Col xs={12} lg={6} className='c2'>
                                <img src='../../../../Images/doctor2.jpg' className='img1' />


                            </Col>
                        </Row>
                    </div>

                </div>
            </section>
            <section className='s1'>
                <div className='sigma1'>
                    <div className='container2'>
                        <div className='sigma_service-wrapper style-18 margin-negative'>
                            <div class="section-title flex-title">
                                <h3 class="title mb-0">Praesent tempor dictum tellus ut molestie</h3>
                                <a class="sigma_btn mt-3 mt-sm-0"><Link to={"/contactpage"}>Get a Quote</Link><FaArrowRight /></a>
                                    
                                   
                                
                            </div>

                        </div>
                        <Row className='row45'>
                            <Col lg={4} md={6}>
                                <div class="sigma_service style-18">
                                    <div class="sigma_service-thumb">
                                        <FaStethoscope />
                                        {/* <i class="flaticon-stethoscope"></i> */}
                                    </div>
                                    <div class="sigma_service-body">
                                        <h5>Therapiya</h5>
                                        <p>VANA THERAPIYA PRIVATE LIMITED is a Private Company, who was incorporated 11 Year(s) 0 Month(s) 14 Day(s) ago on dated 06-May-2011 .</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div class="sigma_service style-18">
                                    <div class="sigma_service-thumb">
                                         <GiDoctorFace className='docface'/>
                                        {/* <i class="flaticon-doctor-1"></i> */}
                                    </div>
                                    <div class="sigma_service-body">
                                        <h5>Dentistry</h5>
                                        <p>dentistry, the profession concerned with the prevention and treatment of oral disease,</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div class="sigma_service style-18">
                                    <div class="sigma_service-thumb">
                                        <FaVirus/>
                                        {/* <i class="flaticon-stethoscope"> */}
                                        {/* </i> */}
                                    </div>
                                    <div class="sigma_service-body">
                                        <h5>Virology</h5>
                                        <p>Virology is the scientific discipline concerned with the study of the biology of viruses and viral diseases, including the distribution,</p>
                                    </div>
                                </div>-
                            </Col>

                        </Row>

                    </div>
                </div>
            </section>
            <section className='s3'>
                <div className='sigma2'>
                    <div className='container3'>
                        <Row>
                            <Col lg={6} xs={12}>
                                <div className='sigma_about style-9 w-100 h-100'>
                                    <div className='sigma_about-image-1 has-no-content'>
                                        <img src='../../../../Images/ese.jpg' className='img2' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} xs={12}>
                                <div className='sigma_about style-9 mt-5 mt-lg0'>
                                    <div className='section-title'>
                                        <h3 className='title mb-5'>We Provide Essential Service For Your Health</h3>
                                    </div>
                                </div>
                                <div className='sigma-about-content'>
                                    <Row>
                                        <Col md={6}>

                                            <div className='sigma_info-description'>
                                                <h5>Quality Control System</h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            </div>

                                        </Col>
                                        <Col md={6}>

                                            <div className='sigma_info-description'>
                                                <h5>Highly Professional Staff</h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            </div>

                                        </Col>
                                        <a class="sigma_btn mt-3 mt-sm-0"><Link to={"/contactpage"}>Get a Quote</Link>
                                            <i class="fal fa-arrow-right ml-3">

                                            </i>
                                        </a>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section className='s4'>
                <Container>
                    <div className='min'>
                        <h1>Trending Product</h1>
                    </div>
                    <div className='fetch'>
                        <Row>
                            {
                                HomeJson.Homemap.map((prod1) =>
                                    <React.Fragment key={prod1.prod_id}>
                                        <Col xs={12} lg={4}>
                                            <Card className='cards'>
                                                <Card.Img variant="top" src={prod1.prod_img} className='img3' />
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h5>{prod1.prod_name}</h5>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <h3>Price :{prod1.prod_price}</h3>


                                                    </Card.Text>
                                                    <Button variant="primary" className='bt' >Go To Details</Button>
                                                </Card.Body>

                                            </Card>
                                        </Col>
                                    </React.Fragment>
                                )
                            }
                        </Row>
                    </div>

                </Container>

            </section>
            <section className='s5'>
                <Container>
                    <div className='min1'>
                        <h5 className='hb1'>Meet Our Team</h5>
                        <h1 className='hb2'>Our Creative Team</h1>
                    </div>
                    <div className='fetch1'>
                        <Row>
                            {
                                Doctorjson.Doctor.map((prod) => {
                                    return (
                                        <React.Fragment key={prod.doc_id}>
                                            <Col xs={12} md={2} lg={4}>
                                                <>
                                                    <img className='img30' src={prod.doc_img} />
                                                    <h2>{prod.doc_name}</h2>
                                                    <h3>{prod.doc_department}</h3>
                                                    <button>View Doctor's Details</button>
                                                </>
                                            </Col>

                                        </React.Fragment>
                                    )
                                })
                            }

                        </Row>
                    </div>
                </Container>
            </section>
            <section className='s6'>
                <div className='container4'>
                    <div className='section-title centered'>
                        <span className='subtitle text-white'>What We Do</span>
                        <h3 className='hb3'>Services for You</h3>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className='c5'>
                            <div class="sigma_service style-18 has-bg">
                                <div class="sigma_service-thumb">
                                <FaStethoscope />
                                     {/* <i class="flaticon-stethoscope"></i> */}
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
                                <GiDoctorFace className='docface'/>
                                    {/* <i class="flaticon-doctor-1"></i> */}
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
                                    {/* <i class="flaticon-stethoscope"> */}
                                    {/* </i> */}
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
                                    {/* <i class="flaticon-medical-record">
                                    </i> */}
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
                                {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
                                    {/* <i class="flaticon-pharmacy">
                                    </i> */}
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
                </div>
            </section>
            <section className='s7'>
                <div className='container5'>
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
            <section className='s9'>
                <div className='container7'>
                    <Row>
                        <Col lg={4}>
                            <img src='../../../../Images/doctor4.jpg' className='img12' />
                        </Col>

                        <Col lg={8}>
                            <div className='col3'>
                                <div className='sigma_form style-6'>
                                    <div className='form-title'>
                                        <h3 className='mb-1 text-white'>Get In Touch</h3>
                                        <p className='text=-white p5'>We Will Be Hwppy To Assist You</p>
                                    </div>
                                    <form method='Get'>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Name' name='name' />
                                        </div>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Email' name='email' />
                                        </div>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Message' name='msg' />
                                        </div>
                                        <button type='submit' name='submit' className='btn-block secondary'>SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </section>
        </div>
    )
}
