import React from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import CreateClientForm from "./CreateClientForm";
import { Container } from 'reactstrap';

class CreateClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        // { title: "Trading", link: "/buttonPage" },
        { title: "Back", link: "/" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <div style={{backgroundColor:'pink', padding:20, marginBottom:10}}>
              <Breadcrumbs
                title={this.props.title || "Create Client"}
                breadcrumbItems={this.state.breadcrumbItems}
              />
            </div>
            <div>
              <CreateClientForm
                auth_user_id={this.props.userid}
                username={this.props.username}
                password={this.props.password}
                city={this.props.city}
                user_type={this.props.user_type}
                modify={this.props.modify}
                backPanel={this.props.backPanel}
              />
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateClients;
