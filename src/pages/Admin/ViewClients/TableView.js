import React from "react";
import {
  TabPane,
  Row,
  Col,
  CardText,
  Table,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import MAPI from "../../../api_test";
import UpdatePassword from "./Popup";
import SweetAlert from "react-bootstrap-sweetalert";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

class TableView extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      showPopup: false,
      swt: false,
      pass: "",
      curUser: -1,
      success_msg: false,
      modalopen: false,
      selectUserId: '',
      selecteddate: '',
      date: '',
      date2: '',
      TOTAL: '',
    }
    this.updatePass = this.updatePass.bind(this);
    this.handleMod = this.handleMod.bind(this);
    this.sweetAlert123 = this.sweetAlert123.bind(this)
  }
  async updatePass(e) {

    const data = JSON.stringify({
      "password": this.state.pass
    })
    const config = {
      data: data,
      url: "trading/data/" + this.state.curUser + '/',
      method: "PATCH",
    }
    console.log("iqwertyud", e)
    var self = this

    await MAPI(config).then(function () {
      console.log("first");
      self.setState({ showPopup: false })
      // console.log(response)
      self.sweetAlert123()

    })
  }

  setPass(val) {
    this.setState({ pass: val })
  }
  handleMod(val) {
    this.setState({ showPopup: true })
    this.setState({ curUser: val })
  }
  sweetAlert123() {
    this.setState({ swt: true });

  }


  calculate = () => {

    const { selectUserId } = this.state
    const { date } = this.state
    const { date2 } = this.state

    if (selectUserId == '') {

      alert('Please Select User');
      return;

    } else if (date == '') {

      alert('Please Select From Date');
      return;

    } else if (date2 == '') {

      alert('Please Select To Date');
      return;

    }
    else {

      fetch(`https://rtrading.thinkzyproducts.com/api/api/databydate`, {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: selectUserId,
          date_from: `${moment(date).format('YYYY-MM-DD')} 00:00:01`,
          date_to: `${moment(date2).format('YYYY-MM-DD')} 23:59:59`,
        })
      }).then((response) => response.json())
        .then((responseJson) => {

          var value = responseJson.DATA;
          value = parseFloat(value).toFixed(2);

          this.setState({ TOTAL: value })

        })
        .catch((error) => {
          console.log(error)
        });

    }
  }


  render() {
    const { TOTAL } = this.state;
    return (
      <Row>

        <Modal
          isOpen={this.state.modalopen}
          toggle={this.tog_static}
          backdrop="static"
        >
          <ModalHeader toggle={() => this.setState({ modalopen: false, TOTAL: '', date: '', date2: '' })}>
            P/L By Date
          </ModalHeader>
          <ModalBody>



            <h6 style={{ fontWeight: 'bold' }}>Please Select Date From:</h6><Datepicker
              className="form-control"
              placeholderText="Date From"
              selected={this.state.date}
              onChange={date => this.setState({ date })}
              dateFormat='yyyy/MM/dd'

            />

            <div style={{ marginTop: 30, marginBottom: 30 }}></div>

            <h6 style={{ fontWeight: 'bold' }}>Please Select Date To:</h6><Datepicker
              className="form-control"
              placeholderText="Date From"
              selected={this.state.date2}
              onChange={date2 => this.setState({ date2 })}
              dateFormat='yyyy/MM/dd'

            />

            <div style={{ marginTop: 30, marginBottom: 30 }}></div>


            <h4 style={{ fontWeight: 'bold' }}>P/L : <span style={{ color: 'blue' }}>{TOTAL}</span></h4>



            <ModalFooter>
              <Button type="button" color="light" onClick={() => this.setState({ modalopen: false, TOTAL: '', date: '', date2: '' })} >Close</Button>
              <Button type="button" color="primary" onClick={() => this.calculate()}>Calculate</Button>

            </ModalFooter>
          </ModalBody>
        </Modal>

        {this.state.swt ? <SweetAlert
          title="Password has been changed."
          timeout={2000}
          style={{
            position: "absolute",
            top: "0px",
            right: "0px"
          }}
          showCloseButton={false}
          showConfirm={false}
          success
          onConfirm={() => this.setState({ swt: false })}

        ></SweetAlert> : <></>}
        {this.state.success_msg ? (
          <SweetAlert
            title="Client Deleted"
            success

            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => this.setState({ success_msg: false })}
            onCancel={() => this.setState({ success_msg: false })}
          >
            You clicked the button!
                          </SweetAlert>
        ) : null}
        <Col xs={12}>
          <Card>
            <CardBody>
              <TabPane tabId="5" className="p-3">
                <Row>
                  <Col sm="12">
                    <CardText>
                      <div className="table-responsive">
                        <Table className="mb-0">
                          <thead>
                            <tr>
                              <th>
                                <h4
                                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                                >
                                  {this.props.title}
                                </h4>
                              </th>
                            </tr>

                            <>
                              <tr>
                                {this.props.tableHeaders.map((header) => (
                                  <th
                                    key={header}
                                    style={{
                                      width: 80,
                                      fontFamily: "sans-serif",
                                      backgroundColor: "black",
                                      color: "white",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    {header}
                                  </th>

                                ))}
                              </tr>

                              {this.props.data.map((client, i) => (
                                <tr key={Math.random()}>
                                  <th
                                    style={{ fontFamily: "sans-serif", fontWeight: '800', borderBottomWidth: 1, borderBottomColor: 'black' }}
                                    key={i}>
                                    {i + 1}
                                  </th>

                                  {Object.values(client).map(
                                    (fieldValue, j) => {
                                      {
                                        if (j === 0 || j === 1) {
                                          return "";
                                        }
                                      }
                                      return (
                                        <th
                                          style={{ fontFamily: "sans-serif", fontWeight: '800', borderBottomWidth: 1, borderBottomColor: 'black' }}
                                          key={Math.random()}
                                        >
                                          {fieldValue}
                                        </th>
                                      );
                                    }
                                  )}

                                  <th style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                    <Button
                                      key={Math.random()}
                                      style={{ backgroundColor: "green", color: "white" }}
                                      onClick={() => {

                                        this.handleMod(Object.values(client)[0])
                                      }}
                                    >
                                      Modify
                                    </Button>
                                  </th>
                                  <th style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                    <Button
                                      style={{ backgroundColor: "red", color: "white" }}

                                      onClick={() => {
                                        var config = {
                                          method: "DELETE",
                                          url: "api/delete_users/" + Object.values(client)[0],

                                        }
                                        MAPI(config).then((response) => {
                                          console.log("Delete msg ", response);
                                          this.setState({ success_msg: true })
                                          this.props.updateData();

                                        });
                                      }}
                                    >
                                      DELETE
                                    </Button>
                                  </th>
                                  <th style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                    <img onClick={() => this.setState({ selectUserId: Object.values(client)[0], modalopen: true })} style={{ cursor: 'pointer', backgroundColor: 'black', padding: 10, borderRadius: 10 }} src={'https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-18.jpg'} height={40} width={40} />
                                  </th>
                                </tr>
                              ))}
                              <UpdatePassword trigged={this.state.showPopup} setPass={this.setPass.bind(this)}>
                                {console.log("wroked hereqwert", this.props.data)}


                                <Button type="button" color="light" onClick={() => this.setState({ showPopup: false })}>Close</Button>
                                <Button type="button" color="primary" onClick={() => this.updatePass(this.props.data)}>Save</Button>

                              </UpdatePassword>
                            </>
                          </thead>
                        </Table>
                      </div>
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TableView;
