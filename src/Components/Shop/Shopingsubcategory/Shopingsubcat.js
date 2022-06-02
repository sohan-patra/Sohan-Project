import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import './Shopingsubcat.css'
import { Link } from 'react-router-dom';
import ShopJson from '../Project.json'

export default function Shopingsubcat() {
  let data1 = useParams();
  console.log("Useparam Value in Subcat :", data1);
  let prod = ShopJson.Product.find((x) => x.prod_name === data1.subName);
  console.log("Product: ", prod);
  const [SearchState, setSearchState] = useState('');

  return (
    <div>
      <h1 className='p1'>Different Medical Products</h1>
      <Container>
        <Row className='mt-3 mb-4' xs={12} md={4} >
          <Col xs={12} md={4}>
            <input
              className='in'

              type='text'
              name='search'
              placeholder='Search...'
              onChange={event => { setSearchState(event.target.value) }}>

            </input>
          </Col>
        </Row>
        <Row>
          {
            prod.sub_cat.filter((val) => {
              

              if (SearchState === "") {
                return val;
              }

              else if (val.s_name.toLowerCase().includes(SearchState.toLowerCase())) {
                return val;
              }
              
            })
            
              .map((val) => {
                return (


                  <Col xs={12} lg={4}>
                    <React.Fragment key={val.s_id}>
                      <Card className='cards1'>
                        <Card.Img variant="top" className='img20' src={val.s_img} />
                        <Card.Body>
                          <Card.Title><h5>{val.s_name}</h5></Card.Title>
                          <Card.Text>
                            <h3>Price :{val.price}</h3>
                            <p>{val.desc}</p>

                          </Card.Text>
                          <Button variant="primary" className='bt2' ><Link to={`/itemdetails/${prod.prod_name}/${val.s_name}`}>Details</Link></Button>
                        </Card.Body>

                      </Card>

                      {/* <img className='img20' src={val.image} /> */}

                      {/* <h6>{val.title}</h6>
                    <p>Price :{val.price}</p>
                    <p>{val.description}</p> */}
                      {/* <Button className='bt'><Link to={`/productdetails/${val.id}`}>Details</Link></Button> */}
                    </React.Fragment>
                  </Col>


                )

              })
          }
        </Row>
      </Container>
    </div>
  )
}
