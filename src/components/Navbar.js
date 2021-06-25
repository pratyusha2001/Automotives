import React from 'react';
import { Col, Row, Form } from 'react-bootstrap'
import './Navbars.css'

const Navbar = () => {
    return (
        <div className="navs">
            <Row>
                <Col><img src="https://blog.penkraft.in/wp-content/uploads/2021/03/logo-dummy.png" alt="logo" className="logo" /></Col>
                <Col xs={6}>
                    <Form>
                        <Form.Group className="form">
                            <Form.Control className="search-form" type="text" placeholder="Search products..." />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="mycart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                    </svg>
                    My Cart
                </Col>
            </Row>
        </div>
    );
}
export default Navbar;