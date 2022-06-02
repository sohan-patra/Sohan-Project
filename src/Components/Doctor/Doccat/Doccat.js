import React from 'react'
import './Doccat.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DocJson from '../Doctor2.json'

export default function Doccat() {
  return( 
    <div className='main11'>
          <h1 className='p1'>Doctor's Info</h1>
       <Container> 
        <Row>
          {
            DocJson.Doctor2.map((prod2) => {
              return (

                <React.Fragment key={prod2.d_id}>
                  <Col xs={12} lg={4}>
                    <li className='list4'>
                      <img className='img49' src={prod2.d_img} />
                      <h3>{prod2.d_name}</h3>
                      <button className='b16'><Link to={`/docsubcatpage/${prod2.d_name}`}>View About of Doctors</Link></button>
                    </li>
                  </Col>

                </React.Fragment>
              )

            })
          }
        </Row>
        </Container>
      
    </div>
  )
}
