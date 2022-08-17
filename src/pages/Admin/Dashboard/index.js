import React from "react";
import TableView from "./TableView";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Api from '../Create_clientApi';

const tableHeaders = ["user_id", "sharename", "action", "quantity", "difference"];
// "sharename": "CRUDEOIL21SEPFUT",
// "amount": 5007.0,
// "difference": "0.00",
// "action": "SELL",
// "quantity": 1,
// "Close_amount": 5007.0
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        // { title: "Trading", link: "/buttonPage" },
        { title: "Back", link: "/" },
      ],
      data: [],
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      url: "/trading/list_users",
    };
    Api(config)
      .then((response) => {
        console.log(response.data);
        let userdata = [];
        response.data.forEach((element) => {
          userdata = [
            ...userdata,
            {
              user_id: element.Usertransaction.id,
              sharename: element.sharename,
              action: element.action,
              quantity: element.quantity,
              difference: element.difference
            },
          ];
        });
        console.log(userdata);
        this.setState({ data: userdata });
      })
      .catch(function (response) {
        console.log("I am the error..", response);
      });
    // fetch(url, {
    //   method: "get",
    // })
    //   .then((response) => {
    //     response.json().then((data) => {
    //       console.log(data);
    //       let userdata = [];
    //       data.forEach(element => {
    //         userdata = [...userdata, { userid: element.id, password: element.password, username: element.username, city: element.city, user_type: element.user_type, balance: 0, total_amount: 0 }]

    //       });
    //       console.log(userdata);
    //       this.setState({ data: userdata})

    //     });
    //   })
    //   .catch(function (response) {
    //     console.log("I am the error..", response);
    //   });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <Breadcrumbs
              title={this.props.title || "Dashboard"}
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <TableView
              title={"Dashboard"}
              tableHeaders={tableHeaders}
              data={this.state.data}
              modifyHandler={this.props.modifyHandler}
            />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
