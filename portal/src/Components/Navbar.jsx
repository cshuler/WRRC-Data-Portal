import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Navbar = () => {
    const styles = {
        backgroundColor: 'black',
        color: 'white',
        zIndex: 3
    }

    return (
        <Row style={styles} className='justify-content-md align-items-center'>
            <Col xs={4}>
                <h1 className='text-center'>WRRC Data Portal</h1>
            </Col>
            <Col>
                <h4 className='text-center'>Archive</h4>
            </Col>
            <Col>
                <h4 className='text-center'>Support</h4>
            </Col>
            <Col>
                <h4 className='text-center'>About</h4>
            </Col>
        </Row>
    );
}

export default Navbar;