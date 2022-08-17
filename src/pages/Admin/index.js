import React from "react";
import CreateClients from "./CreateClients";
import CreateAdmins from "./CreateAdmins";
import ViewClients from "./ViewClients";
import ViewAdmins from "./ViewAdmins";
import { Container } from "reactstrap";
import { Button } from "reactstrap";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createAdmin: false,
      modifyAdmin: false,
    };
  }

  createAdminHandler = () => {
    this.setState({ createAdmin: !this.state.createAdmin });
  };

  modifyHandler = () => {
      this.setState({modifyAdmin: !this.state.modifyAdmin });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <h1>Admin Panel</h1>
            {this.state.createAdmin && <CreateAdmins backPanel={this.createAdminHandler} />}
            {this.state.modifyAdmin && <CreateAdmins title="Modify Admin" adminid="1" adminName="Mamun" modify={true} backPanel={this.modifyHandler} />}
            {!this.state.modifyAdmin && !this.state.createAdmin && (
              <div>
                <Button
                  style={{ marginBottom: "1rem" }}
                  onClick={this.createAdminHandler}
                  color="success"
                  className="waves-effect waves-light me-3"
                  type="submit"
                >
                  Create Admin
                </Button>
                <ViewAdmins modifyHandler={this.modifyHandler}/>
              </div>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
