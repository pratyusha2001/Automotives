import React from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap'
import './Navbars.css'

const TopNav = () => {
    return (
        <div className="topnav">
            <Row>
                <Col md={1} xs={2} className="column">
                    <Dropdown>
                        <Dropdown.Toggle className="dropEN">
                            EN
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="">EN</Dropdown.Item>
                            <Dropdown.Item href="">FR</Dropdown.Item>
                            <Dropdown.Item href="">GE</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={1} xs={2}>
                    <Dropdown>
                        <Dropdown.Toggle className="dropUSD">
                            USD
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>USD</Dropdown.Item>
                            <Dropdown.Item>EUR</Dropdown.Item>
                            <Dropdown.Item>GPY</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={3} xs={3} style={{ textAlign: 'right', color: 'rgb(88, 88, 88)' }}>Call us toll free: +1-541-754-3010</Col>
                <Col md={3} xs={3} style={{ textAlign: 'left', color: 'rgb(88, 88, 88)' }}>Send us an email: contact@example.com</Col>
                <Col md={{ span: 2, offset: 0 }} xs={5} className="cart" style={{ textAlign: 'right' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                    Order Tracking
                </Col>
                <Col md={{ span: 2, offset: 0 }} xs={5} className="cart" style={{ textAlign: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    Wishlist
                </Col>
            </Row>
        </div>
    );
}

export default TopNav;