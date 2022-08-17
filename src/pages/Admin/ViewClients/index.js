import React from "react";
import TableView from "./TableView";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Api from "../Create_clientApi";

const tableHeaders = [
    "SL. NO",
    "USERNAME",
    "CITY",
    "BALANCE",
    "MODIFY",
    "DELETE",
    "P/L",
];
const url = "https://tradefever.org:8080/trading/get_users";

class ViewClients extends React.Component {
    constructor(props) {
        console.log("first", props)
        super(props);
        this.state = {
            modifyViewClients: false,
            breadcrumbItems: [
                // { title: "Trading", link: "/buttonPage" },
                { title: "Back", link: "/" },
            ],
            data: [],
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        let config = {
            method: "get",
            url: "/trading/trading_client?user_type=" + localStorage.getItem('user_type'),
        };
        Api(config)
            .then((response) => {

                let userdata = [];
                response.data.forEach((element) => {
                    console.log('TOTAL: ' + element.transaction.fields)
                    console.log('START............');
                    console.log(response.data);
                    userdata = [
                        ...userdata,
                        {
                            userid: element.id,
                            password: element.password,
                            username: element.username,
                            city: element.city,
                            balance: element.wallet.toFixed(2)
                        },
                    ];
                });
                console.log(userdata);
                this.setState({ data: userdata });
            })
            .catch(function(response) {
                console.log("I am the error..", response);
            });
    }


    componentDidMount() {
        setInterval(() => {
            this.fetchData();
        }, 2000);

    }
    modifyHandler = (user) => {

        this.setState({ modifyViewClients: !this.state.modifyViewClients });
        this.setState({ data: user })
        console.log("i got an userid ", this.state.data);
    };
    render() {
        console.log(this.props, "|sdfsdfsdf");

        return ( <
            React.Fragment >
            <
            div className = "page-content" >
            <
            Container fluid = { true } >
            <
            div style = {
                { backgroundColor: 'pink', padding: 20, marginBottom: 10 } } >
            <
            Breadcrumbs title = { this.props.title || "View Clients" }
            breadcrumbItems = { this.state.breadcrumbItems }
            /> <
            /div> <
            TableView title = { "View Clients" }
            tableHeaders = { tableHeaders }
            data = { this.state.data }
            modifyHandler = { this.modifyHandler }
            updateData = { this.fetchData }
            /> <
            /Container> <
            /div> <
            /React.Fragment>
        );
    }
}

export default ViewClients;