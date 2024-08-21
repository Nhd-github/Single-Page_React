import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function About() {
    return (
        <Container style={{ background: 'url(./img/About-us.svg' , alignItems:'center', justifyContent:'space-between'}}>
            <Row  style={{ background: 'url(./img/About-us.svg' , alignItems:'center', justifyContent:'space-between'}}  className='mt-5' >
                <Col md={6}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img src="./img/FirstCre.png" className='thumbnail' style={{ width: '660px', height: '450px' }} alt="" />
                            {/* <ExampleCarouselImage text="First slide" /> */}
                            <Carousel.Caption>
                                <h3>A temporal query language</h3>
                                <p>What the interns have wrought, 2023 edition</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./img/SecondCre.jpg" style={{ width: '660px', height: '450px' }} className='thumbnail' alt="" />

                            {/* <ExampleCarouselImage text="Second slide" /> */}
                            <Carousel.Caption>
                                <h3>Efficient token-counting in OCaml</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* <ExampleCarouselImage text="Third slide" /> */}
                            <img src="./img/ThirdCre.jpg " style={{ width: '660px', height: '450px' }} className='thumbnail' alt="" />

                            <Carousel.Caption>
                                <h3>Async tracing</h3>
                                <p>
                                    What the interns have wrought, 2023 edition
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Join Our Enents On August </Card.Title>
                            <Card.Text>
                                Dinner at UWA: Wednesday 28th August @ 6:00 PM AWST
                            </Card.Text>
                            <Button variant="warning"> Go To Event</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}
