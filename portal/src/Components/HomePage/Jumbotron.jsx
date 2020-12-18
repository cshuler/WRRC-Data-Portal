import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Background from '../../Resources/Images/HomePageBackground.svg';


const Jumbotron = () => {

    const styles = {
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        position: 'relative',
        width: '100%',
        zIndex: -1
    };

    const overlay = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '50vh',
        position: 'absolute',
        width: '100%',
        zIndex: 2
    };

    return (
        <Row>
            <div style={styles}></div>
            <div style={overlay}>
                <Container>
                    <Row style={{ marginTop: '10%' }}>
                        <Col md={{ size: 12, offset: 6 }}>
                            <p style={{ color: 'white', zIndex: 5 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Vivamus arcu felis bibendum ut tristique et. Orci eu lobortis elementum nibh. Mattis pellentesque id nibh tortor id aliquet lectus. 
                                Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Est sit amet facilisis magna etiam tempor orci eu lobortis. 
                            </p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3%' }}>
                        <Col md={{ offset: 6 }}>
                           <Button size='lg' children='Search Now!' />
                        </Col>
                        <Col>
                           <Button size='lg' children='Upload Now!' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Row>
    );
}

export default Jumbotron;