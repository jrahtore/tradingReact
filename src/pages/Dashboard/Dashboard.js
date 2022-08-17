import React, { Component } from 'react';
import { Container, Card, Row, Col, Nav, NavItem, NavLink, UncontrolledTooltip, Input, Label, Button, CardBody, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import API from '../../api_test';
//import API from '../../api_mcx';

//import { MDBDataTable } from "mdbreact";

import NAPI from "../../api_nfo";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Dashboard extends Component {

  async table123() {

    let userid = localStorage.getItem('user_id')
   

    var config = {
      method: 'get',
      url: `trading/transaction_status/?user_type=${localStorage.getItem('user_type')}&id=${userid}`,
      // url: 'trading/transaction_status/?user_type=' + localStorage.getItem('user_type'),


    };



    var self = this
    await API(config)
      .then(function (response) {

        console.log("check this -> ", response.data)
        // self.setState({data:response.data})
        self.resultData(response);
      })
      .catch(function (error) {
        if (error.response) {
          console.log('error msg ', error);

          //  setError({'name':error.response.data.message})
        }
      });
  }



  resultData(response) {
    console.log("dfdsfds", response.data)
    var test = {};
    var i = 0;


    var test = {}
    var i = 0;
    var t = '';
    var rows = [];
    var a = ['GOLD', 'SILVER', 'COPPER', 'NICKEL', 'CRUDEOIL', 'ALUMINIUM']
    var str = [];

    for (let key in response.data) {

      t = response.data[key];
      var letr = t.sharename.match(/[a-zA-Z]+/g);
      var symbol = letr[0];
      if (a.includes(symbol)) {
        str[i] = "MCX:" + t.sharename;

      }
      else {
        str[i] = "NFO:" + t.sharename;
      }
      i++;


    }
    var str_arr = str.join('/')
    this.setState({ str: str_arr });

    this.nseFODataFunc(str_arr)

    this.setState({ data: response.data })


    var arr = { columns: this.state.columns, rows: rows }
    this.setState({ rows: arr })

  }


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      interval: 0,
      str: "",
      share: []
      // activeTab: '1',
    }

    this.nseFODataFunc.bind(this);
  }



  async nseFODataFunc(str) {

    if (str === undefined) {
      str = "";
    }
    console.log("nseFO", str);


    //console.log("str",str)
    var config = {
      method: "GET",
      url: str,
    };

    var self = this;
    await NAPI(config)
      .then((response) => {
        console.log("response.data gfgdfgdfgfdgdfgd", response);
        this.setState({
          share: response.data.data
        });
      })

      .catch(function (error) {
        if (error.response) {
          // console.log('error msg ',error);
          //  setError({'name':error.response.data.message})
        }
      });
  }

  componentDidMount() {

    const interval = setInterval(() => {
      this.nseFODataFunc(this.state.str);

    }, 2000);
    console.log("value of setinterval", interval)
    this.setState({ interval: interval });
    setInterval(() => {
      this.table123()

    }, 2000);

  }


  componentWillUnmount() {
    // this.symbols()




    clearInterval(this.state.interval);
  }


  render() {




    return (

      <React.Fragment>
        <div className="page-content">
          <Container fluid>


            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody className="pt-0">

                    <table id="simple-board" className="table table-responsive">
                      <thead>
                        <tr style={{ fontFamily: "sans-serif" }}>
                          <th scope="col">Name</th>
                          <th scope="col">Share Symbol</th>
                          <th scope="col">Action</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Amount</th>
                          

                          <th scope="col">Live Rate</th>
                          <th scope="col">Profit Loss</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(this.state.data).map(bl =>
                      
                          <tr>
                            {/* <td><h6>{JSON.stringify(bl)}</h6></td> */}
                            <td>{bl.Usertransaction.username}</td>
                            <td>{bl.sharename}</td>
                            <td>{bl.action}</td>
                            <td>{bl.quantity}</td>
                            <td>{bl.amount}</td>
                            

                            {this.state.share[bl.sharename] ?
                              <>
                                {console.log("dashbiard woking", this.state.share[bl.sharename])}
                                {bl.action == "BUY" ? <>
                                  <td>{this.state.share[bl.sharename].buy}</td>

                                  <td> {
                                    parseFloat((((this.state.share[bl.sharename].buy - bl.amount) * bl.quantity-bl.Brokerage_amount))).toFixed(2)
                                  }</td>

                                  <td></td></> : <>
                                    <td>{this.state.share[bl.sharename].sell}</td>
                                    <td>{
                                      parseFloat((((bl.amount - this.state.share[bl.sharename].sell ) * bl.quantity-bl.Brokerage_amount))).toFixed(2)
                                    }</td>
                                    <td></td></>}

                              </>
                              : <td></td>}

                            <td></td>
                            <td></td>
                          </tr>


                        )}




                      </tbody>
                    </table>


                    {/* <table id="simple-board">
                                      <tr>
                                        <th>First</th>
                                        <th>second</th>
                                        <th>third</th>
                                      </tr>
                    <tbody>
                                        
                                    { Object.values(this.state.response123).map(bl => 
                    
                     <tr><td>{bl}</td></tr>
                   
                  )}
                  </tbody>
                  </table> */}





                    <Modal
                      isOpen={this.state.modal_center}
                      toggle={this.tog_center}
                      centered={true}
                    >
                      <ModalHeader toggle={() => this.setState({ modal_center: false })}>
                        NICKEL21JUNFUT
                          </ModalHeader>
                      <ModalBody>


                        <div className="toggle-switch">
                          <input
                            type="checkbox"
                            className="toggle-switch-checkbox"
                            name="toggleSwitch"
                            id="toggleSwitch"
                          />
                          <label className="toggle-switch-label" htmlFor="toggleSwitch">
                            <span className="toggle-switch-inner" />
                            <span className="toggle-switch-switch" />
                          </label>
                        </div>

                        <p>
                          Cras mattis consectetur purus sit amet fermentum.
                          Cras justo odio, dapibus ac facilisis in, egestas
                          eget quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                          </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                          </p>
                        <p className="mb-0">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec
                          ullamcorper nulla non metus auctor fringilla.
                          </p>
                      </ModalBody>
                    </Modal>
                  </CardBody>
                </Card>
              </Col>
            </Row>

          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;