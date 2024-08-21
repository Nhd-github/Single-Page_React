import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import{Link} from 'react-router-dom'



export default function Home() {
    return (
        <Container>
            <Row className='mt-5' style={{ alignItems: 'center', justifyContent: 'space-between' }}>

                <Col md={6} className='shadow text-center'>
                    <h1 className='mt-5'>
                        NEWS, EVENTS,
                    </h1>
                    <h1>
                        PODCASTS, AND MORE
                    </h1>
                    <img src="./img/images.png" alt="" style={{ zIndex: '2', position: 'relative', left: '-124px' }} />
                </Col >
                <Col md={4}>
                    <div className="wrapper" style={{ backgroundColor: 'rgba(0,0,0,.2)' }}>

                        <Form>
                            <Form.Group className="m-3 p-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>

                                
                                <Form.Control type="email" placeholder="name@example.com" minLength={10}/>
                                <Link to={`/Home/Notify`}>
                                <Button className='mt-5' variant="warning">Noyify me</Button>{' '}
                                </Link>

                            </Form.Group>

                        </Form>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
