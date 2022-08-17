import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  ButtonToggle,
  ButtonGroup,
  ButtonToolbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Label,
  Input
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import NseFO from "../NseFO/NseFO";

class ButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems : [
        { title : "UI Elements", link : "#" },
        { title : "Buttons", link : "#" },
      ],
      check1 : true,
      check2 : false,
      check3 : false,
      radio1: true,
      radio2: false,
      radio3: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>

          {/* <Breadcrumbs title="Buttons" breadcrumbItems={this.state.breadcrumbItems} /> */}


            <Row>
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Trading</h4>
                    <p className="card-title-desc">TRADE FEVER</p>
                    <div className="button-items">
                      <Link to='/nseFO'><Button
                        color="primary"
                        className=" waves-effect waves-light mr-1"
                      >
                        NSE FO
                    </Button></Link>
                      
                    <Link to='/mcx'><Button
                        color="primary"
                        className=" waves-effect waves-light mr-1"
                      >
                        MCX
                    </Button></Link>
                     
                      
                      
                    </div>
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

export default ButtonPage;