import React from "react";
import FundForm from "./FundForm";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Container } from "reactstrap";
import Api from "../Create_clientApi";

class ClientFund extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        // { title: "Trading", link: "/buttonPage" },
        { title: "Back", link: "/" },
      ],
      data: []
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      url: "trading/trading_client"
    };
    Api(config)
      .then((response) => {
        console.log('I am lsit users ', response.data);
        this.setState({ data: response.data });
      })
      .catch(function (response) {
        console.log("I am the error..", response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <div style={{ backgroundColor: 'pink', padding: 20, marginBottom: 10 }}>
              <Breadcrumbs
                title={this.props.title || "Client Fund"}
                breadcrumbItems={this.state.breadcrumbItems}
              />
            </div>
            <FundForm data={this.state.data} />
          </Container>
        </div>
        ;
      </React.Fragment>
    );
  }
}

export default ClientFund;
