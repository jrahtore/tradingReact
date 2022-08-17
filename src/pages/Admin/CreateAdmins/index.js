import React from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import CreateAdminForm from "./CreateAdminForm";
import { Container } from 'reactstrap';

class CreateAdmins extends React.Component {
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
    console.log(this.props.adminName);
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <div style={{ backgroundColor: 'pink', padding: 20, marginBottom: 10 }}>
              <Breadcrumbs
                title={this.props.title || "Create Sub-Admin"}
                breadcrumbItems={this.state.breadcrumbItems}
              />
            </div>
            <div>
              <CreateAdminForm
                adminid={this.props.adminid}
                adminName={this.props.adminName}
                modify={true}
                backPanel={this.props.backPanel}
              />
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateAdmins;
