import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';



const Slideshow = () => {
    const main = {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderRadius: '25px 25px 0px 0px',
        height: '40vh',
        padding: '4% 2% 4% 2%'
    };

    const alignItemsCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#14ABE0'
    }

    return (
        <Container style={ main }>
            <Row>
                <Col>
                    <h1 style={{ color: 'white' }}>Trending Abstracts</h1>
                </Col>
            </Row>
            <Row className='d-flex justify-content-space-between'>
                {/* <Col style={ alignItemsCenter }><Button color='#14ABE0' children='<' /></Col>
                <Col md='5'>
                    <Card style={{ height: '20vh' }}>
                        <Card.Body>
                            <Card.Title children='Title' />
                            <Card.Text children='lorem ipsum' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md='5'>
                    <Card style={{ height: '20vh' }}>
                        <Card.Body>
                            <Card.Title children='Title' />
                            <Card.Text children='lorem ipsum'/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={ alignItemsCenter }><Button children='>' /></Col> */}
                <Carousel>
                    <Carousel.Item interval={3000}>
                        
                            <Card style={{ height: '20vh', width: '100vh'}}>
                                <Card.Body>
                                    <Card.Title children='Title' />
                                    <Card.Text children='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                                </Card.Body>
                            </Card>
                     
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        
                            <Card style={{ height: '20vh', width: '100vh' }}>
                                <Card.Body>
                                    <Card.Title children='Title' />
                                    <Card.Text children='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                                </Card.Body>
                            </Card>
                       
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}


export default Slideshow;