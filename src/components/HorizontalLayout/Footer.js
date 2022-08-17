import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <React.Fragment>
             <footer className="footer">
                    <Container fluid>
                        <Row>
                            <Col sm={6}>
                            {new Date().getFullYear()} ©UNIQUE TRADERS.
                            </Col>
                            <Col sm={6}>
                                <div className="text-sm-right d-none d-sm-block">
                                    Crafted with <i className="mdi mdi-heart text-danger"></i> by UNIQUE TRADERS
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
        </React.Fragment>
    );
};

export default Footer;
