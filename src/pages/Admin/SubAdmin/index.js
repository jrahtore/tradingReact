import React from "react";
import CreateClients from "../CreateClients";
import ViewClients from "../ViewClients";
import { Container } from "reactstrap";
import { Button } from "reactstrap";
import ClientFund from "../ClientFund";
import Brokerage from "../Brokerage";
import { touch } from "redux-form";

class SubAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createSubAdmin: false,
      modifySubAdmin: false,
      data: {},
    };
  }

  createSubAdminHandler = () => {
    this.setState({ createSubAdmin: !this.state.createSubAdmin });
  };

  modifyHandler = (user) => {
    
    this.setState({ modifySubAdmin: !this.state.modifySubAdmin });
    this.setState({data: user})
    console.log("i got an userid ", this.state.data);
  };

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <h1>Sub Admin Panel</h1>
            {this.state.createSubAdmin && (
              <CreateClients backPanel={this.createSubAdminHandler} />
            )}
            {this.state.modifySubAdmin && (
              <CreateClients
                title="Modify Sub-Admin"
                {...this.state.data}
                modify={true}
                backPanel={this.modifyHandler}
              />
            )}
            {!this.state.modifySubAdmin && !this.state.createSubAdmin && (
              <div>
                <Button
                  style={{ marginBottom: "1rem" }}
                  onClick={this.createSubAdminHandler}
                  color="success"
                  className="waves-effect waves-light me-3"
                >
                  Create User
                </Button>
                <ViewClients modifyHandler={this.modifyHandler} />
                <ClientFund />
                <Brokerage />
              </div>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default SubAdmin;
