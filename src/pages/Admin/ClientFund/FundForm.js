import React from "react";
import { Row, Col, Card, CardBody, Label, Button } from "reactstrap";
import { Formik } from "formik";
import Api from "../../../api_test"
import SweetAlert from "react-bootstrap-sweetalert";
import { config } from "dotenv";

class FundForm extends React.Component {
  constructor(){
    super()
    this.state={
      success_msg:false,
      
    }
  
 
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <h4 className="card-title"
              style={{fontFamily: "sans-serif",fontWeight:"bold"}}
              >Must be filled all the </h4>
              <Formik
                initialValues={{
                  wallet: "" ,
                  userid: "" ,
                }}
               validate={(values) => {
                  const errors = {};
                  if (!values.wallet) {
                    errors.wallet = "Required";
                  }
                  if (!values.userid) {
                    errors.userid = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("value of fund api",values)
                  var formdata = new FormData();
                    formdata.append("userid", values.userid);
                    formdata.append("wallet", values.wallet);
                  console.log("data",formdata)
                    var config = {
                      url:"trading/wallet/",
                      method: "post",
                      data: formdata,
                    

                    }
                    Api(config)
                      .then((response) => {
                        console.log(response);
                        this.setState({success_msg:true})
                      }
                      )
                      
                      
                      
                      .catch(function (response) {
                        console.log("I am the error..createfundapi", response);
                      });
                      
                  
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
                            title="Fund Update"
                            success

                            confirmBtnBsStyle="success"
                            cancelBtnBsStyle="danger"
                            onConfirm={() => this.setState({ success_msg: false })}
                            onCancel={() => this.setState({ success_msg: false })}
                          >
                            You clicked the button!
                          </SweetAlert>
                        ) : null}
                      <Label className="col-md-2 col-form-label"
                       style={{fontFamily: "sans-serif",fontWeight:"bold"}}
                      >
                        User Detail
                      </Label>
                      <Col md={10}>
                        <select
                           name="userid"
                           value={values.userid}
                           onChange={handleChange}
                           style={{fontFamily: "sans-serif"}}
                        //   value={this.state.value}
                        //   onChange={this.handleChange}
                        >
                          <option >select user</option>
                          {this.props.data
                            ? this.props.data.map((item) => (
                                <option
                                  key={Math.random()}
                                  value={item.id}
                                >
                                  {item.username}
                                </option>
                              ))
                            : ""}
                        </select>
                        {errors.userid && touched.userid && errors.userid}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Label className="col-md-2 col-form-label"
                       style={{fontFamily: "sans-serif",fontWeight:"bold"}}
                      >
                        Total Amount
                      </Label>
                      <Col md={10}>
                        <input
                          type="number"
                          name="wallet"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.wallet}
                        />
                        {errors.wallet &&
                          touched.wallet &&
                          errors.wallet}
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

export default FundForm;
