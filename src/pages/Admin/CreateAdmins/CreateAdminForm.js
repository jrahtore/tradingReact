import React from "react";
import { Row, Col, Card, CardBody, Label, Button, FormGroup } from "reactstrap";
import { Formik } from "formik";
import Api from '../../../api_test';
import SweetAlert from "react-bootstrap-sweetalert";
class CreateAdminForm extends React.Component {
  constructor() {
    super()
    this.state = {
      success_msg: false,
      error_msg: false

    }
  }
  render() {
    return (
      <Row>
        {this.state.success_msg ? (
          <SweetAlert
            title="Sub_Admin Created"
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
        <Col xs={12}>
          <Card>
            <CardBody>
              <h4 className="card-title"
                style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
              >Must be filled all the fields</h4>
              <Formik
                initialValues={{

                  username: "" || this.props.adminName,
                  password: "",
                  user_type: "",
                  Create_Clients: "",
                  Client_Fund: "",
                  Clients_Brokerage: "",
                  dashboard: "",
                  View_Client: ""




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
                  } else if (values.password.length < 6) {
                    errors.password = "Password must be more than 5 characters";
                  }
                  else if (values.user_type.length < 2) {
                    errors.user_type = "Password must be more than 5 characters";
                  }
                  // if (!values.Create_Clients) {
                  //   errors.Create_Clients = "Required";}
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("her is just api call")

                  // var myHeaders = new Headers();
                  //         myHeaders.append("Authorization",  'token '+localStorage.getItem('token'));

                  var formdata = new FormData();
                  formdata.append("username", values.username);
                  formdata.append("password", values.password);
                  formdata.append("user_type", values.user_type);
                  formdata.append("Create_Clients", values.Create_Clients ? "yes" : "no");
                  formdata.append("Clients_Brokerage", values.Clients_Brokerage ? "yes" : "no");
                  formdata.append("dashboard", values.dashboard ? "yes" : "no");
                  formdata.append("View_Client", values.View_Client ? "yes" : "no");
                  formdata.append("Client_Fund", values.Client_Fund ? "yes" : "no");

                  var config = {
                    method: 'POST',
                    // headers: myHeaders,
                    data: formdata,
                    url: "api/register_subadmin/",
                    redirect: 'follow',
                  };

                  Api(config)
                    // .then(response => response.text())
                    .then(response => {
                      console.log("api for create subadmin", response)
                      if (response.data === "this user is already Registered") {
                        this.setState({ error_msg: true })
                      }
                      else {
                        this.setState({ success_msg: true })
                      }
                    })
                    .catch(error => console.log('error', error));






                  // const data = JSON.stringify({
                  //   password:values.password,
                  //   user_type:values.user_type,
                  //   username:values.username,
                  //   Create_Clients:values.Create_Clients,
                  //   Client_Fund:values.Client_Fund,
                  //   Clients_Brokerage:values.Clients_Brokerage,
                  //   dashboard:values.dashboard,
                  //   View_Client:values.View_Client
                  // })
                  //  console.log("her is just api call",data)

                  // let config = {
                  //   method: "post",
                  //   url: "api/register_subadmin/",
                  //   data: data,
                  // };
                  // console.log("her is just api callsadsff",data)


                  //  Api(config)
                  //   .then((response) => {
                  //     console.log(response);
                  //     // if(response.data ==="this user is already Registered"){
                  //     // this.setState({error_msg:true})}
                  //     // else{
                  //     //   this.setState({success_msg:true})
                  //     // }
                  //     console.log("wrokinfbfgb");
                  //   })
                  //   .catch(function (response) {
                  //     console.log("I am the error..", response);

                  //   });

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
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >username</Label>
                        <Col md={10}>
                          <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            style={{ marginTop: 12 }}
                          />
                          {errors.username && touched.username && errors.username}
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
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
                            style={{ marginTop: 12 }}
                          />
                          {errors.password && touched.password && errors.password}
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >
                          User Type
                      </Label>
                        <Col md={10}>
                          <select
                            name="user_type"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.user_type}
                            style={{ marginTop: 12 }}
                          >
                            <option value="">Select User Type</option>
                            {/* <option value="trading_client"> trading_client</option> */}
                            <option value="sub_admin">Sub Admin</option>
                          </select>
                          {errors.user_type &&
                            touched.user_type &&
                            errors.user_type}
                        </Col>
                      </Row>



                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >
                          Create Clients
                      </Label>
                        <Col md={10}>
                          <input
                            type="checkbox"
                            name="Create_Clients"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Create_Clients}
                            style={{ marginTop: 12 }}
                          />
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >
                          View Client
                      </Label>
                        <Col md={10}>
                          <input
                            type="checkbox"
                            name="View_Client"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.View_Client}
                            style={{ marginTop: 12 }}
                          />
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >
                          Client Fund
                      </Label>
                        <Col md={10}>
                          <input
                            type="checkbox"
                            name="Client_Fund"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Client_Fund}
                            style={{ marginTop: 12 }}
                          />
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >
                          Clients Brokerage
                      </Label>
                        <Col md={10}>
                          <input
                            type="checkbox"
                            name="Clients_Brokerage"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Clients_Brokerage}
                            style={{ marginTop: 12 }}
                          />
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Label className="col-md-2 col-form-label"
                          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                        >
                          Dashboard
                      </Label>
                        <Col md={10}>
                          <input
                            type="checkbox"
                            name="dashboard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dashboard}
                            style={{ marginTop: 12 }}
                          />
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

                            <Button
                              color="success"
                              className="waves-effect waves-light me-1"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Create
                            </Button>

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

export default CreateAdminForm;
