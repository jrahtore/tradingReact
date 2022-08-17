import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  console.log(JSON.stringify(values, 0, 2));
};

class TradingClients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Trading Clients", link: "#" },
        { title: "Create Trade Account", link: "#" },
      ],
      customchk: true,
      toggleSwitch: true,
    };

    let formData = {};
  }

  render() {
    return (
      <React.Fragment>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            ...this.formData,
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="page-content">
                <Container fluid>
                  <Breadcrumbs
                    title="Create Trader Account"
                    breadcrumbItems={this.state.breadcrumbItems}
                  />

                  <Row>
                    <Col xs={12}>
                      <Card>
                        <CardBody>
                          <h4 className="card-title">Personal Details</h4>
                          {/* <p className="card-title-desc">Here are examples of <code>.form-control</code> applied to each
                                            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p> */}

                          <Row className="mb-3">
                            <Label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                            >
                              Name
                            </Label>
                            <Col md={10}>
                              <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Name"
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Label
                              htmlFor="example-tel-input"
                              className="col-md-2 col-form-label"
                            >
                              Mobile
                            </Label>
                            <Col md={10}>
                              <Field
                                name="mobile"
                                component="input"
                                type="tel"
                                placeholder="1-(555)-555-5555"
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Label
                              className="col-md-2 col-form-label"
                              htmlFor="validationTooltipUsername"
                            >
                              Username
                            </Label>

                            <Col md={10}>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <span
                                    className="input-group-text"
                                    id="validationTooltipUsernamePrepend"
                                  >
                                    @
                                  </span>
                                </InputGroupAddon>

                                <Field 
                                  name="username"
                                  component="input"
                                  type="text"
                                  placeholder="Username"
                                />
                              </InputGroup>
                            </Col>
                          </Row>
                          <Row className="mb-3">
                            <Label
                              htmlFor="example-password-input"
                              className="col-md-2 col-form-label"
                            >
                              Password
                            </Label>
                            <Col md={10}>
                              <Field
                                name="password"
                                component="input"
                                type="password"
                                defaultValue="hunter2"
                              />
                            </Col>
                          </Row>
                          <Row className="mb-3">
                            <Label
                              htmlFor="example-number-input"
                              className="col-md-2 col-form-label"
                            >
                              Credit Limit
                            </Label>
                            <Col md={10}>
                              <Field
                                name="creditLimit"
                                component="input"
                                type="number"
                                placeholder="42"
                              />
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Label
                              htmlFor="validationCustom03"
                              className="col-md-2 col-form-label"
                            >
                              City
                            </Label>
                            <Col md={10}>
                              <Field
                                name="city"
                                component="input"
                                type="text"
                                placeholder="Rajstan"
                              />
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <Card>
                        <CardBody>
                          <h4 className="card-title  mb-4">Config</h4>

                          <Row>
                            <Col md={6}>
                              <div>
                                <div className="form-check mb-3">

                                  <Field
                                    className="form-check-input"
                                    name="config1"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />

                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck1"
                                  >
                                    demo account?
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config2"
                                    component="input"
                                    type="checkbox"
                                    value="Allow Fresh Entry Order above high & below
                                    low"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck2"
                                  >
                                    Allow Fresh Entry Order above high & below
                                    low?
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config3"
                                    component="input"
                                    type="checkbox"
                                    value="Auto-close trades if losses cross beyond the
                                    configured limit"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck3"
                                  >
                                    Auto-close trades if losses cross beyond the
                                    configured limit
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config4"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck4"
                                  >
                                    Allow Orders between High-Low?
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config5"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck5"
                                  >
                                    Trade equity as units instead of lots.
                                  </Label>
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    auto-Close all active trades when the losses
                                    reach % of Ledger-balance
                                  </Label>
                                  <Field
                                    className="form-check-input"
                                    name="config6"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config7"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck6"
                                  >
                                    Allow orders at current Bid/Ask price
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config8"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck7"
                                  >
                                    One side brokerage for intraday trades
                                    (Higher side)
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config9"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck8"
                                  >
                                    Auto-close trades if insufficient fund to
                                    hold overnight
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config10"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck9"
                                  >
                                    Trigger orders at New High-Low rates Instead
                                    of Bid-Ask?
                                  </Label>
                                </div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="config11"
                                    component="input"
                                    type="checkbox"
                                    value="demo account"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck10"
                                  >
                                    Account Status
                                  </Label>
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Notify client when the losses reach % of
                                    Ledger-balance
                                  </Label>
                                  <Field
                                    name="config12"
                                    component="input"
                                    type="text"
                                    defaultValue="70"
                                  />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <Card>
                        <CardBody>
                          <h4 className="card-title  mb-4">MCX Features</h4>

                          <Row>
                            <Col md={6}>
                              <div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="mcxFeature1"
                                    component="input"
                                    type="checkbox"
                                    value="MCX Trading"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck1"
                                  >
                                    MCX Trading
                                  </Label>
                                </div>

                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Minimum lot size allowed per single trade of
                                    MCX
                                  </Label>
                                  <Field
                                    className="form-check-input"
                                    name="mcxFeature2"
                                    component="input"
                                    type="checkbox"
                                    value="Minimum lot size allowed per single trade of
                                    MCX"
                                  />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Max Size All Commodity
                                  </Label>
                                  <Field
                                    className="form-check-input"
                                    name="mcxFeature3"
                                    component="input"
                                    type="checkbox"
                                    value="Max Size All Commodity"
                                  />
                                </div>
                                <div>
                                  <FormGroup row className="mb-0">
                                    <Label className="form-label">
                                      Exposure Mcx Type
                                    </Label>
                                    <Col md={10}>
                                      <select className="form-select">
                                        <option defaultValue>
                                          SELECT MARGIN/EXPOSURE CALCULATION
                                        </option>
                                        <option value="Per Turnover Basis">
                                          Per Turnover Basis
                                        </option>
                                        <option value="Per Lot Basis">
                                          Per Lot Basis
                                        </option>
                                      </select>
                                    </Col>
                                  </FormGroup>
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Minimum lot size required per single trade
                                    of MCX
                                  </Label>
                                  <Field
                                    className="form-check-input"
                                    name="mcxFeature4"
                                    component="input"
                                    type="checkbox"
                                    value="Minimum lot size required per single trade
                                    of MCX"
                                  />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Maximum lot size allowed per script of MCX
                                    to be actively open at a time
                                  </Label>
                                  <Field
                                    className="form-check-input"
                                    name="mcxFeature5"
                                    component="input"
                                    type="checkbox"
                                    value="Maximum lot size allowed per script of MCX
                                    to be actively open at a time"
                                  />
                                </div>
                                <div>
                                  <FormGroup row className="mb-0">
                                    <Label className="form-label">
                                      MCX Brokerage Type
                                    </Label>
                                    <Col md={10}>
                                      <select className="form-select">
                                        <option defaultValue>
                                          SELECT BROKERAGE CALCULATION
                                        </option>
                                        <option value="Per Crore Basis">
                                          Per Crore Basis
                                        </option>
                                        <option value="Per Lot Basis">
                                          Per Lot Basis
                                        </option>
                                      </select>
                                    </Col>
                                  </FormGroup>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                        <CardBody>
                          <h4 className="card-title  mb-4">
                            Orders to be away by points in each script MCX:
                          </h4>

                          <Row>
                            <Col md={6}>
                              <div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    BULLDEX:
                                  </Label>
                                  <Field 
                                  name="BULLDEX"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    SILVER:
                                  </Label>
                                  <Field 
                                  name="SILVER"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    CRUDEOIL:
                                  </Label>
                                  <Field 
                                  name="CRUDEOIL"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    COPPER:
                                  </Label>
                                  <Field 
                                  name="COPPER"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    ZINC:
                                  </Label>
                                  <Field 
                                  name="ZINC"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    NATURALGAS:
                                  </Label>
                                  <Field 
                                  name="NATURALGAS"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    MENTHAOIL:
                                  </Label>
                                  <Field 
                                  name="MENTHAOIL"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    GOLD-MINI:
                                  </Label>
                                  <Field 
                                  name="GOLD_MINI"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    GOLD:
                                  </Label>
                                  <Field 
                                  name="GOLD"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    NICKEL:
                                  </Label>
                                  <Field 
                                  name="NICKEL"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    LEAD:
                                  </Label>
                                  <Field 
                                  name="LEAD"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    ALUMINIUM:
                                  </Label>
                                  <Field 
                                  name="ALUMINIUM"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    COTTON:
                                  </Label>
                                  <Field 
                                  name="COTTON"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    CPO:
                                  </Label>
                                  <Field 
                                  name="CPO"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    SILVER_MINI:
                                  </Label>
                                  <Field 
                                  name="SILVER_MINI"
                                  component="input"
                                  type="number"
                                  placeholder="Username"
                                />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Card>
                        <CardBody>
                          <h4 className="card-title  mb-4">Equity Features</h4>

                          <Row>
                            <Col md={6}>
                              <div>
                                <div className="form-check mb-3">
                                <Field
                                    className="form-check-input"
                                    name="EquityFeatures"
                                    component="input"
                                    type="checkbox"
                                    value="Equity Trading"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="defaultCheck1"
                                  >
                                    Equity Trading
                                  </Label>
                                </div>

                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Maximum lot size allowed per single trade of
                                    Equity
                                  </Label>
                                  <Field 
                                  name="EquityTrading1"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Maximum lot size allowed per single trade of
                                    Equity INDEX
                                  </Label>
                                  <Field 
                                  name="EquityTrading2"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>

                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Maximum lot size allowed per script of
                                    Equity INDEX to be actively open at a time
                                  </Label>
                                  <Field 
                                  name="EquityTrading3"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Max Size All Index
                                  </Label>
                                  <Field 
                                  name="EquityTrading4"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>

                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Intraday Exposure/Margin Equity
                                  </Label>
                                  <Field 
                                  name="EquityTrading5"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Orders to be away by % from current price
                                    Equity
                                  </Label>
                                  <Field 
                                  name="EquityTrading6"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div>
                                <div>
                                  <FormGroup row className="mb-0">
                                    <Label className="form-label">
                                      Equity Brokerage Type
                                    </Label>
                                    <Col md={10}>
                                      <select className="form-select">
                                        <option defaultValue>
                                          SELECT Brokerage Calculation type
                                        </option>
                                        <option value="Per Crore Basis">
                                          Per Crore Basis
                                        </option>
                                        <option value="Per Lot Basis">
                                          Per Lot Basis
                                        </option>
                                      </select>
                                    </Col>
                                  </FormGroup>
                                </div>

                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Minimum lot size required per single trade
                                    of Energy
                                  </Label>
                                  <Field 
                                  name="EquityTrading7"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Minimum lot size required per single trade
                                    of Equity INDEX
                                  </Label>
                                  <Field 
                                  name="EquityTrading8"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Maximum lot size allowed per script of
                                    Equity to be actively at a time
                                  </Label>
                                  <Field 
                                  name="EquityTrading9"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Max Size All Equity
                                  </Label>
                                  <Field 
                                  name="EquityTrading10"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Orders to be away by % from current price
                                    Equity
                                  </Label>
                                  <Field 
                                  name="EquityTrading11"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Holding Exposure/Margin Equity
                                  </Label>
                                  <Field 
                                  name="EquityTrading12"
                                  component="input"
                                  type="number"
                                  placeholder="95"
                                />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Card>
                        <CardBody>
                          <h4 className="card-title  mb-4">Others</h4>

                          <Row>
                            <Col md={6}>
                              <div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom11"
                                  >
                                    Notes
                                  </Label>
                                  <Field 
                                  name="Note"
                                  component="input"
                                  type="text"
                                  placeholder="write something"
                                />
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="validationCustom10"
                                  >
                                    Password
                                  </Label>
                                  <Field 
                                  name="typePassword"
                                  component="input"
                                  type="password"
                                  placeholder="pasword95"
                                />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <div className="button-items">
                        <Button color="secondary" className="waves-effect">
                          Cancel
                        </Button>
                        <Button
                          color="success"
                          className="waves-effect waves-light me-1"
                          type="submit"
                        >
                          Create
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </form>
          )}
        />
      </React.Fragment>
    );
  }
}

export default TradingClients;
