import React from "react";
import { Row, Col, Container } from "reactstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <h6 style={{ fontWeight: 'bold' }}> {new Date().getFullYear()} © TRADE FEVER. </h6>
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-right d-none d-sm-block">
                                <h6 style={{ fontWeight: 'bold' }}>Crafted with <i className="mdi mdi-heart text-danger"></i> by TRADE FEVER</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
