import React from 'react'
import './Contact.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiMapPin, FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <section className='s20'>
        <div className='sigma_subheader style-5 bg-gray'>
          <Container>
            <div className='sigma_subheader-inner'>
              <h1 className='hp5'>Contact Us</h1>
            </div>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a className='btn-link'><Link to={"/"}>Home</Link></a>
              </li>
              <li className='breadcrumb-item active'>Contant Us</li>
            </ol>
          </Container>
        </div>
      </section>
      <section className='s21'>
        <div className='section section-padding'>
          <Container className='cp3'>
            <Row className='r15'>
              <Col className='c17' lg={4} md={6}>
                <div className='sigma_info style-24'>
                  <div className='sigma_info-title'>
                    <span className='sigma_info-icon bg-primary-1'>
                     <FiMapPin/>
                    </span>
                  </div>
                  <div className='sigma_info-description'>
                    <h5 className='hp4'>Our Address</h5>
                    <p className='pb5'>Dankuni Station Pally(north), <br/> Dankuni,Hooghly,West Bengal</p>
                  </div>
                </div>
              </Col>
              <Col className='c17' lg={4} md={6}>
                <div className='sigma_info style-24'>
                  <div className='sigma_info-title'>
                    <span className='sigma_info-icon bg-primary-1'>
                    <FaPhoneAlt/>
                    </span>
                  </div>
                  <div className='sigma_info-description'>
                    <h5 className='hp4'>Our Phone</h5>
                    <p className='pb5'>Mobile: 000 2324 39493</p>
                  </div>
                </div>
              </Col>
              <Col className='c17' lg={4} md={6}>
                <div className='sigma_info style-24'>
                  <div className='sigma_info-title'>
                    <span className='sigma_info-icon bg-primary-1'>
                      <FiMail/>
                    </span>
                  </div>
                  <div className='sigma_info-description'>
                    <h5 className='hp4'>Our Email</h5>
                    <p className='pb5'>example@example.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </section>
      <section className='s22'>
        <Container>
          <div className='sub-title centered'>
            <span className='sub1'>Call to action</span>
            <h3 className='title2'>Make A Request</h3>
          </div>
          <div className='sigma_form style-2'>
            <form method='GET'>
              <Row className='row13'>
                <Col className='col15' lg={6}>
                  <div className='form-group'>
                    <input className='t2' type='text' name='name' placeholder='Enter Full Name' required />
                  </div>
                </Col>
                <Col className='col15' lg={6}>
                  <div className='form-group'>
                    <input className='t2' type='email' name='email' placeholder='Email Email Address' required />
                  </div>
                </Col>
                <Col className='col15' lg={6}>
                  <div className='form-group'>
                    <input className='t2' type='number' name='phone' placeholder='Phone Number' required />
                  </div>
                </Col>
                <Col className='col15' lg={6}>
                  <div className='form-group'>
                    <input className='t2' type='text' name='subject' placeholder='Subject' required />
                  </div>
                </Col>
                <Col className='col12' lg={12}>
                  <div className='form-group'>
                   <textarea className='t3' rows='10' name='message' placeholder='Enter Message' required />
                  </div>
                </Col>
                <Col className='col16' md={12}>
                  <button className='b19' type='submit'>Submit Request</button> 
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </section>
      <iframe className='web' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0897338353234!2d88.42488431443408!3d22.575746938545645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275eff23edf37%3A0xdc56c0a757ecff53!2sWebskitters%20Academy!5e0!3m2!1sen!2sin!4v1653666796474!5m2!1sen!2sin" width="1300" height="300" title="mywebsite"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
