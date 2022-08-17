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
} from "reactstrap";
class TableView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
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
                                <h3 style={{ color: "#000" }}>
                                 {this.props.title}
                                </h3>
                              </th>
                            </tr>

                            <>
                              <tr>
                                {this.props.tableHeaders.map((header) => (
                                  <th
                                    key={header}
                                    style={{
                                      color: "black",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                              {this.props.data.map((client, i) => (
                                <tr key={Math.random()}>
                                  {Object.values(client).map(
                                    (fieldValue, j) => {
                                      return (
                                        <th
                                          style={{ color: "#A5A7A8" }}
                                          key={Math.random()}
                                        >
                                          {fieldValue}
                                        </th>
                                      );
                                    }
                                  )}
                                </tr>
                              ))}
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
