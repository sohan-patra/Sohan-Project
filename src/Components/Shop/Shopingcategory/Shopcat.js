import React from 'react'
import './Shopcat.css'
import Shopjson from '../Project.json'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Shopcat() {
  return (
    <div className='main10'>


      <h1 className='p1'>Different items</h1>
      <Container>
        <Row>
          {
            Shopjson.Product.map((prod2) => {
              return (

                <React.Fragment key={prod2.prod_id}>
                  <Col xs={12} lg={6}>
                    <li className='list3'>
                      <img className='img1' src={prod2.prod_img} />
                      <h3>{prod2.prod_name}</h3>
                      <button className='b7'><Link to={`/itemsub/${prod2.prod_name}`}>View Medical Items</Link></button>
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
