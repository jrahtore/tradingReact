import React from "react";
import TableView from "./TableView";
import {
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Api from '../Create_clientApi';
import MAPI from "../../../api_test";
import SweetAlert from "react-bootstrap-sweetalert";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';


const tableHeaders = ["SL. NO", "ADMIN ID", "ADMIN NAME", "MODIFY", "DELETE", "P/L"];

const AdminData = [
    { AdminID: "001", AdminName: "testing1" },
    { AdminID: "002", AdminName: "testing2" },
    { AdminID: "003", AdminName: "testing3" },
    { AdminID: "004", AdminName: "testing4" },
    { AdminID: "005", AdminName: "testing5" },
    { AdminID: "006", AdminName: "testing6" },
];
class ViewAdmins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromTime: '07:00',
            toTime: '07:00',
            nfofromTime: '07:00',
            nfotoTime: '07:00',
            modaltimeopennfo: false,
            modaltimeopen: false,
            success_msg: false,
            tt: 'History Clear Successfully',
            breadcrumbItems: [
                // { title: "Trading", link: "/buttonPage" },
                { title: "Back", link: "/" },
            ],
            data: [],
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.NFOTIME();
        this.MCXTIME();
        this.fetchData();
    }


    fetchData() {
        let config = {
            method: "get",
            url: "/trading/getusers",
        };
        Api(config)
            .then((response) => {
                console.log(response.data);
                let userdata = [];
                response.data.forEach((element) => {
                    userdata = [
                        ...userdata,
                        {
                            admin_id: element.id,
                            username: element.username,
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

    DELETEALLDATA = async() => {


        console.log('FILE UPLOAD PROCESSING....');
        const data = new FormData();

        const url = `https://rtrading.thinkzyproducts.com/api/api/deletealldata`;
        fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'multipart/form-data',
                },
                body: data
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ tt: 'History Deleted', success_msg: true })
                return;
            })
    }

    MCXOPEN = async() => {
        const { fromTime, toTime } = this.state;

        fetch('https://rtrading.thinkzyproducts.com/api/api/mcxmarketOpen', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    timefrom: fromTime,
                    timeto: toTime,
                })
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log('---CHECK---');
                console.log(responseJson)
                this.setState({ tt: 'MCX MARKET TIME SET', success_msg: true })
                return;

            })
            .catch((error) => {
                alert(error);
            });
    }

    NFOOPEN = async() => {
        const { nfofromTime, nfotoTime } = this.state;

        fetch('https://rtrading.thinkzyproducts.com/api/api/nfomarketOpen', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    timefrom: nfofromTime,
                    timeto: nfotoTime,
                })
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log('---CHECK---');
                console.log(responseJson)
                this.setState({ tt: 'NFO MARKET TIME SET', success_msg: true })
                return;

            })
            .catch((error) => {
                alert(error);
            });
    }

    NFOTIME = async() => {
        const { nfofromTime, nfotoTime } = this.state;

        fetch('https://rtrading.thinkzyproducts.com/api/api/nfomarkettime', {

                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log('---CHECK123---');
                console.log(responseJson.Result)
                this.setState({ nfofromTime: responseJson.Result.timefrom, nfotoTime: responseJson.Result.timeto, })
                    // return;

            })
            .catch((error) => {
                alert(error);
            });
    }

    MCXTIME = async() => {
        const { nfofromTime, nfotoTime } = this.state;

        fetch('https://rtrading.thinkzyproducts.com/api/api/mcxmarkettime', {

                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log('---CHECK123---');
                console.log(responseJson.Result)
                this.setState({ fromTime: responseJson.Result.timefrom, toTime: responseJson.Result.timeto, })
                    // return;

            })
            .catch((error) => {
                alert(error);
            });
    }

    MCXCLOSE = async() => {


        console.log('FILE UPLOAD PROCESSING....');
        const data = new FormData();

        const url = `https://rtrading.thinkzyproducts.com/api/api/mcxmarket`;
        fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'multipart/form-data',
                },
                body: data
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ tt: 'MCX MARKET CLOSE', success_msg: true })
                return;
            })
    }



    NFOCLOSE = async() => {


        console.log('FILE UPLOAD PROCESSING....');
        const data = new FormData();

        const url = `https://rtrading.thinkzyproducts.com/api/api/nfomarket`;
        fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'multipart/form-data',
                },
                body: data
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ tt: 'NFO MARKET CLOSE', success_msg: true })
                return;
            })
    }

    SYMBOLS = async() => {

        fetch('https://fwp.jjw.mybluehostin.me//mcxNSEFO/test123/conn.php', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Headers': '*',
                },
                body: JSON.stringify({
                    test: 'hello'
                })
            }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({ tt: 'Reload Success', success_msg: true })
                return;
            })
            .catch((error) => {
                this.setState({ success_msg2: true })
            });

    }


    render() {
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
            Modal isOpen = { this.state.modaltimeopen }
            toggle = { this.tog_static }
            backdrop = "static" >
            <
            ModalHeader toggle = {
                () => this.setState({ modaltimeopen: false, TOTAL: '', date: '', date2: '' }) } >
            SET TIME FOR MCX MARKET <
            /ModalHeader> <
            ModalBody >



            <
            h6 style = {
                { fontWeight: 'bold' } } > Please Select Time From: < /h6>

            <
            TimePicker onChange = { fromTime => this.setState({ fromTime }) }
            value = { this.state.fromTime }
            />

            <
            div style = {
                { marginTop: 30, marginBottom: 30 } } > < /div>

            <
            h6 style = {
                { fontWeight: 'bold' } } > Please Select Time To: < /h6>

            <
            TimePicker onChange = { toTime => this.setState({ toTime }) }
            value = { this.state.toTime }
            />


            <
            div style = {
                { marginTop: 30, marginBottom: 30 } } > < /div>

            <
            ModalFooter >
            <
            Button type = "button"
            color = "light"
            onClick = {
                () => this.setState({ modaltimeopen: false, date: '', date2: '' }) } > Close < /Button> <
            Button type = "button"
            color = "primary"
            onClick = {
                () => this.MCXOPEN() } > Save < /Button>


            <
            /ModalFooter> <
            /ModalBody> <
            /Modal>

            <
            Modal isOpen = { this.state.modaltimeopennfo }
            toggle = { this.tog_static }
            backdrop = "static" >
            <
            ModalHeader toggle = {
                () => this.setState({ modaltimeopennfo: false, TOTAL: '', date: '', date2: '' }) } >
            SET TIME FOR NFO MARKET <
            /ModalHeader> <
            ModalBody >



            <
            h6 style = {
                { fontWeight: 'bold' } } > Please Select Time From: < /h6>

            <
            TimePicker onChange = { nfofromTime => this.setState({ nfofromTime }) }
            value = { this.state.nfofromTime }
            />

            <
            div style = {
                { marginTop: 30, marginBottom: 30 } } > < /div>

            <
            h6 style = {
                { fontWeight: 'bold' } } > Please Select Time To: < /h6>

            <
            TimePicker onChange = { nfotoTime => this.setState({ nfotoTime }) }
            value = { this.state.nfotoTime }
            />


            <
            div style = {
                { marginTop: 30, marginBottom: 30 } } > < /div>

            <
            ModalFooter >
            <
            Button type = "button"
            color = "light"
            onClick = {
                () => this.setState({ modaltimeopennfo: false, date: '', date2: '' }) } > Close < /Button> <
            Button type = "button"
            color = "primary"
            onClick = {
                () => this.NFOOPEN() } > Save < /Button>


            <
            /ModalFooter> <
            /ModalBody> <
            /Modal>

            <
            Breadcrumbs title = { this.props.title || "View Admins" }
            breadcrumbItems = { this.state.breadcrumbItems }
            /> <
            Button style = {
                { backgroundColor: "red", color: "white" } }
            onClick = {
                () => this.DELETEALLDATA() } >
            DELETE ALL HISTORY <
            /Button>

            <
            Button style = {
                { backgroundColor: "red", color: "white" } }
            onClick = {
                () => this.SYMBOLS() } >
            REFRESH SYMBOLS <
            /Button>

            <
            Button style = {
                { backgroundColor: "red", color: "white" } }
            onClick = {
                () => this.setState({ modaltimeopen: true }) } >
            MCX MARKET TIMINGS <
            /Button>

            {
                /* <Button
                                style={{ backgroundColor: "red", color: "white" }}
                                onClick={() => this.MCXCLOSE()}
                              >
                                MCX MARKET CLOSE
                               </Button> */
            }

            <
            Button style = {
                { backgroundColor: "red", color: "white" } }
            onClick = {
                () => this.setState({ modaltimeopennfo: true }) } >
            NFO MARKET TIMINGS <
            /Button>

            {
                /* <Button
                                style={{ backgroundColor: "red", color: "white" }}
                                onClick={() => this.NFOCLOSE()}
                              >
                                NFO MARKET CLOSE
                               </Button> */
            }

            {
                /* <Button
                                style={{ backgroundColor: "red", color: "white" }}
                                onClick={() => this.DELETEALLDATA()}
                              >
                                REFRESH SYMBOLS
                               </Button> */
            }

            {
                this.state.success_msg ? ( <
                    SweetAlert title = { this.state.tt }
                    success confirmBtnBsStyle = "success"
                    cancelBtnBsStyle = "danger"
                    onConfirm = {
                        () => this.setState({ success_msg: false }) }
                    onCancel = {
                        () => this.setState({ success_msg: false }) } >
                    You clicked the button!
                    <
                    /SweetAlert>
                ) : null
            }

            {
                this.state.success_msg2 ? ( <
                    SweetAlert title = { 'Your Data Is Refresh Please Check Your Search Now!' }
                    success confirmBtnBsStyle = "success"
                    cancelBtnBsStyle = "danger"
                    onConfirm = {
                        () => this.setState({ success_msg2: false }) }
                    onCancel = {
                        () => this.setState({ success_msg2: false }) } >
                    You clicked the button!
                    <
                    /SweetAlert>
                ) : null
            } <
            /div> <
            TableView title = { "View Admins" }
            tableHeaders = { tableHeaders }
            data = { this.state.data }
            modifyHandler = { this.props.modifyHandler }
            updateData = { this.fetchData }
            /> <
            /Container> <
            /div> <
            /React.Fragment>
        );
    }
}

export default ViewAdmins;