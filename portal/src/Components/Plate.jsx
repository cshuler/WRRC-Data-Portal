import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const Plate = (props) => {
    const top = {
        backgroundColor: 'rgba(20, 171, 224, 1)',
        borderRadius: '25px 25px 0px 0px',
        height: '40vh',
        padding: '4% 2% 4% 2%'
    };

    const bottom = {
        backgroundColor: 'rgba(20, 171, 224, 1)',
        borderRadius: '0px 0px 25px 25px', 
        height: '40vh',
        padding: '4% 2% 4% 2%'
    };

    const neutral = {
        backgroundColor: 'rgba(20, 171, 224, 1)',
        borderRadius: '25px 25px 25px 25px', 
        height: '40vh',
        padding: '4% 2% 4% 2%'
    }
  

    const { alignItemsCenter, orientation, header, right, left } = props;

    return (
        <Container style={ 
            orientation === 'top' ? top : 
            orientation === 'bottom' ? bottom :
            neutral
        }>  
            <Row>
                <h3>{ header }</h3>
            </Row>
            <Row>
                <Col styles={{alignItemsCenter}}>
                    { left }
                </Col>
                <Col styles={{alignItemsCenter}}>
                    { right }
                </Col>
            </Row>
        </Container>
    );
}

export default Plate;