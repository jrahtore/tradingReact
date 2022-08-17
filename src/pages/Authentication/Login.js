import React, { Component } from 'react';
import API from '../../api';
import logo from "../../Images/logo.jpeg"

import { Row, Col, Input, Button, Alert, Container, Label, FormGroup } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../store/actions';

// import images
import logodark from "../../assets/images/logo-dark.png";

class Login extends Component {

    async doLogin(values) {
        console.log('Hello', values)
        var data = JSON.stringify({
            "username": values.username,
            "password": values.password
        });
        var config = {
            method: 'post',
            url: 'token/',
            data: data
        };

        return await API(config)
            .then(function (response) {
                localStorage.setItem('authUser', JSON.stringify(response.data));
                var formdata = new FormData();
                console.log('formdata', data);
                const token = localStorage.setItem('token', response.data.token);
                const user_type = localStorage.setItem('user_type', response.data.user_type);
                const user_id = localStorage.setItem('user_id', response.data.user_id);
                const watchlist = localStorage.setItem("nseFO", response.data.watchlists)
                response.data.email = "test@gmail.com";
                const userdata = localStorage.setItem('user_data', JSON.stringify(response.data));
                if (response.data.user_type == 'super_admin' || response.data.user_type == 'sub_admin') {
                    window.location.href = '/dashboard-admin'
                }
                else {
                    window.location.href = '/nseFO'
                }
            })
            .catch(function (error) {
                if (error.response) {
                    console.log('error msg sdfsdf', error.response.data.non_field_errors[0]);
                    alert("User name or password not correct.");
                }




            });
    }

    constructor(props) {
        super(props);

        this.state = { username: "adil", password: "Adil@1234@", error: "" }
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleSubmit(event, values) {
        this.doLogin(values)

    }

    componentDidMount() {
        this.props.apiError("");
        document.body.classList.add("auth-body-bg");
    }

    componentWillUnmount() {
        document.body.classList.remove("auth-body-bg");
    }
    render() {

        return (
            <React.Fragment>

                <div>
                    <Container fluid className="p-0">
                        <Row className="no-gutters">
                            <Col lg={4}>
                                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={9}>
                                                <div>
                                                    <div className="text-center">
                                                        <div style={{ marginTop: "30px" }}>
                                                            <img src={logo} alt="..." style={{ width: "50px", height: "50px" }} />
                                                            <h1 style={{ fontFamily: "fantasy", color: "darkblue" }}>TRADE FEVER</h1>

                                                        </div>

                                                        <h4 className="font-size-18 mt-4" style={{ fontStyle: "bold" }}>Welcome here !</h4>
                                                        <h6 style={{ fontWeight: "bold" }}>Sign in to continue to TRADE FEVER</h6>
                                                    </div>


                                                    {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null}

                                                    <div className="p-2 mt-5">
                                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >

                                                            <FormGroup className="auth-form-group-custom mb-4">
                                                                <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                                <Label htmlFor="username" style={{ fontFamily: "sans-serif" }} >Username</Label>
                                                                <AvField name="username" value={this.state.username} type="text" className="form-control" id="username" validate={{ required: true }} placeholder="Enter username" />
                                                            </FormGroup>

                                                            <FormGroup className="auth-form-group-custom mb-4">
                                                                <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                                <Label htmlFor="userpassword" style={{ fontFamily: "sans-serif" }}>Password</Label>
                                                                <AvField name="password" value={this.state.password} type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                            </FormGroup>

                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                                <Label className="custom-control-label" style={{ fontFamily: "sans-serif" }} htmlFor="customControlInline">Remember me</Label>
                                                            </div>
                                                            <p>{this.state.error}</p>
                                                            <div className="mt-4 text-center">

                                                                <Button color="primary" className="w-md waves-effect waves-light" type="submit" >Log In</Button>
                                                                <h6 style={{ fontFamily: "sans-serif", fontStyle: "italic", fontWeight:'bold', marginTop:20 }} >© 2021 TRADE FEVER.</h6>
                                                            </div>


                                                        </AvForm>
                                                    </div>





                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="authentication-bg">
                                    <div className="bg-overlay"></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { loginError } = state.Login;
    return { loginError };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));








