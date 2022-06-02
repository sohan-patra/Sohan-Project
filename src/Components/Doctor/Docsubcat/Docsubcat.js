import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import './Docsubcat.css'
import { Link } from 'react-router-dom';
import DocJson from '../Doctor2.json'

export default function Docsubcat() {
    let data = useParams();
    console.log("Useparam Value in Subcat :", data);
    let prod = DocJson.Doctor2.find((x) => x.d_name === data.docName);
    console.log("Doctor: ", prod);
    const [SearchState, setSearchState] = useState('');
    return (
        <div>
            <h1 className='p1'>Name Of Doctors</h1>
            <Container>
                <Row className='mt-3 mb-4' xs={12} md={6} >
                    <Col xs={12} md={6}>
                        <input
                            className='in1'

                            type='text'
                            name='search'
                            placeholder='Search...'
                            onChange={event => { setSearchState(event.target.value) }}>

                        </input>
                    </Col>
                </Row>
                <Row>
                    {
                        prod.dsub_cat.filter((val) => {
                            if (SearchState === "") {
                                return val;
                            }

                            else if (val.dsub_name.toLowerCase().includes(SearchState.toLowerCase())) {
                                return val;
                            }
                        })
                            .map((val) => {
                                return (


                                    <Col xs={12} lg={6}>
                                        <React.Fragment key={val.dsub_id}>
                                            <Card className='cards2'>
                                                <Card.Img variant="top" className='img22' src={val.dsub_img} />
                                                <Card.Body>
                                                    <Card.Title><h5>{val.dsub_name}</h5></Card.Title>
                                                    <Card.Text>
                                                        <h3>Qulification :{val.dsub_qulification}</h3>


                                                    </Card.Text>
                                                    <Button variant="primary" className='bt3' ><Link to={`/docdetails/${prod.d_name}/${val.dsub_name}`}>Details</Link></Button>
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
