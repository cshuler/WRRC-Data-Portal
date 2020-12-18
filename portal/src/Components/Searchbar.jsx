import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



const Searchbar = () => {

    const alignItemsCenter = { display: 'flex', alignItems: 'center' };


    return (
        <Container style={{ marginTop: '5%', marginBottom: '5%' }}>
            <Row style={ alignItemsCenter }>
                <Col md='2' />
                <Col md='7' >
                    <Form>
                        <Form.Group>
                            <Form.Control size='lg' placeholder="Search now..." />     
                        </Form.Group>
                    </Form>
                </Col>
                <Col md='1'> 
                    <Button size='md' children='Filter'/>
                </Col>
                <Col md='2' />
            </Row>
        </Container>
    );
}


export default Searchbar;