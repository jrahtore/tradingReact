import React from "react";
import { Row, Col, Card, CardBody, Label, Button } from "reactstrap";
import { Formik } from "formik";
import Api from "../Create_clientApi";
import { values } from "lodash";
import SweetAlert from "react-bootstrap-sweetalert";

class CreateClientForm extends React.Component {
  constructor(){
    super()
    this.state = {
      success_msg:false,
      error_msg:false,
    }
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <h4 className="card-title" style={{fontFamily: "sans-serif",fontWeight:"bold"}}>Must be filled all the fields</h4>
               {console.log("idsdfghjk",values)}
              <Formik
                initialValues={{
                  // auth_user_id: "" || this.props.auth_user_id,
                  username: "" || this.props.username,
                  password: "" || this.props.password,
                  user_type: "" || this.props.user_type,
                  city: "" || this.props.city,
                }}
                
                validate={(values) => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = "Required";
                  } else if (values.username.length < 4) {
                    errors.username = "must be 8 or more characters";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  } else if (values.password.length < 4) {
                    errors.password = "Password must be more than 5 characters";
                  }
                  if (!values.user_type) {
                    errors.user_type = "Required";
                  }
                  if (!values.city) {
                    errors.city = "Required";
                  }
                  return errors;
                }}
            onSubmit={(values, { setSubmitting }) => {
                    const data = JSON.stringify({
                      password:values.password,
                      user_type:values.user_type,
                      city:values.city,
                      username:values.username
                    })
                      var config = {
                        method: "post",
                        url: "api/register_tradingclient/",
                        data: data,
                      };
                       Api(config)
                        .then((response) => {
                          console.log("value of api createclient",response.data);
                          if(response.data ==="this user is already Registered"){
                          
                            this.setState({error_msg:true })
                          }
                          else{
                          this.setState({success_msg:true})
                        }})
                        .catch(function (response) {
                          console.log("I am the error..in createclient", response);
                        });
                  
                  
                   ;
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form className="ui form" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                    {this.state.success_msg ? (
                          <SweetAlert
                            title="Client Created"
                            success

                            confirmBtnBsStyle="success"
                            cancelBtnBsStyle="danger"
                            onConfirm={() => this.setState({ success_msg: false })}
                            onCancel={() => this.setState({ success_msg: false })}
                          >
                            You clicked the button!
                          </SweetAlert>
                        ) : null}
                            {this.state.error_msg ? (
                          <SweetAlert
                            title="this User is Already Exist"
                            error

                            confirmBtnBsStyle="success"
                            cancelBtnBsStyle="danger"
                            onConfirm={() => this.setState({ error_msg: false })}
                            onCancel={() => this.setState({ error_msg: false })}
                          >
                            You clicked the button!
                          </SweetAlert>
                        ) : null}
                      {/* <Label className="col-md-2 col-form-label">
                        User ID
                      </Label>
                      <Col md={10}>
                        <input
                          type="text"
                          name="auth_user_id"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.auth_user_id}
                        />
                        {errors.auth_user_id &&
                          touched.auth_user_id &&
                          errors.auth_user_id}
                      </Col> */}
                    </Row>
                    <Row className="mb-3">
                      <Label className="col-md-2 col-form-label" style={{fontFamily: "sans-serif",fontWeight:"bold"}}>
                        Username
                      </Label>
                      <Col md={10}>
                        <input
                          type="text"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                        {errors.username && touched.username && errors.username}
                      </Col>
                      

                    </Row>
                    <Row className="mb-3">
                      <Label className="col-md-2 col-form-label"
                      style={{fontFamily: "sans-serif",fontWeight:"bold"}}
                      >
                        Password
                      </Label>
                      <Col md={10}>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Label className="col-md-2 col-form-label"
                      style={{fontFamily: "sans-serif",fontWeight:"bold"}}
                      >
                        User Type
                      </Label>
                      <Col md={10}>
                        <select
                          name="user_type"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.user_type}
                          
                        >
                          <option value="">Select User Type</option>
                          <option value="trading_client"> trading_client</option>
                          {/* <option value="sub_admin">Sub Admin</option> */}
                        </select>
                        {errors.user_type &&
                          touched.user_type &&
                          errors.user_type}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Label className="col-md-2 col-form-label"
                      style={{fontFamily: "sans-serif",fontWeight:"bold"}}
                      >City</Label>
                      <Col md={10}>
                        <input
                          type="text"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.city && touched.city && errors.city}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col xs={12}>
                        <div className="button-items">
                          <Button
                            onClick={this.props.backPanel}
                            color="secondary"
                            className="waves-effect"
                          >
                            Cancel
                          </Button>
                          {!this.props.modify ? (
                            <Button
                              color="success"
                              className="waves-effect waves-light me-1"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Create
                            </Button>
                          ) : (
                            <Button
                              color="success"
                              className="waves-effect waves-light me-1"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Save
                            </Button>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CreateClientForm;
