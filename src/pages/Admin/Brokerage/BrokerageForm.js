import React from "react";
import { Row, Col, Card, CardBody, Label, Button } from "reactstrap";
import { Formik } from "formik";
import Api from "../../../api_test";
import SweetAlert from "react-bootstrap-sweetalert";

class BrokerageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      success_msg:false,
      brokrageAmount:"",
      newBrokrage:""
    }
    this.previousBrokerage = this.previousBrokerage.bind(this);
  }

  previousBrokerage(id){
            if(id === "Select User") {
              return;
            }
            console.log('id in previous brokerage', id);
              var config = {
                method: 'GET',
                url:"trading/brokerage/"+ id +"/",
              };
              
              Api(config)
                .then(result => {
                  console.log('this is test',result.data[0])
                  if(result.data[0] === undefined){
                    return;
                  }
                 
                  this.setState({brokrageAmount:result.data[0].Brokerage_amount.toString()})
                  console.log("value of brokrage amount afterapi",this.state.brokrageAmount)
                  this.setState({newBrokrage:this.state.brokrageAmount})
                })
                .catch(error => console.log('error', error));


  }
 
  render() {  
    console.log(this.props.data);

    return (
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <h4 className="card-title"
               style={{fontFamily: "sans-serif",fontWeight:"bold"}}
              >Must be filled all the fields</h4>
              <Formik
                initialValues={{
                  Brokerage_amount: "" ,
                  UserWalletID: "" , 
                }}
                validate={(values) => {
                
                
                  const errors = {};
                  if (!values.Brokerage_amount) {
                    this.setState({brokrageAmount: ""});
                    console.log("value of broktrageam",this.state.brokrageAmount)
                    errors.Brokerage_amount = "Required";
                  }
                  if (!values.UserWalletID) {
                    errors.UserWalletID = "Required";
                  }
                 
                  return errors;
                  
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("I am here");
                  const data = JSON.stringify({
                    UserWalletID : values.UserWalletID,
                    Brokerage_amount : values.Brokerage_amount
                  })
                  console.log("I am here",data);
                  var config = {};

                  console.log("value of brokrage amount1",this.state.brokrageAmount)


                  if(this.state.brokrageAmount ==="" && this.state.newBrokrage === "" ){
                    
                    console.log("value of brokrage amount2",this.state.brokrageAmount)
                    
                    config = {
                      url:"trading/brokerage/",
                      method: "POST",
                      data: data,
                    }
                    }
                    else{
                      console.log("value of brokrage amount3",this.state.brokrageAmount)
                      config = {
                        url:"trading/brokerage/" + values.UserWalletID + "/",
                        method: "PATCH",
                        data: data,
                      }
                    }
                    console.log("here its working fine",data)
                    Api(config)
                      .then((response) => {
                        console.log(response);
                        this.setState({success_msg:true})
                      })
                      .catch(function (response) {
                        console.log("I am the error..", response);
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
                            title="Brokrage Update"
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
                         name="UserWalletID"
                         value={values.UserWalletID}
                         onChange={(e)=>{
                           console.log('it is e', e.target.value);
                          handleChange(e);
                          this.previousBrokerage(e.target.value);
                          
                        }}
                        >
                          <option  style={{fontFamily: "sans-serif"}}>Select User</option>
                          {this.props.data ? this.props.data.map((item) => (
                            <option key={Math.random()}
                             value={item.id}>
                              {item.username}</option>
                           )): ''}
                        </select>
                        {errors.user_id && touched.user_id && errors.user_id}
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Label className="col-md-2 col-form-label"
                       style={{fontFamily: "sans-serif",fontWeight:"bold"}}
                      >
                        Brokerage Amount
                      </Label>
                      <Col md={10}>
                      <input
                          type="number"
                          name="Brokerage_amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Brokerage_amount  === "" ? this.state.brokrageAmount:values.Brokerage_amount }
                          // value={this.state.userid}
                        />
                        {
                        errors.Brokerage_amount &&
                          touched.Brokerage_amount &&
                          errors.Brokerage_amount
                        }
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

export default BrokerageForm;
