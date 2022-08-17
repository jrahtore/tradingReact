import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {
    Table,
    TabContent,
    TabPane,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Card,
    CardBody,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    ButtonDropdown,
    Container,
    ButtonGroup,
    Input,
    Label,
    NavLink,
    NavItem,
    CardText,
    Nav,
} from "reactstrap";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import moment from 'moment'
//Import Breadcrumb
import {
    MDBDataTable,
    MDBInput,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBDataTableV5,
} from "mdbreact";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import API from "../../api_nfo";
import MAPI from "../../api_test";
import MCXAPI from "../../api_mcx";
import { Alert } from "reactstrap";
import classnames from "classnames";
import { AutoScaleAxis } from "chartist";
import TableNSEFO from "./TableNSEFO";
import "./Nsefo.css";

class NseFO extends Component {



    removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    popupHtml() {
            return ( <
                    div id = "DIV_1"
                    style = { mystyle.DIV_1 }
                    style = {
                        { textAlign: "-webkit-center", backgroundColor: "rgb(229, 231, 235)" } } >
                    <
                    div id = "DIV_2"
                    style = { mystyle.DIV_2 } >
                    <
                    div id = "DIV_3"
                    style = { mystyle.DIV_3 } >

                    {
                        this.state.doneStatus ?
                        <
                        Alert color = "success" >
                        Successfull!!
                        <
                        /Alert>:<></ >
                    } <
                    /div> <
                    br > < /br> { /* style={mystyle.DIV_9} for div id _9 just down  */ } <
                    div id = "DIV_9"
                    style = { mystyle.DIV_9 } > {
                        (this.state.currentTrade != "" && this.state.response12[this.state.currentTrade] !== 'undefined') ?
                        this.state.response12[this.state.currentTrade] ? .symbol : < > < />} <
                        /div> {
                            /* <div id="DIV_10"  onClick={() => this.setState({ modal_small: false })}>
                                    <button type="button" className="btn btn-primary float-right btn-sm " data-dismiss="modal">Close</button>
                                    </div> */
                        } <
                        /div> <
                        br > < /br> <
                        div id = "DIV_13"
                        className = "firstrow"
                        style = { mystyle.DIV_13 } > < br > < /br> <
                        div id = "DIV_14"
                        style = { mystyle.DIV_14 } >

                        <
                        span id = "SPAN_15"
                        style = { mystyle.SPAN_15 } > Buy < /span> {
                            this.state.currentTrade != "" ?
                                <
                                span id = "SPAN_16"
                            style = { mystyle.SPAN_16 } > {
                                    this.state.response12[this.state.currentTrade] ? .buy == 0 ? < > { this.state.response12[this.state.currentTrade] ? .last_price } < />:<>{this.state.response12[this.state.currentTrade]?.buy}</ >
                                } <
                                /span>

                            : < > < />} <
                            /div> <
                            div id = "DIV_17"
                            style = { mystyle.DIV_17 } >
                                <
                                div id = "DIV_18"
                            style = { mystyle.DIV_18 } >
                                <
                                svg id = "svg_19"
                            style = { mystyle.svg_19 } >

                                <
                                /svg><span id="SPAN_21" style={mystyle.SPAN_21}>LTP:  {
                                    this.state.currentTrade != "" ? < > { this.state.response12[this.state.currentTrade] ? .last_price } <
                                        />:<></ >
                                } { /* <></> */ } <
                                /span> <
                                svg id = "svg_22"
                            style = { mystyle.svg_22 } > {
                                    /* <path id="path_23" style={mystyle.path_23}>
                                                  </path> */
                                } <
                                /svg> <
                                /div> <
                                /div> <
                                div id = "DIV_24"
                            style = { mystyle.DIV_24 } > {
                                    this.state.currentTrade != "" ? < >


                                    <
                                    span id = "SPAN_16"
                                    style = { mystyle.SPAN_16 } > {
                                        this.state.response12[this.state.currentTrade] ? .sell == 0 ? < > { this.state.response12[this.state.currentTrade] ? .last_price } < />:<>{this.state.response12[this.state.currentTrade]?.sell}</ >
                                    } <
                                    /span></ > : < > < />}

                                        <
                                        span id = "SPAN_26"
                                    style = { mystyle.SPAN_26 } > Sell < /span> <
                                    /div> <
                                    /div> <
                                    div id = "DIV_27"
                                    className = "firstrow" >
                                    <
                                    div id = "DIV_28" >
                                    <
                                    div id = "DIV_29" > {
                                        /* <div id="DIV_30" style={mystyle.DIV_30}>
                                                      Lots
                                                    </div> */
                                    } <
                                    /div> <
                                    div id = "DIV_31" >
                                    <
                                    div style = { mystyle.DIV_64 }
                                    className = "text-primary "
                                    id = "DIV_64" >
                                    <
                                    span style = { mystyle.SPAN_65 }
                                    id = "SPAN_65" > Stoploss < /span> <
                                    input type = "number"
                                    name = "stoploss"
                                    onChange = { this.setStoploss }
                                    style = { mystyle.SPAN_66 }
                                    id = "SPAN_66"
                                    value = { this.state.stoploss }
                                    /> <
                                    /div>

                                    {
                                        /* <Button
                                                            color="danger"
                                                            className="btn-rounded "
                                                          >
                                                            +
                                                        </Button> */
                                    }



                                    { /* <input type="tel" maxLength={6} id="INPUT_34" style={mystyle.INPUT_34} /> */ } {
                                        /* <Button
                                                            color="success"
                                                            className="btn-rounded waves-effect waves-light mr-1"
                                                          >
                                                            -
                                                        </Button> */
                                    } {
                                        /* <svg id="svg_35" style={mystyle.svg_35}>
                                                      <path id="path_36" style={mystyle.path_36}>
                                                      </path>
                                                    </svg> */
                                    } <
                                    div id = "DIV_37"
                                    style = { mystyle.DIV_37 } >
                                    <
                                    svg id = "svg_38"
                                    style = { mystyle.svg_38 } >
                                    <
                                    path id = "path_39"
                                    style = { mystyle.path_39 } >
                                    <
                                    /path> <
                                    /svg> <
                                    svg id = "svg_40"
                                    style = { mystyle.svg_40 } >
                                    <
                                    path id = "path_41"
                                    style = { mystyle.path_41 } >
                                    <
                                    /path> <
                                    /svg> <
                                    /div> <
                                    /div> <
                                    /div>

                                    <
                                    div id = "DIV_48"
                                    style = { mystyle.DIV_48 } >
                                    <
                                    div id = "DIV_49"
                                    style = { mystyle.DIV_49 } >
                                    <
                                    div id = "DIV_50"
                                    style = { mystyle.DIV_50 } >
                                    Quantity <
                                    /div> <
                                    /div> <
                                    div id = "DIV_51"
                                    style = { mystyle.DIV_51 } >
                                    <
                                    div id = "DIV_52"
                                    style = { mystyle.DIV_52 } >
                                    <
                                    svg id = "svg_53"
                                    style = { mystyle.svg_53 } >
                                    <
                                    path id = "path_54"
                                    style = { mystyle.path_54 } >

                                    <
                                    /path> <
                                    /svg> <
                                    input type = "tel"
                                    maxLength = { 6 }
                                    id = "INPUT_55"
                                    style = { mystyle.INPUT_55 }
                                    value = { this.state.quantity }
                                    onInput = {
                                        (e) => { this.handleQuantity(e) } }
                                    /> <
                                    svg style = { mystyle.svg_56 }
                                    id = "svg_56" >
                                    <
                                    path style = { mystyle.path_57 }
                                    id = "path_57" >

                                    <
                                    /path> <
                                    /svg> <
                                    div style = { mystyle.DIV_58 }
                                    id = "DIV_58" >
                                    <
                                    svg style = { mystyle.svg_59 }
                                    id = "svg_59" >
                                    <
                                    path style = { mystyle.path_60 }
                                    id = "path_60" >
                                    <
                                    /path> <
                                    /svg> <
                                    svg style = { mystyle.svg_61 }
                                    id = "svg_61" >
                                    <
                                    path style = { mystyle.path_62 }
                                    id = "path_62" >
                                    <
                                    /path> <
                                    /svg> <
                                    /div> <
                                    /div> <
                                    /div>

                                    <
                                    /div> <
                                    div id = "DIV_24"
                                    style = { mystyle.DIV_24 } >
                                    <
                                    input type = "number"
                                    name = "target"
                                    id = "SPAN_25"
                                    onChange = { this.setTarget }
                                    style = { mystyle.SPAN_25 }
                                    value = { this.state.target }
                                    /><span id="SPAN_26" style={mystyle.SPAN_26}>Target</span >
                                    <
                                    /div> <
                                    /div> <
                                    br > < /br> <
                                    div className = "firstrow"
                                    style = { mystyle.DIV_63 }
                                    id = "DIV_63" >
                                    <
                                    div style = { mystyle.DIV_64 }
                                    id = "DIV_64" >
                                    <
                                    span style = { mystyle.SPAN_65 }
                                    id = "SPAN_65" > High < /span>

                                    {
                                        this.state.currentTrade != "" ?
                                            <
                                            span style = { mystyle.SPAN_66 }
                                        id = "SPAN_66" > { this.state.response12[this.state.currentTrade] ? .high } < /span>: < > < />} {
                                            /* <span id="SPAN_65" style={mystyle.SPAN_65}>High</span>
                                                      {this.state.response12[this.state.currentTrade]?
                                                      <span id="SPAN_66" style={mystyle.SPAN_65}>{this.state.response12[this.state.currentTrade]?.high}</span>
                                                      :<></>} */
                                        }

                                        <
                                        /div> <
                                        div style = { mystyle.DIV_67 }
                                        id = "DIV_67" >
                                            <
                                            div style = { mystyle.DIV_68 }
                                        id = "DIV_68" >
                                            <
                                            div style = { mystyle.DIV_69 }
                                        id = "DIV_69" > { /* <span style={mystyle.SPAN_70} id="SPAN_70"><span style={mystyle.SPAN_71} id="SPAN_71">Market</span><span style={mystyle.SPAN_72} id="SPAN_72">Limit</span></span><span style={mystyle.SPAN_73} id="SPAN_73"><span style={mystyle.SPAN_74} id="SPAN_74">Limit</span><span style={mystyle.SPAN_75} id="SPAN_75">Market</span></span> */ } <
                                            div >
                                            <
                                            input type = "radio"
                                        value = "Method"
                                        name = "gender" / > Market <
                                            input type = "radio"
                                        value = "Order"
                                        name = "gender" / > Order <
                                            /div> <
                                            /div> <
                                            /div> <
                                            div style = { mystyle.DIV_76 }
                                        id = "DIV_76" >
                                            <
                                            div style = { mystyle.DIV_77 }
                                        id = "DIV_77" >
                                            <
                                            div style = { mystyle.DIV_78 }
                                        id = "DIV_78" >
                                            Price <
                                            /div> <
                                            input type = "tel"
                                        maxLength = { 7 }
                                        placeholder = "Enter Price"
                                        style = { mystyle.INPUT_79 }
                                        id = "INPUT_79" / >
                                            <
                                            /div> <
                                            /div> <
                                            /div> <
                                            div style = { mystyle.DIV_80 }
                                        id = "DIV_80" > {
                                            this.state.currentTrade != "" ?
                                            <
                                            span style = { mystyle.SPAN_81 }
                                            id = "SPAN_81" > { this.state.response12[this.state.currentTrade] ? .low } < /span> :
                                                < > < />}

                                                <
                                                span style = { mystyle.SPAN_82 }
                                            id = "SPAN_82" > Low < /span> <
                                            /div> <
                                            /div> <
                                            br > < /br> <
                                            div style = { mystyle.DIV_83 }
                                            id = "DIV_83" >
                                            <
                                            /div> <
                                            div style = {
                                                {} } >
                                            <
                                            div id = "DIV_10"
                                            onClick = {
                                                () => this.setState({ modal_small: false }) } >
                                            <
                                            button type = "button"
                                            className = "btn btn-primary float-right btn-sm "
                                            data - dismiss = "modal" > Close < /button> <
                                            /div> <
                                            div className = "trade" >
                                            <
                                            Button
                                            color = "primary"
                                            style = {
                                                { backgroundColor: 'red' } }
                                            className = " waves-effect waves-light mr-1"
                                            onClick = {
                                                () => this.getSymbol(this.state.response12[this.state.currentTrade] ? .buy, this.state.currentTrade, "transactionsell", this.state.stoploss === "" ? 0 : this.state.stoploss, this.state.target) } >
                                            Sell <
                                            /Button>


                                            <
                                            Button
                                            color = "light"
                                            style = {
                                                { backgroundColor: 'green', color: 'white' } }
                                            className = "waves-effect mr-1"
                                            onClick = {
                                                () => this.getSymbol(this.state.response12[this.state.currentTrade] ? .sell, this.state.currentTrade, "transactionbuy", this.state.stoploss, this.state.target) } >
                                            Buy <
                                            /Button> <
                                            /div> <
                                            /div>

                                            <
                                            div style = { mystyle.DIV_89 }
                                            id = "DIV_89" >
                                            <
                                            div style = { mystyle.DIV_90 }
                                            id = "DIV_90" > {
                                                /* <div style={mystyle.DIV_91} id="DIV_91">
                                                            <span style={mystyle.SPAN_92} id="SPAN_92">Last Trading Price</span>
                                                            <div style={mystyle.DIV_93} id="DIV_93">
                                                              Last Trade
                                                            </div>
                                                          </div> */
                                            } {
                                                /* <div style={mystyle.DIV_94} id="DIV_94">
                                                          </div> */
                                            } <
                                            /div> {
                                                /* <div style={mystyle.DIV_95} id="DIV_95">
                                                          <div style={mystyle.DIV_96} id="DIV_96">
                                                            Volume
                                                          </div>
                                                          <div style={mystyle.DIV_97} id="DIV_97">
                                                            1530
                                                          </div>
                                                        </div> */
                                            } <
                                            div style = { mystyle.DIV_98 }
                                            id = "DIV_98" >
                                            <
                                            div style = { mystyle.DIV_99 }
                                            id = "DIV_99" > { /* <span style={mystyle.SPAN_100} id="SPAN_100">Average Trading Price</span><span style={mystyle.SPAN_101} id="SPAN_101">Avg Trade</span> */ } <
                                            /div> {
                                                /* <div style={mystyle.DIV_102} id="DIV_102">
                                                            13565
                                                          </div> */
                                            } <
                                            /div> <
                                            div style = { mystyle.DIV_103 }
                                            id = "DIV_103" > {
                                                /* <div style={mystyle.DIV_104} id="DIV_104">
                                                            Open Price
                                                          </div> */
                                            } {
                                                /* <div style={mystyle.DIV_105} id="DIV_105">
                                                            35712
                                                          </div> */
                                            } <
                                            /div> <
                                            div style = { mystyle.DIV_106 }
                                            id = "DIV_106" > {
                                                /* <div style={mystyle.DIV_107} id="DIV_107">
                                                            Close Price
                                                          </div> */
                                            } {
                                                /* <div style={mystyle.DIV_108} id="DIV_108">
                                                            35865.6
                                                          </div> */
                                            } <
                                            /div> <
                                            div style = { mystyle.DIV_109 }
                                            id = "DIV_109" > {
                                                /* <div style={mystyle.DIV_110} id="DIV_110">
                                                            Open Interest
                                                          </div> */
                                            } {
                                                /* <div style={mystyle.DIV_112} id="DIV_111">
                                                            1978625
                                                          </div> */
                                            } <
                                            /div> <
                                            div style = { mystyle.DIV_112 }
                                            id = "DIV_112" > {
                                                /* <div style={mystyle.DIV_113} id="DIV_113">
                                                            <span style={mystyle.SPAN_114} id="SPAN_114">Total Buy Quantity</span><span style={mystyle.SPAN_115} id="SPAN_115">Buy Qty</span>
                                                          </div> */
                                            } {
                                                /* <div style={mystyle.DIV_116} id="DIV_116">
                                                            25
                                                          </div> */
                                            } <
                                            /div> <
                                            div style = { mystyle.DIV_117 }
                                            id = "DIV_117" > {
                                                /* <div style={mystyle.DIV_118} id="DIV_118">
                                                            Lot Size
                                                          </div>
                                                          <div style={mystyle.DIV_119} id="DIV_119">
                                                            25
                                                          </div> */
                                            } <
                                            /div> <
                                            div style = { mystyle.DIV_120 }
                                            id = "DIV_120" >
                                            <
                                            div style = { mystyle.DIV_121 }
                                            id = "DIV_121" > { /* <span style={mystyle.SPAN_122} id="SPAN_122">Total Sell Quantity</span><span style={mystyle.SPAN_123} id="SPAN_123">Sell Qty</span> */ } <
                                            /div> <
                                            div style = { mystyle.DIV_124 }
                                            id = "DIV_124" >
                                            25 <
                                            /div> <
                                            /div> <
                                            div style = { mystyle.DIV_125 }
                                            id = "DIV_125" >
                                            <
                                            div style = { mystyle.DIV_126 }
                                            id = "DIV_126" > { /* <span style={mystyle.SPAN_127} id="SPAN_127">Last Updated Time</span><span style={mystyle.SPAN_128} id="SPAN_128">Updated<i style={mystyle.I_129} id="I_129" /></span> */ } <
                                            /div> <
                                            div style = { mystyle.DIV_130 }
                                            id = "DIV_130" >
                                            15: 09: 14 <
                                                /div> <
                                                /div> <
                                                div style = { mystyle.DIV_131 }
                                            id = "DIV_131" >
                                            <
                                            div style = { mystyle.DIV_132 }
                                            id = "DIV_132" >
                                            Expiry <
                                            /div> <
                                            div style = { mystyle.DIV_133 }
                                            id = "DIV_133" >
                                            2021 - 07 - 29 <
                                            /div> <
                                            /div> <
                                            div style = { mystyle.DIV_134 }
                                            id = "DIV_134" >
                                            <
                                            div style = { mystyle.DIV_135 }
                                            id = "DIV_135" >
                                            <
                                            /div> <
                                            div style = { mystyle.DIV_138 }
                                            id = "DIV_138" >
                                            -1.4 %
                                            <
                                            /div> <
                                            /div> <
                                            /div> <
                                            /div>
                                        );
                                    }

                                    brokrage() {



                                        var raw = "";

                                        var config = {
                                            method: 'GET',

                                            url: "trading/Brokerage_detail/",
                                            body: raw,
                                            redirect: 'follow',

                                        };

                                        MAPI(config)
                                            .then(result =>
                                                this.setState({ brokrage_Amount: result.data[0].Brokerage_amount }))
                                            .catch(error => console.log('error', error));

                                    }

                                    async nseFODataFunc() {

                                        var str = localStorage.getItem("nseFO")
                                        console.log("value of nsefo str", str)
                                        if (str === undefined) {
                                            str = "";
                                        }
                                        console.log("nseFO", this.state.nseFOData);
                                        console.log("brokrageamount", this.state.brokrage_Amount)
                                        console.log("her is value of close amount in nsefoapi", this.state.currentTrade)
                                        console.log("her is value of updated walllet", this.state.wallet)
                                        var config = {
                                            method: "GET",
                                            url: str,
                                        };

                                        var self = this;
                                        await API(config)
                                            .then((response) => {
                                                var val = 0;

                                                if (response.data.data != "" && response.data.data != "{}") {
                                                    this.setState({ response12: response.data.data }, () => { console.log("TEst first main", this.state.response12) });
                                                } else {
                                                    this.setState({ response12: {} });
                                                }
                                                this.getWallets();

                                                Object.values(this.state.tranactionsNotClosed).map((bl, index) => {
                                                    if (this.state.response14[bl.sharename]) {
                                                        val = val + (bl.action == 'BUY' ? ((this.state.response14[bl.sharename] ? .buy - bl.amount) * bl.quantity - this.state.brokrage_Amount) :
                                                            (bl.amount - this.state.response14[bl.sharename] ? .sell) * bl.quantity - this.state.brokrage_Amount)
                                                    }
                                                })
                                                this.setState({ total: val.toFixed(2) })
                                            })

                                        .catch(function(error) {
                                            if (error.response) {}
                                        });
                                    }

                                    async mcxData() {

                                        var str = localStorage.getItem("netposition")
                                        console.log("valucfyhbnme of str before", str)
                                        if (str === undefined) {
                                            str = "";
                                        }
                                        console.log("valucfyhbnme of str", str)

                                        var config = {
                                            method: "GET",
                                            url: str,
                                        };

                                        var self = this;
                                        await API(config)
                                            .then((response) => {
                                                var val = 0;

                                                if (response.data.data != "" && response.data.data != "{}") {
                                                    this.setState({ response14: response.data.data }, () => { console.log("value of response14", this.state.response14) });
                                                } else {
                                                    this.setState({ response14: {} });
                                                    console.log("value of response14", this.state.response14)
                                                }
                                                this.getWallets();

                                            })

                                        .catch(function(error) {
                                            if (error.response) {}
                                        });
                                    }

                                    async markAsClosed(id, closeAmount, action, sharename, quantity, brokrage) {


                                        this.setState({ closeamount: closeAmount })
                                        var data = JSON.stringify({
                                            closeAmount: closeAmount,
                                            action: action,
                                            sharename: sharename,
                                            quantity: quantity,
                                            Brokerage_amount: brokrage,
                                            status: 'yes',
                                        });

                                        console.log("her is value of close Amount in close", closeAmount)
                                        console.log("id", id)

                                        console.log("her is value of close amount in close", this.state.closeamount)
                                        var config = {
                                            method: "put",
                                            data: data,
                                            url: "/trading/transaction/" + id + "/",

                                        };

                                        await MAPI(config)
                                            .then((response) => {

                                                console.log('CHECK RESPONSE : ')
                                                console.log(response)

                                                this.setState({ doneStatus2: true });

                                                var self = this;
                                                setInterval(function() {
                                                    self.setState({ doneStatus2: false });
                                                }, 3000);
                                                console.log("here is working markasclose")


                                                this.setState({ success_msg: true });
                                                this.getTrading("yes");
                                                this.getTrading("no");
                                                console.log("here is working afteryymarkasclose")
                                                this.getWallets();
                                                console.log("here is working markasclose")

                                            })

                                        .catch(function(error) {
                                            console.log('error msg ', error);
                                        });
                                    }

                                    handleChange(e, tp) {

                                        let fruites = this.state.data_NSEFO;
                                        let fruitesMCX = this.state.data_MCX;
                                        // let mcx = [],
                                        console.log("fruitesMCX", fruites)
                                        let mx = e.target.value.split(/[0-9]/);
                                        console.log("value od cfghnm", mx)
                                        this.state.data_MCXSYM.map((value) => {

                                            if (value === mx[0]) {
                                                tp = "MCX";
                                                console.log("  ", mx)
                                            }
                                        })
                                        console.log("this is value of checkboxs", mx[0])
                                        var val = tp + ":" + e.target.value;
                                        console.log("her is valllllllllueeeeeeeeeeeee", val)

                                        var t = localStorage.getItem("nseFO");
                                        console.log("before update t", t);
                                        if (t === null || t === " ") {
                                            t = "";
                                        }
                                        console.log("after update value", t);

                                        t = t.replace("/" + val, "");
                                        console.log("value of t", t)
                                        t = t.replace(val, "");

                                        console.log("update t", t);

                                        if (!e.target.checked) {
                                            t = t.replace("/" + val + "/", "");
                                            var abc = this.state.response12;
                                            console.log("valuej of abc", abc)
                                            if (abc)
                                                delete abc[val]
                                            console.log("her is value of response12", abc)
                                            this.setState({ response12: abc }, console.log("Done", this.state.response12));
                                        } else {
                                            if (t != "" && t !== null) {
                                                t = t + "/" + val;
                                                console.log("valuej of abcasdf ", this.state.response12)
                                            } else {
                                                t = val;
                                                console.log("valuej of abc", this.state.response12)
                                            }
                                        }
                                        //console.log("123456789",t);
                                        fruites.forEach((fruite) => {
                                            if (fruite.name === e.target.value) {
                                                console.log("tsend data", t);
                                                fruite.isChecked = e.target.checked;
                                            }

                                        });
                                        this.setState({ data_NSEFO: fruites });

                                        console.log("tsend data", this.state.data_NSEFO);



                                        fruitesMCX.forEach((fruite) => {
                                            if (fruite.name === e.target.value) {
                                                fruite.isChecked = e.target.checked;
                                            }

                                        });
                                        this.setState({ data_MCX: fruitesMCX });
                                        localStorage.setItem("nseFO", t)

                                        var cookieData = localStorage.getItem("nseFO")
                                        console.log("her is nfo cookie", cookieData)

                                        var data = JSON.stringify({
                                            "watchlists": cookieData
                                        })
                                        var config = {
                                            method: 'POST',
                                            data: data,
                                            url: "trading/data/",
                                            redirect: 'follow'
                                        };

                                        MAPI(config)
                                            .then(data => console.log("heris the value of logout api", data))
                                            .catch(error => console.log('error', error));

                                    }

                                    setDataNFOChecked(val) {
                                        this.setState({ data_MCX: val });
                                    }
                                    toggle1(tab) {
                                        if (this.state.activeTab1 !== tab) {
                                            this.setState({
                                                activeTab1: tab,
                                            });
                                        }
                                    }

                                    handleChangeMCX(e) {
                                        //.log("is it calling");

                                        var val = e.target.value;
                                        // console.log("checkedArray", this.state.checkedArrayMCX);
                                        var t = localStorage.getItem("mcx");
                                        if (t === null) {
                                            t = "";
                                        }
                                        // console.log("is it callingasdfghj");
                                        t = t.replace("/" + val, "");
                                        t = t.replace(val, "");
                                        if (!e.target.checked) {
                                            //  console.log("unchecked",val);

                                            var abc = this.state.response12;
                                            delete abc[val]
                                            this.setState({ response12: abc }, console.log("Done"));
                                        } else {
                                            if (t != "" && t !== null) {
                                                t = t + "/" + val;
                                            } else {
                                                t = val;
                                            }
                                        }
                                        console.log("123456789", t);
                                        let fruites = this.state.data_MCX;
                                        fruites.forEach((fruite) => {
                                            if (fruite.name === e.target.value) {

                                                fruite.isChecked = e.target.checked;
                                            }

                                        });
                                        //this.setState({ data_MCX: fruites },()=>console.log("data_MCX",this.state.data_MCX));

                                        //   console.log("tsend data", t);

                                        //this.setState({ checkedArrayMCX: t }, () => this.mcxData(t));
                                    }

                                    toggle1(tab) {
                                        if (this.state.activeTab1 !== tab) {
                                            this.setState({
                                                activeTab1: tab,
                                            });
                                        }
                                    }

                                    toggle1(tab) {
                                        if (this.state.activeTab1 !== tab) {
                                            this.setState({
                                                activeTab1: tab,
                                            });
                                        }
                                    }
                                    t_col1() {
                                        this.setState({ col1: !this.state.col1, col2: false, col3: false });
                                    }
                                    t_col2() {
                                        this.setState({ col2: !this.state.col2, col1: false, col3: false });
                                    }
                                    t_col3() {
                                        this.setState({ col3: !this.state.col3, col1: false, col2: false });
                                    }
                                    t_col5() {
                                        this.setState({ col5: !this.state.col5 });
                                    }

                                    getSymbol = async(amount, sharename, action, lastprice, stoploss, target) => {

                                        var today = new Date();
                                        var time2 = today.getHours() + ":" + today.getMinutes() + ":" + "00";

                                        console.log('------ STARTING ----');
                                        fetch('https://rtrading.thinkzyproducts.com/api/api/searchSymbol', {

                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    symbol: sharename
                                                })
                                            }).then((response) => response.json())
                                            .then((responseJson) => {
                                                console.log('==== SHARENAME ====')
                                                console.log(responseJson.MESSAGE[0]);
                                                console.log('==== SHARENAME ====')
                                                    // 09:00 PM || 03:00 PM
                                                if (time2 < responseJson.MESSAGE[0].timefrom || time2 > responseJson.MESSAGE[0].timeto) {
                                                    this.setState({
                                                        // tt: 'Market Closed',
                                                        success_msg2: true
                                                    })
                                                    return;
                                                }

                                                // this.setState({marketclose:false});
                                                this.buy(amount, sharename, action, lastprice, stoploss, target);
                                                return;

                                                //  if(responseJson.MESSAGE[0].timefrom  == "0")
                                                //  {
                                                //   console.log('------ MARKET OPEN ----');
                                                //    this.setState({marketclose:false});
                                                //    this.buy(amount, sharename, action, lastprice, stoploss, target);
                                                //    return;
                                                //  }
                                                //  if(responseJson.MESSAGE[0].status  == "1")
                                                //  {
                                                //   console.log('------ MARKET CLOSE ----');
                                                //    this.setState({marketclose:true});
                                                //    this.setState({
                                                //     tt: 'Market Closed',
                                                //     success_msg: true
                                                //   })
                                                //    return;
                                                //  }
                                                console.log('------ ENDING ----');
                                                return;
                                            })
                                            .catch((error) => {
                                                alert(error)
                                            });
                                    }

                                    async getTrading(action) {

                                        var data = JSON.stringify({ action: "SELL" });
                                        var config = {
                                            method: "get",
                                            url: "trading/transactionsearch?isClosed=" + action,
                                            data: data,
                                        };

                                        await MAPI(config)
                                            .then((response) => {
                                                console.log("tradingqwertfg", response);

                                                if (action == "yes") {
                                                    this.setState({ tranactionsClosed: response.data });
                                                } else {
                                                    this.setState({ tranactionsNotClosed: response.data });
                                                }

                                            })

                                        .catch(function(error) {
                                            console.log('error msg ', error);
                                        });
                                    }



                                    // Start Buy Code from Watch List Buy Trade
                                    async buy(amount, sharename, action, lastprice, stoploss, target) {
                                        this.setState({ saveamount: amount })

                                        if (this.state.response12[this.state.currentTrade] ? .buy == 0) {
                                            this.setState({
                                                    tt: 'Market Closed',
                                                    success_msg: true
                                                })
                                                // console.log("last_price");
                                            return false;
                                        }

                                        if (this.state.wallet == 0 || this.state.wallet < 1) {
                                            this.setState({
                                                tt: 'Insufficient balance for trade',
                                                success_msg: true
                                            })

                                            // alert("Insufficient balance for trade");
                                            return false;
                                        }

                                        console.log("working here")
                                        console.log("targetsdxcfvghbjn", this.state.stoploss)

                                        if (this.state.quantity < 1) {
                                            this.setState({
                                                tt: 'Quantity is zero',
                                                success_msg: true
                                            })
                                            return false;
                                        }

                                        console.log("targetsdxcfvghbjn", this.state.target)
                                        console.log("targetsdxcfvghbjn", this.state.stoploss)
                                        if (this.state.stoploss === "" && this.state.stoploss === "") {
                                            var data = JSON.stringify({
                                                amount: amount,
                                                sharename: sharename,
                                                Brokerage_amount: this.state.brokrage_Amount,
                                                Stop_Loss_Value: 0,
                                                Target_Value: 0,
                                                action: action,
                                                last_price: lastprice,
                                                quantity: this.state.quantity,
                                                created_by: this.state.CREATEDBYID,
                                                status: 'no',
                                            });
                                        } else if (this.state.target === "") {
                                            var data = JSON.stringify({
                                                amount: amount,
                                                sharename: sharename,
                                                Brokerage_amount: this.state.brokrage_Amount,
                                                Stop_Loss_Value: this.state.stoploss,
                                                Target_Value: 0,
                                                action: action,
                                                last_price: lastprice,
                                                quantity: this.state.quantity,
                                                created_by: this.state.CREATEDBYID,
                                                status: 'no',
                                            })
                                        } else if (this.state.stoploss === "") {
                                            var data = JSON.stringify({
                                                amount: amount,
                                                sharename: sharename,
                                                Brokerage_amount: this.state.brokrage_Amount,
                                                Stop_Loss_Value: 0,
                                                Target_Value: this.state.target,
                                                action: action,
                                                last_price: lastprice,
                                                quantity: this.state.quantity,
                                                created_by: this.state.CREATEDBYID,
                                                status: 'no',
                                            })
                                        } else {
                                            var data = JSON.stringify({
                                                amount: amount,
                                                sharename: sharename,
                                                Brokerage_amount: this.state.brokrage_Amount,
                                                Stop_Loss_Value: this.state.stoploss,
                                                Target_Value: this.state.target,
                                                action: action,
                                                last_price: lastprice,
                                                quantity: this.state.quantity,
                                                created_by: this.state.CREATEDBYID,
                                                status: 'no',
                                            });
                                        }

                                        console.log("kfcvgbhnj", this.state.stoploss);

                                        var config = {
                                            method: "post",
                                            url: "/trading/" + action + "/",
                                            data: data,
                                        };

                                        console.log("kfcvgbhnjcfgb ", this.state.stoploss);
                                        await MAPI(config)
                                            .then((response) => {
                                                console.log("important for aync buy", response);
                                                this.setState({ doneStatus: true });


                                                console.log("test buy", this.state.response12);
                                                console.log("test buy 1", Object.keys(response.data)[0]);
                                                this.setState({ currentTrade: Object.keys(response.data)[0] });
                                                console.log("test buy 2");
                                                // this.setState({ response12: response.data });
                                                console.log("test buy 3");

                                                function alertFunc() {}
                                                this.getTrading("yes");
                                                this.getTrading("no");
                                                this.getWallets();

                                                var self = this;


                                                let mx = sharename.split(/[0-9]/);
                                                console.log("value of mcx if available", mx[0])
                                                var tp = "NFO";
                                                var str = "";
                                                var arr = [];
                                                var cur_val = localStorage.getItem("netposition");

                                                if (cur_val == null) {
                                                    cur_val = "";
                                                }

                                                this.state.data_MCXSYM.map((value) => {
                                                    // console.log("value of mcx symbol in map",mx,value)

                                                    if (value === mx[0]) {
                                                        tp = "MCX"
                                                        console.log("value of mcx symbol in map", tp)
                                                    }

                                                })
                                                console.log("value of aarrrr", arr)
                                                str = tp + ":" + sharename;

                                                // arr = arr + str + "/";
                                                // console.log("value of aarrrr",arr)
                                                if (cur_val == "") {
                                                    localStorage.setItem("netposition", str)

                                                } else {
                                                    localStorage.setItem("netposition", cur_val + "/" + str)


                                                }



                                                this.mcxData();
                                                setTimeout(function() {
                                                    self.setState({ doneStatus: false });
                                                    self.setState({ modal_small: false });
                                                }, 2000);

                                                this.setState({ stoploss: 0 })
                                                this.setState({ target: 0 })
                                            })

                                        .catch(function(error) {
                                            if (error.response) {
                                                // console.log('error msg ',error);
                                                //  setError({'name':error.response.data.message})
                                            }
                                        });
                                        //return  API(config)



                                    }

                                    async sell(amount, sharename, action, lastprice, stoploss, target) {
                                        console.log("buy");
                                        var data = JSON.stringify({ 'amount': amount, 'sharename': sharename, 'action': 'SELL', 'last_price': lastprice, "Stop_Loss_Value": stoploss, "Target_Value": target })
                                        console.log("stoploss ki value", this.state.stoploss);
                                        console.log("target ki value", this.state.target);

                                        var config = {
                                            method: 'post',
                                            url: '/trading/seller/',
                                            data: data,
                                        }

                                        await MAPI(config)
                                            .then((response) => {
                                                console.log("important", response);
                                                // this.setState({name: "RESPONSE TEXT"});
                                                //this.setState({name: response.data.name});
                                                //console.log("response.data",response.data);
                                                this.setState({ currentTrade: Object.keys(response.data.data)[0] });
                                                this.setState({ response12: response.data.data });

                                                let mx = sharename.split(/[0-9]/);
                                                console.log("value of mcx if available", mx[0])
                                                var tp = "NFO";
                                                var str = "";
                                                var arr = [];
                                                var cur_val = localStorage.getItem("netposition");
                                                if (cur_val == null) {
                                                    cur_val = "";
                                                }

                                                this.state.data_MCXSYM.map((value) => {
                                                    // console.log("value of mcx symbol in map",mx,value)

                                                    if (value === mx[0]) {
                                                        tp = "MCX"
                                                        console.log("value of mcx symbol in map", tp)
                                                    }

                                                })
                                                console.log("value of aarrrr", arr)
                                                str = tp + ":" + sharename;

                                                // arr = arr + str + "/";
                                                // console.log("value of aarrrr",arr)
                                                if (cur_val == "") {
                                                    localStorage.setItem("netposition", str)

                                                } else {
                                                    localStorage.setItem("netposition", cur_val + "/" + str)


                                                }



                                                this.mcxData();
                                            })

                                        .catch(function(error) {
                                            this.setState({ currentTrade: "" });
                                            if (error.response) {
                                                // console.log('error msg ',error);
                                                //  setError({'name':error.response.data.message})
                                            }
                                        });
                                        //return  API(config)
                                    }

                                    async symbols() {
                                        console.log("here is symbol api s working");
                                        var config = {
                                            method: "post",
                                            url: "/https://tradefever.org:8080/trading/save_data/",

                                        };

                                    }


                                    getTransactions(amount, sharename, action, lastprice) {
                                        console.log("sell");
                                    }

                                    async getWallets() {
                                        console.log("buy");

                                        var config = {
                                            method: 'get',
                                            url: 'trading/wallet/',

                                        }

                                        await MAPI(config)
                                            .then((response) => {


                                                this.setState({ wallet: response.data.wallet, USERID: response.data.userid.id });
                                                this.getcreatedbyid(response.data.userid.id);

                                                console.log("USERID: =>", response.data.userid.id);
                                                console.log("Wallet updated1223", this.state.wallet);

                                                this.setState({ wallet: this.state.wallet })

                                            })

                                        .catch(function(error) {
                                            console.log('error msg ', error);
                                        });
                                    }

                                    constructor(props) {
                                        super(props);


                                        this.state = {
                                            sumamount: '',
                                            brokrage_Amount: 0,
                                            saveamount: null,
                                            USERID: '',
                                            CREATEDBYID: '',
                                            modalmodify: false,
                                            tt: "Bid Closed!",
                                            modifyid: -1,
                                            stoplossV: "",
                                            targetV: "",
                                            data_NSEFO: [


                                            ],
                                            data_MCX: [



                                            ],
                                            data_MCXSYM: ["ALUMINIUM", "ALUMINIUMOCT", "ALUMINIUMSEP", "COPPER", "COPPERSEP", "COPPER", "COTTON", "COTTONNOV", "COTTONOCT", "COTTONREF", "CPO", "CPOOCT", "CPOSEP",
                                                "CRUDEOIL", "CRUDEOILOCT", "CRUDEOILSEP", "GOLD", "GOLDOCT", "GOLDDEC", "GOLDGUINEA", "GOLDM", "GOLDMNOV", "GOLDMOCT", "GOLDPETAL", "KAPAS", "LEAD", "LEADSEP", "LEADOCT", "MCXBULLDEX", "MCXMETLDEX", "MENTHAOIL", "NATURALGAS", "NICKEL", "NICKELOCT", "NICKELSEP", "RUBBER", "SILVER", "SILVERDEC", "SILVERM", "SILVERMAR", "SILVERMFEB", "SILVERMIC", "SILVERMNOV", "ZINC", "ZINCOCT", "ZINCSEP"

                                            ],




                                            wallet: 0,
                                            total: 0,
                                            doneStatus: false,
                                            doneStatus2: false,
                                            interval: null,
                                            modal_small: false,
                                            activeTab: "1",
                                            currentTrade: "",
                                            stoploss: 0,
                                            target: 0,
                                            closeamount: 0,
                                            success_msg: false,
                                            success_msg2: false,
                                            tranactionsClosed: {},
                                            tranactionsNotClosed: {},

                                            quantity: 0,
                                            comp: [
                                                { id: 1, value: "RELIANCE", isChecked: false },
                                                { id: 2, value: "NIFTY", isChecked: false },
                                                { id: 3, value: "ASIANPAINT", isChecked: false },
                                                { id: 4, value: "AUBANK", isChecked: false },
                                            ],
                                            comp1: [
                                                { id: 1, value: "GOLD", isChecked: false },
                                                { id: 2, value: "SILVER", isChecked: false },
                                                { id: 3, value: "COPPER", isChecked: false },
                                                { id: 4, value: "DIAMOND", isChecked: false },
                                            ],

                                            visible: false,
                                            response12: {},
                                            response14: {},
                                            checkedArrayNseFO: "",
                                            checkedArrayMCX: "",
                                            breadcrumbItems: [
                                                { title: "Back", link: "/" },
                                            ],
                                        };

                                        this.toggle = this.toggle.bind(this);
                                        this.brokrage = this.brokrage.bind(this);
                                        this.setDataNFOChecked = this.setDataNFOChecked.bind(this);
                                        this.handleChangeState = this.handleChangeState.bind(this)
                                        this.preservalue = this.preservalue.bind(this)
                                        this.popupHtml = this.popupHtml.bind(this);
                                        this.getWallets = this.getWallets.bind(this);
                                        this.toggle1 = this.toggle1.bind(this);
                                        this.tog_small = this.tog_small.bind(this);
                                        this.getTrading = this.getTrading.bind(this);
                                        this.t_col1 = this.t_col1.bind(this);
                                        this.t_col2 = this.t_col2.bind(this);
                                        this.t_col3 = this.t_col3.bind(this);
                                        this.t_col5 = this.t_col5.bind(this);
                                        this.Modify = this.Modify.bind(this)
                                        this.nseFODataFunc = this.nseFODataFunc.bind(this);
                                        this.mcxData = this.mcxData.bind(this);
                                        this.buy = this.buy.bind(this);
                                        this.setTarget = this.setTarget.bind(this);
                                        this.setStoploss = this.setStoploss.bind(this);
                                        this.handleChange = this.handleChange.bind(this);
                                        this.handleChangeStopLoss = this.handleChangeStopLoss.bind(this);
                                        this.handleChangeTarget = this.handleChangeTarget.bind(this);

                                    }
                                    tog_small(data) {
                                        this.setState(
                                            (prevState) => ({
                                                currentTrade: data,
                                            }),
                                            () =>
                                            this.setState((prevState) => ({
                                                modal_small: !prevState.modal_small,
                                            }))
                                        );

                                        this.removeBodyCss();
                                    }
                                    handleChangeState = (val) => {
                                        console.log('changeHandler', val);
                                        this.setState({ data_NSEFO: val });
                                    }

                                    preservalue() {

                                        var str = localStorage.getItem("nseFO");
                                        console.log("str nsefo", str);

                                        if (str != "" && str !== null) {
                                            var fruites = this.state.data_NSEFO;
                                            console.log("fruits value", fruites)
                                            fruites.forEach((fruite) => {
                                                //  console.log(str.indexOf(fruite.value));
                                                //  console.log(str)
                                                if (str.indexOf(fruite.name) > -1) {
                                                    //    console.log("fruite",fruite)
                                                    fruite.isChecked = true;
                                                }
                                            });
                                            console.log("first", fruites);
                                            this.setState({ data_NSEFO: fruites }, () => console.log("test", this.state.data_NSEFO));
                                            console.log("first");

                                            var self = this;

                                        } else {}
                                        // var str = localStorage.getItem("mcx");
                                        console.log("mcx localstorage", str);
                                        if (str != "" && str !== null) {
                                            var fruitesMCX = this.state.data_MCX;
                                            fruitesMCX.forEach((fruite) => {
                                                //  console.log(str.indexOf(fruite.value));
                                                //  console.log(str)
                                                if (str.indexOf(fruite.name) > -1) {
                                                    //    console.log("fruite",fruite)
                                                    fruite.isChecked = true;
                                                }
                                            });
                                            this.setState({ data_MCX: fruitesMCX });

                                        } else {}

                                    }
                                    toggle(tab) {
                                        if (this.state.activeTab !== tab) {
                                            this.setState({
                                                activeTab: tab,
                                            });
                                        }
                                    }
                                    componentWillUnmount() {
                                        clearInterval(this.state.interval);
                                    }

                                    componentDidMount() {

                                        this.brokrage();

                                        window.addEventListener("load", this.preservalue);
                                        this.mcxData()

                                        var self = this;
                                        const interval = setInterval(() => {
                                            self.nseFODataFunc();
                                        }, 4000);
                                        setInterval(() => {
                                            this.mcxData();
                                            this.getTrading("yes");
                                            this.getTrading("no")
                                        }, 3000);
                                        this.setState({ interval: interval });

                                        this.getWallets();

                                        var self = this;
                                        setTimeout(function() {
                                            self.getTrading("yes");
                                            self.getTrading("no")
                                        }, 3000);;
                                    }

                                    getcreatedbyid = (USERID) => {

                                        console.log('STARTING...')


                                        fetch(`https://rtrading.thinkzyproducts.com/api/api/findcreatedby`, {

                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    id: USERID,
                                                })
                                            }).then((response) => response.json())
                                            .then((responseJson) => {

                                                console.log('CHECK RESPONSE 2');
                                                console.log(responseJson.USER[0].created_by_id);
                                                this.setState({ CREATEDBYID: responseJson.USER[0].created_by_id })

                                            })
                                            .catch((error) => {
                                                console.log(error)
                                            });

                                    }

                                    handleQuantity(e) {
                                        this.setState({ quantity: e.target.value });
                                    }

                                    setTarget(e) {
                                        this.setState({ target: e.target.value })
                                        console.log("value of target", this.state.target)
                                    }

                                    setStoploss(e) {

                                        this.setState({ stoploss: e.target.value })

                                    }

                                    handleChangeStopLoss(e) {
                                        this.setState({ stoplossV: e.target.value })
                                    }

                                    handleChangeTarget(e) {
                                        this.setState({ targetV: e.target.value })
                                    }

                                    Modify() {


                                        // const data = JSON.stringify({
                                        //   id:this.state.modifyid,
                                        //   Target_Value:this.state.targetV,
                                        //   Stop_Loss_Value:this.state.stoplossV,
                                        // })

                                        // var config = {
                                        //   method:"POST",
                                        //   data : data,
                                        //   url : 'https://rtrading.thinkzyproducts.com/api/api/updatetrans',  
                                        // }


                                        const data = JSON.stringify({
                                            Stop_Loss_Value: this.state.stoplossV,
                                            Target_Value: this.state.targetV,
                                            Brokerage_amount: this.state.brokrage_Amount,
                                            // difference: 9,
                                        })

                                        var config = {
                                            method: "PUT",
                                            data: data,
                                            url: 'trading/target/' + this.state.modifyid + "/",
                                        }

                                        MAPI(config).then((resp) => {
                                                console.log("modify APiiiii", this.state.modifyid)
                                                console.log("modify stoploss", this.state.stoplossV)
                                                console.log("modify target", this.state.targetV)


                                                this.setState({ modalmodify: false })
                                                this.setState({ tt: "Updated !!" })
                                                this.setState({ success_msg: true })
                                                this.getTrading("yes")
                                                this.getTrading("no")
                                            })
                                            .catch(function(error) {

                                                console.log('error msg ', error);
                                            });

                                        console.log("modify is working now")
                                    }

                                    // Modify(){
                                    //   const data = JSON.stringify({
                                    //     Stop_Loss_Value:this.state.stoplossV,
                                    //     Target_Value:this.state.targetV
                                    //   })

                                    //   var config = {
                                    //     method:"PATCH",
                                    //     data : data,
                                    //     url : 'trading/target/'+this.state.modifyid+"/",  
                                    //   }
                                    //   MAPI(config).then((resp)=>{
                                    //     console.log("modify APiiiii",this.state.modifyid)
                                    //     console.log("modify stoploss",this.state.stoplossV)
                                    //     console.log("modify target",this.state.targetV)


                                    //     this.setState({modalmodify:false})
                                    //     this.setState({tt:"Updated !!"})
                                    //     this.setState({success_msg:true})
                                    //     this.getTrading("yes")
                                    //     this.getTrading("no")
                                    // })
                                    //   .catch(function (error) {

                                    //       console.log('error msg ',error);
                                    //   });

                                    //   console.log("modify is working now")
                                    // }

                                    openModify(id, stp, tar) {
                                        console.log("fdsfds", stp, tar, id, this.state.tranactionsNotClosed)
                                        this.setState({ modalmodify: true, targetV: tar, stoplossV: stp, modifyid: id })


                                    }

                                    render() {

                                        console.log("this.reponse12", this.state.response12);

                                        var html = this.popupHtml();
                                        return ( <
                                            React.Fragment >
                                            <
                                            Modal isOpen = { this.state.modalmodify }
                                            toggle = { this.tog_static }
                                            backdrop = "static" >
                                            <
                                            ModalHeader toggle = {
                                                () => this.setState({ modal_static: false }) } >
                                            Change Target and Stop Loss <
                                            /ModalHeader> <
                                            ModalBody >
                                            Stop Loss: < input className = "form-control"
                                            name = "password"
                                            type = "text"
                                            value = { this.state.stoplossV }
                                            onChange = {
                                                (e) => { this.handleChangeStopLoss(e) } }
                                            placeholder = "StopLoss" / > < br / >

                                            Target: < input className = "form-control"
                                            name = "password"
                                            type = "text"
                                            value = { this.state.targetV }
                                            onChange = {
                                                (e) => { this.handleChangeTarget(e) } }
                                            placeholder = "Target" / >
                                            <
                                            ModalFooter >
                                            <
                                            Button type = "button"
                                            color = "light"
                                            onClick = {
                                                () => this.setState({ modalmodify: false }) } > Close < /Button> <
                                            Button type = "button"
                                            color = "primary"
                                            onClick = {
                                                () => this.Modify() } > Save < /Button>

                                            <
                                            /ModalFooter>   <
                                            /ModalBody> <
                                            /Modal> <
                                            div className = "page-content" >
                                            <
                                            Container fluid = { true } >
                                            <
                                            Breadcrumbs title = "Trading"
                                            breadcrumbItems = { this.state.breadcrumbItems }
                                            /> {
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
                                                    SweetAlert title = { "Market Close" }
                                                    success confirmBtnBsStyle = "success"
                                                    cancelBtnBsStyle = "danger"
                                                    onConfirm = {
                                                        () => this.setState({ success_msg2: false }) }
                                                    onCancel = {
                                                        () => this.setState({ success_msg2: false }) } >

                                                    <
                                                    /SweetAlert>
                                                ) : null
                                            } <
                                            Row >
                                            <
                                            Col xl = { 12 } >
                                            <
                                            Card >
                                            <
                                            Nav tabs >
                                            <
                                            NavItem >
                                            <
                                            NavLink style = {
                                                { cursor: "pointer" } }
                                            className = {
                                                classnames({
                                                    active: this.state.activeTab === "1",
                                                })
                                            }
                                            onClick = {
                                                () => {
                                                    this.toggle("1");
                                                }
                                            }
                                            style = {
                                                {
                                                    fontFamily: "sans-serif",
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    fontWeight: "bold"
                                                }
                                            } >
                                            ADD SCRIP <
                                            /NavLink> <
                                            /NavItem>

                                            <
                                            NavItem >

                                            <
                                            /NavItem> <
                                            NavItem >
                                            <
                                            NavLink style = {
                                                { cursor: "pointer" } }
                                            className = {
                                                classnames({
                                                    active: this.state.activeTab === "3",
                                                })
                                            }
                                            onClick = {
                                                () => {
                                                    this.toggle("3");
                                                }
                                            }
                                            style = {
                                                {
                                                    fontFamily: "sans-serif",
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    fontWeight: "bold"
                                                }
                                            } >
                                            WATCH LIST <
                                            /NavLink> <
                                            /NavItem> <
                                            NavItem >
                                            <
                                            NavLink style = {
                                                { cursor: "pointer" } }
                                            className = {
                                                classnames({
                                                    active: this.state.activeTab === "4",
                                                })
                                            }
                                            onClick = {
                                                () => {
                                                    this.toggle("4");
                                                }
                                            }
                                            style = {
                                                {
                                                    fontFamily: "sans-serif",
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    fontWeight: "bold"
                                                }
                                            } >
                                            NET POSITION <
                                            /NavLink> <
                                            /NavItem> <
                                            NavItem >
                                            <
                                            NavLink style = {
                                                { cursor: "pointer" } }
                                            className = {
                                                classnames({
                                                    active: this.state.activeTab === "5",
                                                })
                                            }
                                            onClick = {
                                                () => {
                                                    this.toggle("5");
                                                }
                                            }
                                            style = {
                                                {
                                                    fontFamily: "sans-serif",
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    fontWeight: "bold"
                                                }
                                            } >
                                            TRADE BOOK <
                                            /NavLink> <
                                            /NavItem> <
                                            /Nav> <
                                            TabContent activeTab = { this.state.activeTab } >
                                            <
                                            TabPane tabId = "1"
                                            className = "p-3" >
                                            <
                                            Row >
                                            <
                                            Col sm = "12" >
                                            <
                                            CardText >
                                            <
                                            Modal size = "lg"
                                            isOpen = { this.state.modal_small }
                                            toggle = { this.tog_small } >
                                            <
                                            ModalBody >
                                            <
                                            p > < /p> <
                                            div >
                                            <
                                            table > {
                                                this.state.response12 ? ( <
                                                    > {
                                                        this.state.response12[
                                                            this.state.currentTrade
                                                        ] ? ( <
                                                            tbody >
                                                            <
                                                            /tbody>
                                                        ) : ( <
                                                            > < />
                                                        )
                                                    } <
                                                    />
                                                ) : ( <
                                                    > < />
                                                )
                                            } <
                                            /table> { html } <
                                            /div> <
                                            p className = "mb-0" > < /p> <
                                            /ModalBody> <
                                            /Modal> <
                                            h4 className = "card-title" > ADD SCRIP < /h4> <
                                            div className = "table-responsive form-check" >

                                            <
                                            TableNSEFO data = { this.state.data_NSEFO }

                                            checkBoxClickCTA = {
                                                (e) => this.handleChange(e, "NFO") }
                                            handleChangeState = { this.handleChangeState }

                                            setDataNFOChecked = { this.setDataNFOChecked }
                                            response12 = { this.state.response12 }
                                            /> <
                                            /div> {
                                                /* {Object.values(this.state.comp).map((t) => (
                                                                              <div className="form-check">
                                                                                <input
                                                                                  className="form-check-input"
                                                                                  type="checkbox"
                                                                                  value={t.value}
                                                                                  id="flexCheckDefault"
                                                                                  checked={t.isChecked}
                                                                                  onChange={this.handleChange}
                                                                                />
                                                                                <label className="form-check-label">
                                                                                  {t.value}
                                                                                </label>
                                                                              </div>
                                                                            ))} */
                                            } <
                                            /CardText> <
                                            /Col> <
                                            /Row> <
                                            /TabPane>

                                            <
                                            TabPane tabId = "3"
                                            className = "p-3" >
                                            <
                                            Row >
                                            <
                                            Col sm = "12" >
                                            <
                                            CardText >
                                            <
                                            div className = "table-responsive" >
                                            <
                                            Table className = "mb-0" >
                                            <
                                            thead >
                                            <
                                            tr >
                                            <
                                            th scope = "col" > < h5 style = {
                                                { fontWeight: 'bold' } } > NAME < /h5></th >
                                            <
                                            th scope = "col" > < h5 style = {
                                                { fontWeight: 'bold' } } > BUY < /h5></th >
                                            <
                                            th scope = "col" > < h5 style = {
                                                { fontWeight: 'bold' } } > SELL < /h5></th > {
                                                /* 
                                                                                    <th scope="col">HIGH</th>
                                                                                    <th scope="col">LOW</th> */
                                            } { /* <th scope="col">Open</th> */ } <
                                            th scope = "col" > < /th> <
                                            /tr> <
                                            /thead> {
                                                this.state.response12 ? ( <
                                                    tbody > {
                                                        Object.values(this.state.response12) ? .map(
                                                            (bl, index) => ( <
                                                                tr >
                                                                <
                                                                td > {
                                                                    Object.keys(
                                                                        this.state.response12
                                                                    )[index]
                                                                } <
                                                                Button type = "button"
                                                                onClick = {
                                                                    () =>
                                                                    this.tog_small(bl.symbol)
                                                                }
                                                                color = "primary"
                                                                className = "btn-rounded waves-effect waves-light"
                                                                data - toggle = "modal"
                                                                data - target = ".bs-example-modal-sm"
                                                                style = {
                                                                    { marginLeft: "10px" } } >
                                                                Trade <
                                                                /Button> <
                                                                /td> <
                                                                td > < h3 > { bl.buy } < /h3>{'\n'}<br></br > < h6 style = {
                                                                    { marginTop: -20 } } > H - { bl.high } < /h6> </td >
                                                                <
                                                                td > < h3 > { bl.sell } < /h3>{'\n'}<br></br > < h6 style = {
                                                                    { marginTop: -20 } } > L - { bl.low } < /h6></td >

                                                                {
                                                                    /* <td><Button type="button" color="primary" className="waves-effect waves-light"
                                                                                                                onClick={this.tog_center}>Trade</Button></td> */
                                                                }

                                                                {
                                                                    /* <td>{bl.high}</td>
                                                                                                              <td>{bl.low}</td> */
                                                                } { /* <td>{bl.open}</td> */ } <
                                                                /tr>
                                                            )
                                                        )
                                                    } <
                                                    /tbody>
                                                ) : ( <
                                                    > < />
                                                )
                                            } <
                                            /Table> <
                                            /div> <
                                            /CardText> <
                                            /Col> <
                                            /Row> <
                                            /TabPane> <
                                            TabPane tabId = "4"
                                            className = "p-3" >
                                            <
                                            Row >
                                            <
                                            Col sm = "12" >
                                            <
                                            CardText >
                                            <
                                            div className = "table-responsive" >
                                            <
                                            Table className = "mb-0" >
                                            <
                                            thead >

                                            <
                                            tr >
                                            <
                                            th scope = "col"
                                            colSpan = "7" > < Row > < h6 style = {
                                                { color: 'blue', paddingLeft: 15 } } > Balance < /h6> : &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{fontWeight:'bold'}}>{this.state.wallet.toFixed(2)}</h
                                            6 > < /Row></th >

                                            <
                                            /tr> <
                                            tr >
                                            <
                                            th scope = "col"
                                            colSpan = "7" > < Row > < h6 style = {
                                                { color: 'blue', paddingLeft: 15 } } > Profit & Loss < /h6>  : &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{fontWeight:'bold'}}>{this.state.total
                                        } < /h6> </Row > < /th>

                                        <
                                        /tr>

                                        {
                                            Object.values(this.state.tranactionsNotClosed).map((bl, index) =>
                                                <
                                                > {
                                                    bl.sharename && this.state.response14 && this.state.response14[bl.sharename] ? < >
                                                    <
                                                    tr >


                                                    <
                                                    th scope = "col" >

                                                    { bl.sharename },
                                                    {
                                                        bl.action != 'BUY' ?
                                                        <
                                                        span style = {
                                                            { color: "red", fontWeight: "bold" } } > SELL { bl.quantity } < /span>: <
                                                        span style = {
                                                            { color: "green", fontWeight: "bold" } } > BUY { bl.quantity } < /span>
                                                    }

                                                    {
                                                        bl.action == 'BUY' ?
                                                            <
                                                            th style = {
                                                                { color: "#A5A7A8", borderBottomWidth: 0, paddingLeft: 0 } } > { bl.amount }➔ { this.state.response14[bl.sharename] ? .buy } < /th>  :
                                                            < th style = {
                                                                { color: "#A5A7A8", borderBottomWidth: 0, paddingLeft: 0 } } > { bl.amount }➔ { this.state.response14[bl.sharename] ? .sell } < /th>}

                                                        <
                                                        /th>

                                                        <
                                                        th colSpan = "2"
                                                        style = {
                                                                {
                                                                    fontWeight: 'bold',
                                                                    color: Math.sign(bl.action == 'BUY' ?
                                                                        ((this.state.response14[bl.sharename] ? .buy - bl.amount) * bl.quantity).toFixed(2) - this.state.brokrage_Amount :
                                                                        ((bl.amount - this.state.response14[bl.sharename] ? .sell) * bl.quantity).toFixed(2) - this.state.brokrage_Amount) === -1 ? "red" : "blue"
                                                                }
                                                            } >






                                                            {
                                                                bl.action == 'BUY' ?

                                                                ((this.state.response14[bl.sharename] ? .buy - bl.amount) * bl.quantity).toFixed(2) - this.state.brokrage_Amount :

                                                                    ((bl.amount - this.state.response14[bl.sharename] ? .sell) * bl.quantity).toFixed(2) - this.state.brokrage_Amount
                                                            } & nbsp;









                                                        &
                                                        nbsp; & nbsp; & nbsp; & nbsp; <
                                                        button type = "button"
                                                        className = "btn btn-danger"
                                                        onClick = {
                                                                () => this.markAsClosed(bl.id, bl.action == 'BUY' ? this.state.response14[bl.sharename] ? .buy : this.state.response14[bl.sharename] ? .sell,
                                                                    bl.action == 'BUY' ? "SELL" : "BUY", bl.sharename, bl.quantity, this.state.brokrage_Amount)
                                                            } >
                                                            Close <
                                                            /button> { console.log("value of updated Stop_Loss_Value", bl.Stop_Loss_Value) } <
                                                            button type = "button"
                                                        style = {
                                                            { marginLeft: "10px" } }
                                                        className = "btn btn-success"
                                                        onClick = {
                                                            () => this.openModify(bl.id, bl.Stop_Loss_Value, bl.Target_Value) } > Modify < /button>


                                                        <
                                                        /th> <
                                                        /tr> {
                                                            /* <tr>
                                                                                                          {bl.action=='BUY'?
                                                                                                            <th  style={{color:"#A5A7A8"}}>{bl.amount}  ➔ {this.state.response14[bl.sharename]?.buy}</th> 
                                                                                                            :<th  style={{color:"#A5A7A8"}}>{bl.amount} ➔ {this.state.response14[bl.sharename]?.sell}</th>}
                                                                                                          </tr> */
                                                        } <
                                                        />: < th > < /th>} <
                                                            />



                                                    )
                                                }



                                                <
                                                /thead>



                                                <
                                                /Table> <
                                                /div> <
                                                /CardText> <
                                                /Col> <
                                                /Row> <
                                                /TabPane> <
                                                TabPane tabId = "5"
                                                className = "p-3" >
                                                <
                                                Row >
                                                <
                                                Col sm = "12" >
                                                <
                                                CardText >
                                                <
                                                div className = "table-responsive" >
                                                <
                                                Table className = "mb-0" >
                                                <
                                                thead >
                                                <
                                                tr >
                                                <
                                                th >
                                                <
                                                h3 style = {
                                                    { color: "#A5A7A8" } } >
                                                History <
                                                /h3> <
                                                /th> <
                                                /tr> {
                                                    Object.values(
                                                        this.state.tranactionsClosed
                                                    ).map((bl, index) => (( <
                                                        >
                                                        <
                                                        tr >
                                                        <
                                                        th scope = "col" >

                                                        { bl.sharename }, {
                                                            bl.action == "BUY" ? ( <
                                                                span style = {
                                                                    {
                                                                        color: "green",
                                                                        fontWeight: "bold",
                                                                    }
                                                                } >
                                                                { bl.action } { bl.quantity } <
                                                                /span>
                                                            ) : ( <
                                                                span style = {
                                                                    {
                                                                        color: "red",
                                                                        fontWeight: "bold",

                                                                    }
                                                                } >
                                                                { bl.action } { bl.quantity } <
                                                                /span>
                                                            )
                                                        }

                                                        <
                                                        th style = {
                                                            { color: "#A5A7A8", borderBottomWidth: 0, paddingLeft: 0 } } > { bl.amount }➔ { bl.Close_amount } <
                                                        /th> <
                                                        /th>


                                                        <
                                                        th scope = "col" >
                                                        <
                                                        h6 style = {
                                                            { textAlign: 'right' } } > { moment(bl.updated_at).format('MMM DD YYYY h:mm A') } < /h6>

                                                        {
                                                            bl.status == 'no' ?
                                                                <
                                                                h6 style = {
                                                                    { textAlign: 'right', color: Math.sign(bl.difference) === -1 ? "red" : "blue" } } > { parseFloat(bl.difference).toFixed(2) } <
                                                                /h6> :
                                                                <
                                                                h6 style = {
                                                                    { textAlign: 'right', color: Math.sign(bl.difference) === -1 ? "red" : "blue" } } > { parseFloat(bl.difference).toFixed(2) } <
                                                                /h6>
                                                        }





                                                        <
                                                        /th>

                                                        <
                                                        /tr> {
                                                            /* <tr>
                                                                                                    <th style={{ color: "#A5A7A8" }}>
                                                                                                      {bl.amount} ➔ {bl.Close_amount}
                                                                                                    </th>
                                                                                                  </tr> */
                                                        } <
                                                        />
                                                    )))
                                                } <
                                                /thead> <
                                                /Table> <
                                                /div> <
                                                /CardText> <
                                                /Col> <
                                                /Row> <
                                                /TabPane> <
                                                /TabContent>

                                                <
                                                CardBody >
                                                <
                                                Row > {
                                                    /*<div class="input-group">
                                                                        <div class="form-outline">
                                                                          <input type="search" id="form1" class="form-control" placeholder="search.."/>
                                                                          <label class="form-label" for="form1"></label>
                                                                        </div>
                                                                        <button type="button" class="btn btn-primary">
                                                                          <i class="fas fa-search"></i>
                                                                        </button>
                                                        </div>*/
                                                } <
                                                /Row>

                                                <
                                                Row > < /Row> <
                                                /CardBody> <
                                                /Card> <
                                                /Col> <
                                                /Row> <
                                                /Container> <
                                                /div> <
                                                /React.Fragment>
                                            );
                                        }
                                    }

                                    export default NseFO;


                                    const mystyle = {
                                        DIV_1: {

                                            "tabSize": "4",
                                            "textAlign": "center",
                                            "textSizeAdjust": "100%",
                                            "top": "-11.5px",
                                            "transformOrigin": "300px 149.5px",
                                            "whiteSpace": "nowrap",
                                            "zIndex": "1500",
                                            "background": "rgb(229, 231, 235) none repeat scroll 0% 0% / auto padding-box border-box",
                                            "border": "0px solid rgb(229, 231, 235)",
                                            "borderRadius": "15px",
                                            "borderSpacing": "2px 2px",
                                            "flexFlow": "column nowrap",
                                            "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                            "padding": "4px 0px 16px"
                                        }


                                        ,
                                        "DIV_1_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_1_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },

                                        "DIV_2": {
                                            "@media only screen and (max-width: 600%) ": {
                                                "textAlign": "center",
                                                "backgroundColor": "green",
                                                "marginLeft": "110px",
                                                "margineft": "200px",
                                                "alignItems": "center",
                                                "blockSize": "41px",
                                                "borderBlockEndColor": "rgb(229, 231, 235)",
                                                "borderBlockEndStyle": "solid",
                                                "borderBlockStartColor": "rgb(229, 231, 235)",
                                                "borderBlockStartStyle": "solid",
                                                "borderCollapse": "collapse",
                                                "borderEndEndRadius": "15px",
                                                "borderEndStartRadius": "15px",
                                                "borderInlineEndColor": "rgb(229, 231, 235)",
                                                "borderInlineEndStyle": "solid",
                                                "borderInlineStartColor": "rgb(229, 231, 235)",
                                                "borderInlineStartStyle": "solid",
                                                "borderStartEndRadius": "15px",
                                                "borderStartStartRadius": "15px",
                                                "bottom": "0px",
                                                "boxSizing": "border-box",
                                                "display": "grid",
                                                "gridTemplateColumns": "162.812px 234.375px 162.812px",
                                                "gridTemplateRows": "31px",
                                                "height": "41px",
                                                "inlineSize": "560px",
                                                "insetBlockEnd": "0px",
                                                "insetBlockStart": "0px",
                                                "insetInlineEnd": "0px",
                                                "insetInlineStart": "0px",
                                                "left": "0px",
                                                "letterSpacing": "1px",
                                                "minBlockSize": "auto",
                                                "minHeight": "auto",
                                                "minInlineSize": "auto",
                                                "minWidth": "auto",
                                                "paddingBlockEnd": "7px",
                                                "paddingBlockStart": "3px",
                                                "perspectiveOrigin": "280px 20.5px",
                                                "position": "relative",
                                                "right": "0px",
                                                "tabSize": "4",
                                                "textAlign": "center",
                                                "textSizeAdjust": "100%",
                                                "top": "0px",
                                                "transformOrigin": "280px 20.5px",
                                                "whiteSpace": "nowrap",
                                                "width": "560px",
                                                "border": "0px solid rgb(229, 231, 235)",
                                                "borderRadius": "15px",
                                                "borderSpacing": "2px 2px",
                                                "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                                "padding": "3px 0px 7px"
                                            }
                                        },

                                        "DIV_2_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_2_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_3": { "alignItems": "center", "blockSize": "28px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "flex", "height": "28px", "inlineSize": "162.812px", "letterSpacing": "1px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "81.4062px 14px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "81.4062px 14px", "whiteSpace": "nowrap", "width": "162.812px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_3_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_3_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_4": { "blockSize": "28px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50px", "borderEndStartRadius": "50px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50px", "borderStartStartRadius": "50px", "boxSizing": "border-box", "cursor": "pointer", "height": "28px", "inlineSize": "50px", "insetBlockStart": "10px", "insetInlineStart": "10px", "left": "10px", "letterSpacing": "1px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "paddingInlineEnd": "2px", "paddingInlineStart": "2px", "perspectiveOrigin": "25px 14px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "top": "10px", "transform": "matrix(0.9, 0, 0, 0.9, 0, 0)", "transformOrigin": "25px 14px", "whiteSpace": "nowrap", "width": "50px", "zIndex": "1500", "background": "rgba(35, 35, 35, 0.9) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50px", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "2px" },
                                        "DIV_4_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_4_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_5": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "bottom": "0px", "boxSizing": "border-box", "cursor": "pointer", "height": "24px", "inlineSize": "24px", "insetBlockEnd": "0px", "insetBlockStart": "0px", "insetInlineEnd": "0px", "insetInlineStart": "0px", "left": "0px", "letterSpacing": "1px", "perspectiveOrigin": "12px 12px", "position": "relative", "right": "0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "top": "0px", "transformOrigin": "12px 12px", "whiteSpace": "nowrap", "width": "24px", "background": "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_5_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_5_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_6": { "blockSize": "28px", "borderBlockEndColor": "rgb(35, 35, 35)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgb(35, 35, 35)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(35, 35, 35)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgb(35, 35, 35)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "height": "28px", "inlineSize": "28px", "letterSpacing": "1px", "marginInlineEnd": "78.8125px", "marginInlineStart": "6px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingInlineStart": "1px", "perspectiveOrigin": "14px 14px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "14px 14px", "whiteSpace": "nowrap", "width": "28px", "zIndex": "1500", "background": "rgb(35, 35, 35) none repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgb(35, 35, 35)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "margin": "0px 78.8125px 0px 6px", "outline": "rgb(255, 255, 255) none 0px", "padding": "0px 0px 0px 1px" },
                                        "DIV_6_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_6_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "svg_7": { "blockSize": "30px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "height": "30px", "inlineSize": "30px", "letterSpacing": "1px", "perspectiveOrigin": "15px 15px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "15px 15px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "30px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px", "overflow": "hidden" },
                                        "svg_7_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "svg_7_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "polygon_8": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "fill": "rgb(255, 216, 59)", "letterSpacing": "1px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "polygon_8_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "fill": "rgb(255, 216, 59)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "polygon_8_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "fill": "rgb(255, 216, 59)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "600 17px / 22.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_9": { "blockSize": "31px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.8) 0px 0px 10px 0px inset", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "height": "31px", "inlineSize": "194.375px", "letterSpacing": "0.5px", "marginInlineEnd": "20px", "marginInlineStart": "20px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "paddingInlineEnd": "8px", "paddingInlineStart": "8px", "perspectiveOrigin": "97.1875px 15.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "97.1875px 15.5px", "whiteSpace": "nowrap", "width": "194.375px", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "0px 20px", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 8px" },
                                        "DIV_9_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_9_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_10": {
                                            "@media only screen and (max-width: 600%) ": {
                                                "textAlign": "center",
                                                "backgroundColor": "green",
                                                "blockSize": "0px",
                                                "borderBlockEndColor": "rgb(229, 231, 235)",
                                                "borderBlockEndStyle": "solid",
                                                "borderBlockStartColor": "rgb(229, 231, 235)",
                                                "borderBlockStartStyle": "solid",
                                                "borderCollapse": "collapse",
                                                "borderInlineEndColor": "rgb(229, 231, 235)",
                                                "borderInlineEndStyle": "solid",
                                                "borderInlineStartColor": "rgb(229, 231, 235)",
                                                "borderInlineStartStyle": "solid",
                                                "boxSizing": "border-box",
                                                "display": "flex",
                                                "height": "0px",
                                                "inlineSize": "162.812px",
                                                "justifyContent": "flex-end",
                                                "letterSpacing": "1px",
                                                "minBlockSize": "auto",
                                                "minHeight": "auto",
                                                "minInlineSize": "auto",
                                                "minWidth": "auto",
                                                "perspectiveOrigin": "81.4062px 0px",
                                                "tabSize": "4",
                                                "textAlign": "center",
                                                "textSizeAdjust": "100%",
                                                "transformOrigin": "81.4062px 0px",
                                                "whiteSpace": "nowrap",
                                                "width": "162.812px",
                                                "border": "0px solid rgb(229, 231, 235)",
                                                "borderSpacing": "2px 2px",
                                                "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\""
                                            },
                                            "DIV_10_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                            "DIV_10_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 18px / 27px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" }
                                        },
                                        "svg_11": { "blockSize": "35px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "100%", "borderEndStartRadius": "100%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "100%", "borderStartStartRadius": "100%", "bottom": "15px", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "display": "block", "fill": "rgb(255, 0, 0)", "height": "35px", "inlineSize": "35px", "insetBlockEnd": "15px", "insetBlockStart": "-9px", "insetInlineEnd": "-19px", "insetInlineStart": "544px", "left": "544px", "letterSpacing": "1px", "perspectiveOrigin": "17.5px 17.5px", "position": "absolute", "right": "-19px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "top": "-9px", "transformOrigin": "17.5px 17.5px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "35px", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "100%", "borderSpacing": "2px 2px", "font": "700 30px / 45px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px", "overflow": "hidden" },
                                        "svg_11_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 30px / 45px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_11_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 30px / 45px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_12": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 8.707 7.293 A 1 1 0 0 0 7.293 8.707 L 8.586 10 L 7.293 11.293 A 1 1 0 1 0 8.707 12.707 L 10 11.414 L 11.293 12.707 A 1 1 0 0 0 12.707 11.293 L 11.414 10 L 12.707 8.707 A 1 1 0 0 0 11.293 7.293 L 10 8.586 L 8.707 7.293 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "1px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 30px / 45px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_12_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 30px / 45px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_12_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 30px / 45px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "DIV_13": {
                                            "@media only screen and (max-width: 600%) ": {
                                                "textAlign": "center",
                                                "backgroundColor": "green",
                                                "alignItems": "center",
                                                "blockSize": "46px",
                                                "borderBlockEndColor": "rgb(229, 231, 235)",
                                                "borderBlockEndStyle": "solid",
                                                "borderBlockStartColor": "rgb(229, 231, 235)",
                                                "borderBlockStartStyle": "solid",
                                                "borderCollapse": "collapse",
                                                "borderInlineEndColor": "rgb(229, 231, 235)",
                                                "borderInlineEndStyle": "solid",
                                                "borderInlineStartColor": "rgb(229, 231, 235)",
                                                "borderInlineStartStyle": "solid",
                                                "bottom": "0px",
                                                "boxSizing": "border-box",
                                                "display": "grid",
                                                "gridTemplateColumns": "186.656px 186.656px 186.656px",
                                                "gridTemplateRows": "30px",
                                                "height": "46px",
                                                "inlineSize": "560px",
                                                "insetBlockEnd": "0px",
                                                "insetBlockStart": "0px",
                                                "insetInlineEnd": "0px",
                                                "insetInlineStart": "0px",
                                                "left": "0px",
                                                "letterSpacing": "0.5px",
                                                "minBlockSize": "auto",
                                                "minHeight": "auto",
                                                "minInlineSize": "auto",
                                                "minWidth": "auto",
                                                "paddingBlockEnd": "8px",
                                                "paddingBlockStart": "8px",
                                                "perspectiveOrigin": "280px 23px",
                                                "position": "relative",
                                                "right": "0px",
                                                "tabSize": "4",
                                                "textAlign": "center",
                                                "textSizeAdjust": "100%",
                                                "top": "0px",
                                                "transformOrigin": "280px 23px",
                                                "whiteSpace": "nowrap",
                                                "width": "560px",
                                                "border": "0px solid rgb(229, 231, 235)",
                                                "borderSpacing": "2px 2px",
                                                "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                                "padding": "8px 0px",
                                                "marginLeft": "14%"
                                            },
                                            "DIV_13_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                            "DIV_13_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" }
                                        },
                                        "DIV_14": { "alignItems": "center", "blockSize": "30px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "grid", "gridTemplateColumns": "50px 100px", "gridTemplateRows": "30px", "height": "30px", "inlineSize": "186.656px", "justifyContent": "flex-start", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 15px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 15px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" }

                                        ,
                                        "DIV_64": { "alignItems": "center", "blockSize": "30px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "grid", "gridTemplateColumns": "50px 100px", "gridTemplateRows": "30px", "height": "30px", "justifyContent": "flex-start", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 15px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 15px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },

                                        "DIV_14_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_64_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_14_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_64_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_15": { " background-color:red,blockSize": "30px", "borderBlockEndColor": "rgba(250, 250, 250, 0.3)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(250, 250, 250, 0.3)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgba(250, 250, 250, 0.3)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(250, 250, 250, 0.3)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "block", "height": "30px", "inlineSize": "50px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "perspectiveOrigin": "25px 15px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "25px 15px", "whiteSpace": "nowrap", "width": "50px", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgba(250, 250, 250, 0.3)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 0px" },
                                        "SPAN_26": { "blockSize": "30px", "borderBlockEndColor": "rgba(250, 250, 250, 0.3)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(250, 250, 250, 0.3)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgba(250, 250, 250, 0.3)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(250, 250, 250, 0.3)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "block", "height": "30px", "inlineSize": "50px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "perspectiveOrigin": "25px 15px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "25px 15px", "whiteSpace": "nowrap", "width": "50px", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgba(250, 250, 250, 0.3)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 0px" }


                                        ,
                                        "SPAN_65": { "blockSize": "30px", "borderBlockEndColor": "rgba(250, 250, 250, 0.3)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(250, 250, 250, 0.3)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgba(250, 250, 250, 0.3)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(250, 250, 250, 0.3)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "block", "height": "30px", "inlineSize": "50px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "perspectiveOrigin": "25px 15px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "25px 15px", "whiteSpace": "nowrap", "width": "69px", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgba(250, 250, 250, 0.3)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 0px" },
                                        "SPAN_82": { "blockSize": "30px", "borderBlockEndColor": "rgba(250, 250, 250, 0.3)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(250, 250, 250, 0.3)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgba(250, 250, 250, 0.3)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(250, 250, 250, 0.3)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "block", "height": "30px", "inlineSize": "50px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "perspectiveOrigin": "25px 15px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "25px 15px", "whiteSpace": "nowrap", "width": "50px", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgba(250, 250, 250, 0.3)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 0px" },
                                        "SPAN_15_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_26_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_65_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_82_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_15_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_26_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_65_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_82_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_16": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 8px 0px inset", "boxSizing": "border-box", "display": "block", "height": "24px", "inlineSize": "100px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "100px", "minWidth": "100px", "paddingInlineEnd": "5px", "paddingInlineStart": "5px", "perspectiveOrigin": "50px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "50px 12px", "whiteSpace": "nowrap", "width": "105px", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "0px 6px 6px 0px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "0px 5px" },
                                        "SPAN_66": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 8px 0px inset", "boxSizing": "border-box", "display": "block", "height": "24px", "letterSpacing": "0.5px", "marginLeft": "20px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "100px", "paddingInlineEnd": "5px", "paddingInlineStart": "5px", "perspectiveOrigin": "50px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "50px 12px", "whiteSpace": "nowrap", "width": "90px", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "0px 6px 6px 0px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "0px 5px" },
                                        "SPAN_16_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_66_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_16_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_66_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_17": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "height": "24px", "inlineSize": "186.656px", "letterSpacing": "1px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "DIV_17_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "DIV_17_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "DIV_18": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.7) 0px 0px 8px 0px inset", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "display": "inline", "paddingBlockEnd": "4px", "paddingBlockStart": "4px", "paddingInlineEnd": "4px", "paddingInlineStart": "4px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "background": "rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px", "padding": "4px" },
                                        "DIV_18_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "DIV_18_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_19": { "blockSize": "18px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "height": "18px", "inlineSize": "18px", "perspectiveOrigin": "9px 9px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transform": "matrix(1, 0, 0, 1, 0, -1.82857)", "transformOrigin": "9px 9px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "18px", "animation": "1s ease 0s infinite normal none running move-up", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px", "overflow": "hidden" },
                                        "svg_22": { "blockSize": "18px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "height": "18px", "inlineSize": "18px", "perspectiveOrigin": "9px 9px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transform": "matrix(1, 0, 0, 1, 0, -1.82857)", "transformOrigin": "9px 9px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "18px", "animation": "1s ease 0s infinite normal none running move-up", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px", "overflow": "hidden" },
                                        "svg_19_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_22_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_19_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_22_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_20": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "d": "path(\"M 15.707 4.293 A 1 1 0 0 1 15.707 5.707 L 10.707 10.707 A 1 1 0 0 1 9.293 10.707 L 4.293 5.707 A 1 1 0 0 1 5.707 4.293 L 10 8.586 L 14.293 4.293 A 1 1 0 0 1 15.707 4.293 Z M 15.707 10.293 A 1 1 0 0 1 15.707 11.707 L 10.707 16.707 A 1 1 0 0 1 9.293 16.707 L 4.293 11.707 A 1 1 0 1 1 5.707 10.293 L 10 14.586 L 14.293 10.293 A 1 1 0 0 1 15.707 10.293 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_23": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "d": "path(\"M 15.707 4.293 A 1 1 0 0 1 15.707 5.707 L 10.707 10.707 A 1 1 0 0 1 9.293 10.707 L 4.293 5.707 A 1 1 0 0 1 5.707 4.293 L 10 8.586 L 14.293 4.293 A 1 1 0 0 1 15.707 4.293 Z M 15.707 10.293 A 1 1 0 0 1 15.707 11.707 L 10.707 16.707 A 1 1 0 0 1 9.293 16.707 L 4.293 11.707 A 1 1 0 1 1 5.707 10.293 L 10 14.586 L 14.293 10.293 A 1 1 0 0 1 15.707 10.293 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_20_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_23_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_20_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_23_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "SPAN_21": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "marginInlineEnd": "3px", "marginInlineStart": "3px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "0px 3px", "outline": "rgb(255, 0, 0) none 0px" },
                                        "SPAN_21_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "SPAN_21_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "DIV_24": { "alignItems": "center", "blockSize": "30px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "grid", "gridTemplateColumns": "100px 50px", "gridTemplateRows": "30px", "height": "30px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 15px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 15px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_80": { "alignItems": "center", "blockSize": "30px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "grid", "gridTemplateColumns": "100px 50px", "gridTemplateRows": "30px", "height": "30px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 15px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 15px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_24_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_80_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_24_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_80_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_25": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 8px 0px inset", "boxSizing": "border-box", "display": "block", "height": "24px", "inlineSize": "100px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "100px", "minWidth": "100px", "paddingInlineEnd": "5px", "paddingInlineStart": "5px", "perspectiveOrigin": "50px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "50px 12px", "whiteSpace": "nowrap", "width": "100px", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px 0px 0px 6px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "0px 5px" },
                                        "SPAN_81": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 8px 0px inset", "boxSizing": "border-box", "display": "block", "height": "24px", "inlineSize": "100px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "100px", "minWidth": "100px", "paddingInlineEnd": "5px", "paddingInlineStart": "5px", "perspectiveOrigin": "50px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "50px 12px", "whiteSpace": "nowrap", "width": "100px", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px 0px 0px 6px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "0px 5px" },
                                        "SPAN_25_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_81_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_25_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_81_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" }

                                        ,
                                        "DIV_27": {
                                            "@media only screen and (max-width: 600%) ": {
                                                "textAlign": "center",
                                                "backgroundColor": "green",
                                                "alignItems": "center",
                                                "blockSize": "10px",
                                                "borderBlockEndColor": "rgb(229, 231, 235)",
                                                "borderBlockEndStyle": "solid",
                                                "borderBlockStartColor": "rgb(229, 231, 235)",
                                                "borderBlockStartStyle": "solid",
                                                "borderCollapse": "collapse",
                                                "borderInlineEndColor": "rgb(229, 231, 235)",
                                                "borderInlineEndStyle": "solid",
                                                "borderInlineStartColor": "rgb(229, 231, 235)",
                                                "borderInlineStartStyle": "solid",
                                                "bottom": "0px",
                                                "boxSizing": "border-box",
                                                "display": "grid",
                                                "gridTemplateColumns": "186.656px 186.656px 186.656px",
                                                "gridTemplateRows": "56px",
                                                "height": "70px",
                                                "inlineSize": "560px",
                                                "insetBlockEnd": "0px",
                                                "insetBlockStart": "0px",
                                                "insetInlineEnd": "0px",
                                                "insetInlineStart": "0px",
                                                "left": "0px",
                                                "letterSpacing": "0.5px",
                                                "minBlockSize": "auto",
                                                "minHeight": "auto",
                                                "minInlineSize": "auto",
                                                "minWidth": "auto",
                                                "paddingBlockStart": "14px",
                                                "perspectiveOrigin": "280px 35px",
                                                "position": "relative",
                                                "right": "0px",
                                                "tabSize": "4",
                                                "textAlign": "center",
                                                "textSizeAdjust": "100%",
                                                "top": "0px",
                                                "transformOrigin": "280px 35px",
                                                "whiteSpace": "nowrap",
                                                "width": "560px",
                                                "border": "0px solid rgb(229, 231, 235)",
                                                "borderSpacing": "2px 2px",
                                                "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                                "padding": "14px 0px 0px",
                                                "marginLeft": "14%",
                                            }
                                        },
                                        "DIV_27_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_27_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_28": { "blockSize": "56px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "56px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 28px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 28px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_48": { "blockSize": "56px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "56px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 28px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 28px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_28_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_48_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_28_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_48_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_29": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "13px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_43": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_46": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_49": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_29_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_43_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_46_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_49_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_29_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_43_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_46_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_49_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_30": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "14px", "borderEndStartRadius": "14px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgb(0, 0, 0) 0px 0px 20px 0px inset", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "inline", "letterSpacing": "1px", "paddingBlockEnd": "19px", "paddingBlockStart": "4px", "paddingInlineEnd": "34px", "paddingInlineStart": "34px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px 6px 14px 14px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "4px 34px 19px" },
                                        "DIV_30_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_30_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_31": { "blockSize": "32px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "32px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 16px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 16px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_51": { "blockSize": "32px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "32px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 16px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 16px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_31_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_51_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_31_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_51_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "svg_32": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "height": "24px", "inlineSize": "24px", "letterSpacing": "0.5px", "perspectiveOrigin": "12px 12px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "12px 12px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "24px", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgb(255, 0, 0) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px", "overflow": "hidden" },
                                        "svg_53": {
                                            "blockSize": "24px",
                                            "borderBlockEndColor": "rgb(229, 231, 235)",
                                            "borderBlockEndStyle": "solid",
                                            "borderBlockStartColor": "rgb(229, 231, 235)",
                                            "borderBlockStartStyle": "solid",
                                            "borderCollapse": "collapse",
                                            "borderEndEndRadius": "50%",
                                            "borderEndStartRadius": "50%",
                                            "borderInlineEndColor": "rgb(229, 231, 235)",
                                            "borderInlineEndStyle": "solid",
                                            "borderInlineStartColor": "rgb(229, 231, 235)",
                                            "borderInlineStartStyle": "solid",
                                            "borderStartEndRadius": "50%",
                                            "borderStartStartRadius": "50%",
                                            "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px",
                                            "boxSizing": "border-box",
                                            "caretColor": "rgb(255, 0, 0)",
                                            "color": "rgb(255, 0, 0)",
                                            "columnRuleColor": "rgb(255, 0, 0)",
                                            "cursor": "pointer",
                                            "fill": "rgb(255, 0, 0)",
                                            "height": "24px",
                                            "inlineSize": "24px",
                                            "letterSpacing": "0.5px",
                                            "perspectiveOrigin": "12px 12px",
                                            "tabSize": "4",
                                            "textAlign": "center",
                                            "textDecoration": "none solid rgb(255, 0, 0)",
                                            "textSizeAdjust": "100%",
                                            "transformOrigin": "12px 12px",
                                            "verticalAlign": "middle",
                                            "whiteSpace": "nowrap",
                                            "width": "24px",
                                            "borderRadius": "50%",
                                            "borderSpacing": "2px 2px",
                                            "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                            "outline": "rgb(255, 0, 0) none 0px",
                                            "overflow": "hidden"
                                        },
                                        "svg_32_after": {
                                            "borderBlockEndColor": "rgb(229, 231, 235)",
                                            "borderBlockEndStyle": "solid",
                                            "borderBlockStartColor": "rgb(229, 231, 235)",
                                            "borderBlockStartStyle": "solid",
                                            "borderCollapse": "collapse",
                                            "borderInlineEndColor": "rgb(229, 231, 235)",
                                            "borderInlineEndStyle": "solid",
                                            "borderInlineStartColor": "rgb(229, 231, 235)",
                                            "borderInlineStartStyle": "solid",
                                            "boxSizing": "border-box",
                                            "caretColor": "rgb(255, 0, 0)",
                                            "color": "rgb(255, 0, 0)",
                                            "columnRuleColor": "rgb(255, 0, 0)",
                                            "cursor": "pointer",
                                            "fill": "rgb(255, 0, 0)",
                                            "letterSpacing": "0.5px",
                                            "tabSize": "4",
                                            "textAlign": "center",
                                            "textDecoration": "none solid rgb(255, 0, 0)",
                                            "textSizeAdjust": "100%",
                                            "whiteSpace": "nowrap",
                                            "border": "0px solid rgb(229, 231, 235)",
                                            "borderSpacing": "2px 2px",
                                            "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                            "outline": "rgb(255, 0, 0) none 0px"
                                        },
                                        "svg_53_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_32_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_53_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_33": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 7 9 A 1 1 0 0 0 7 11 H 13 A 1 1 0 1 0 13 9 H 7 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_54": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 7 9 A 1 1 0 0 0 7 11 H 13 A 1 1 0 1 0 13 9 H 7 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" }

                                        ,
                                        "path_33_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_54_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_33_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_54_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "INPUT_34": { "appearance": "none", "blockSize": "32px", "borderBlockEndColor": "rgba(0, 0, 0, 0)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(0, 0, 0, 0)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "25px", "borderEndStartRadius": "25px", "borderInlineEndColor": "rgba(0, 0, 0, 0)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(0, 0, 0, 0)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "25px", "borderStartStartRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.9) 0px 0px 10px 0px inset", "height": "32px", "inlineSize": "78px", "marginInlineEnd": "12px", "marginInlineStart": "12px", "paddingBlockEnd": "3px", "paddingBlockStart": "3px", "paddingInlineEnd": "0px", "paddingInlineStart": "0px", "perspectiveOrigin": "39px 16px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "39px 16px", "userSelect": "text", "whiteSpace": "nowrap", "width": "78px", "border": "1px solid rgba(0, 0, 0, 0)", "borderRadius": "25px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "0px 12px", "padding": "3px 0px" },
                                        "INPUT_55": { "appearance": "none", "blockSize": "32px", "borderBlockEndColor": "rgba(0, 0, 0, 0)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(0, 0, 0, 0)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "25px", "borderEndStartRadius": "25px", "borderInlineEndColor": "rgba(0, 0, 0, 0)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(0, 0, 0, 0)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "25px", "borderStartStartRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.9) 0px 0px 10px 0px inset", "height": "32px", "inlineSize": "78px", "marginInlineEnd": "12px", "marginInlineStart": "12px", "paddingBlockEnd": "3px", "paddingBlockStart": "3px", "paddingInlineEnd": "0px", "paddingInlineStart": "0px", "perspectiveOrigin": "39px 16px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "39px 16px", "userSelect": "text", "whiteSpace": "nowrap", "width": "78px", "border": "1px solid rgba(0, 0, 0, 0)", "borderRadius": "25px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "0px 12px", "padding": "3px 0px" },
                                        "INPUT_34_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "userSelect": "text", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "INPUT_55_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "userSelect": "text", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "INPUT_34_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "userSelect": "text", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "INPUT_55_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "userSelect": "text", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "svg_35": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "height": "24px", "inlineSize": "24px", "letterSpacing": "0.5px", "perspectiveOrigin": "12px 12px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "transformOrigin": "12px 12px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "24px", "background": "", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px", "overflow": "hidden" },
                                        "svg_56": {
                                            "blockSize": "24px",
                                            "borderBlockEndColor": "rgb(229, 231, 235)",
                                            "borderBlockEndStyle": "solid",
                                            "borderBlockStartColor": "rgb(229, 231, 235)",
                                            "borderBlockStartStyle": "solid",
                                            "borderCollapse": "collapse",
                                            "borderEndEndRadius": "50%",
                                            "borderEndStartRadius": "50%",
                                            "borderInlineEndColor": "rgb(229, 231, 235)",
                                            "borderInlineEndStyle": "solid",
                                            "borderInlineStartColor": "rgb(229, 231, 235)",
                                            "borderInlineStartStyle": "solid",
                                            "borderStartEndRadius": "50%",
                                            "borderStartStartRadius": "50%",
                                            "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px",
                                            "boxSizing": "border-box",
                                            "caretColor": "rgb(0, 128, 0)",
                                            "color": "rgb(0, 128, 0)",
                                            "columnRuleColor": "rgb(0, 128, 0)",
                                            "cursor": "pointer",
                                            "fill": "rgb(0, 128, 0)",
                                            "height": "24px",
                                            "inlineSize": "24px",
                                            "letterSpacing": "0.5px",
                                            "perspectiveOrigin": "12px 12px",
                                            "tabSize": "4",
                                            "textAlign": "center",
                                            "textDecoration": "none solid rgb(0, 128, 0)",
                                            "textSizeAdjust": "100%",
                                            "transformOrigin": "12px 12px",
                                            "verticalAlign": "middle",
                                            "whiteSpace": "nowrap",
                                            "width": "24px",
                                            "height": "19px",
                                            "width": "20px",
                                            "border": "0px solid rgb(229, 231, 235)",
                                            "borderRadius": "50%",
                                            "borderSpacing": "2px 2px",
                                            "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                            "outline": "rgb(0, 128, 0) none 0px",
                                            "overflow": "hidden"
                                        },
                                        "svg_35_after": {
                                            "borderBlockEndColor": "rgb(229, 231, 235)",
                                            "borderBlockEndStyle": "solid",
                                            "borderBlockStartColor": "rgb(229, 231, 235)",
                                            "borderBlockStartStyle": "solid",
                                            "borderCollapse": "collapse",
                                            "borderInlineEndColor": "rgb(229, 231, 235)",
                                            "borderInlineEndStyle": "solid",
                                            "borderInlineStartColor": "rgb(229, 231, 235)",
                                            "borderInlineStartStyle": "solid",
                                            "boxSizing": "border-box",
                                            "caretColor": "rgb(0, 128, 0)",
                                            "color": "rgb(0, 128, 0)",
                                            "columnRuleColor": "rgb(0, 128, 0)",
                                            "cursor": "pointer",
                                            "fill": "rgb(0, 128, 0)",
                                            "letterSpacing": "0.5px",
                                            "tabSize": "4",
                                            "textAlign": "center",
                                            "textDecoration": "none solid rgb(0, 128, 0)",
                                            "textSizeAdjust": "100%",
                                            "whiteSpace": "nowrap",
                                            "border": "0px solid rgb(229, 231, 235)",
                                            "borderSpacing": "2px 2px",
                                            "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                            "outline": "rgb(0, 128, 0) none 0px"
                                        },
                                        "svg_56_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "svg_35_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "svg_56_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_36": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 11 7 A 1 1 0 1 0 9 7 V 9 H 7 A 1 1 0 1 0 7 11 H 9 V 13 A 1 1 0 1 0 11 13 V 11 H 13 A 1 1 0 1 0 13 9 H 11 V 7 Z\")", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_57": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 11 7 A 1 1 0 1 0 9 7 V 9 H 7 A 1 1 0 1 0 7 11 H 9 V 13 A 1 1 0 1 0 11 13 V 11 H 13 A 1 1 0 1 0 13 9 H 11 V 7 Z\")", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_36_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_57_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_36_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_57_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "DIV_37": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_58": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_76": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_37_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_58_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_76_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_37_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_58_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_76_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "svg_38": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "height": "24px", "inlineSize": "24px", "letterSpacing": "0.5px", "marginBlockEnd": "7.2px", "marginBlockStart": "7.2px", "marginInlineEnd": "7.2px", "marginInlineStart": "7.2px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "24px", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgb(255, 0, 0) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "7.2px", "outline": "rgb(255, 0, 0) none 0px", "overflow": "hidden" },
                                        "svg_59": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "height": "24px", "inlineSize": "24px", "letterSpacing": "0.5px", "marginBlockEnd": "7.2px", "marginBlockStart": "7.2px", "marginInlineEnd": "7.2px", "marginInlineStart": "7.2px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "24px", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgb(255, 0, 0) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "7.2px", "outline": "rgb(255, 0, 0) none 0px", "overflow": "hidden" },
                                        "svg_38_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_59_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_38_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_59_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_39": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 7 9 A 1 1 0 0 0 7 11 H 13 A 1 1 0 1 0 13 9 H 7 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_60": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 7 9 A 1 1 0 0 0 7 11 H 13 A 1 1 0 1 0 13 9 H 7 Z\")", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_39_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_60_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_39_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "path_60_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 0, 0)", "clipRule": "evenodd", "color": "rgb(255, 0, 0)", "columnRuleColor": "rgb(255, 0, 0)", "cursor": "pointer", "fill": "rgb(255, 0, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 0, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 0, 0) none 0px" },
                                        "svg_40": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "height": "24px", "inlineSize": "24px", "letterSpacing": "0.5px", "marginBlockEnd": "7.2px", "marginBlockStart": "7.2px", "marginInlineEnd": "7.2px", "marginInlineStart": "7.2px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "24px", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgb(0, 128, 0) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "7.2px", "outline": "rgb(0, 128, 0) none 0px", "overflow": "hidden" },
                                        "svg_61": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "height": "24px", "inlineSize": "24px", "letterSpacing": "0.5px", "marginBlockEnd": "7.2px", "marginBlockStart": "7.2px", "marginInlineEnd": "7.2px", "marginInlineStart": "7.2px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "24px", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgb(0, 128, 0) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "7.2px", "outline": "rgb(0, 128, 0) none 0px", "overflow": "hidden" },
                                        "svg_40_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "svg_61_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "svg_40_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "svg_61_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_41": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 11 7 A 1 1 0 1 0 9 7 V 9 H 7 A 1 1 0 1 0 7 11 H 9 V 13 A 1 1 0 1 0 11 13 V 11 H 13 A 1 1 0 1 0 13 9 H 11 V 7 Z\")", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_62": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 11 7 A 1 1 0 1 0 9 7 V 9 H 7 A 1 1 0 1 0 7 11 H 9 V 13 A 1 1 0 1 0 11 13 V 11 H 13 A 1 1 0 1 0 13 9 H 11 V 7 Z\")", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_41_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_62_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_41_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "path_62_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(0, 128, 0)", "clipRule": "evenodd", "color": "rgb(0, 128, 0)", "columnRuleColor": "rgb(0, 128, 0)", "cursor": "pointer", "fill": "rgb(0, 128, 0)", "fillRule": "evenodd", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(0, 128, 0)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 22px / 33px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(0, 128, 0) none 0px" },
                                        "DIV_42": { "blockSize": "48px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "48px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 24px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 24px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_42_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_42_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_44": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_44_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_44_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_45": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "14px", "borderEndStartRadius": "14px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgb(0, 0, 0) 0px 0px 20px 0px inset", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "inline", "letterSpacing": "1px", "paddingBlockEnd": "15px", "paddingBlockStart": "4px", "paddingInlineEnd": "15px", "paddingInlineStart": "15px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px 6px 14px 14px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "4px 15px 15px" },
                                        "DIV_45_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_45_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_47": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "9px", "borderEndStartRadius": "9px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "9px", "borderStartStartRadius": "9px", "boxShadow": "rgba(0, 0, 0, 0.8) 0px 0px 10px 0px inset", "boxSizing": "border-box", "display": "inline", "letterSpacing": "0.5px", "paddingBlockEnd": "3px", "paddingBlockStart": "1px", "paddingInlineEnd": "14px", "paddingInlineStart": "14px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "background": "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "9px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "1px 14px 3px" },
                                        "DIV_47_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_47_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_50": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "14px", "borderEndStartRadius": "14px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgb(0, 0, 0) 0px 0px 20px 0px inset", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "display": "inline", "letterSpacing": "1px", "paddingBlockEnd": "19px", "paddingBlockStart": "4px", "paddingInlineEnd": "15px", "paddingInlineStart": "15px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px 6px 14px 14px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "4px 15px 19px" },
                                        "DIV_50_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_50_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_52": { "blockSize": "32px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "32px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "perspectiveOrigin": "93.3281px 16px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 16px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_52_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_52_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" }

                                        ,
                                        "DIV_63": {
                                            "@media only screen and (max-width: 600%)@media only screen and (min-width: 1200px) ": {
                                                "textAlign": "center",
                                                "backgroundColor": "green",
                                                "alignItems": "center",
                                                "blockSize": "65px",
                                                "borderBlockEndColor": "rgb(229, 231, 235)",
                                                "borderBlockEndStyle": "solid",
                                                "borderBlockStartColor": "rgb(229, 231, 235)",
                                                "borderBlockStartStyle": "solid",
                                                "borderCollapse": "collapse",
                                                "borderInlineEndColor": "rgb(229, 231, 235)",
                                                "borderInlineEndStyle": "solid",
                                                "borderInlineStartColor": "rgb(229, 231, 235)",
                                                "borderInlineStartStyle": "solid",
                                                "bottom": "0px",
                                                "boxSizing": "border-box",
                                                "display": "grid",
                                                "gridTemplateColumns": "186.656px 186.656px 186.656px",
                                                "gridTemplateRows": "30px",
                                                "height": "65px",
                                                "inlineSize": "560px",
                                                "insetBlockEnd": "0px",
                                                "insetBlockStart": "0px",
                                                "insetInlineEnd": "0px",
                                                "insetInlineStart": "0px",
                                                "left": "0px",
                                                "letterSpacing": "0.5px",
                                                "minBlockSize": "auto",
                                                "minHeight": "auto",
                                                "minInlineSize": "auto",
                                                "minWidth": "auto",
                                                "paddingBlockEnd": "20px",
                                                "paddingBlockStart": "15px",
                                                "perspectiveOrigin": "280px 32.5px",
                                                "position": "relative",
                                                "right": "0px",
                                                "tabSize": "4",
                                                "textAlign": "center",
                                                "textSizeAdjust": "100%",
                                                "top": "0px",
                                                "transformOrigin": "280px 32.5px",
                                                "whiteSpace": "nowrap",
                                                "width": "560px",
                                                "border": "0px solid rgb(229, 231, 235)",
                                                "borderSpacing": "2px 2px",
                                                "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                                                "padding": "15px 0px 20px",
                                                "marginLeft": "14%",
                                            }
                                        },
                                        "DIV_63_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_63_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_67": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "letterSpacing": "0.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "93.3281px 12px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_67_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_67_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_68": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "bottom": "0px", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "insetBlockEnd": "0px", "insetBlockStart": "0px", "insetInlineEnd": "0px", "insetInlineStart": "0px", "left": "0px", "letterSpacing": "1px", "perspectiveOrigin": "93.3281px 12px", "position": "relative", "right": "0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "top": "0px", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_69": { "blockSize": "24px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "bottom": "0px", "boxSizing": "border-box", "height": "24px", "inlineSize": "186.656px", "insetBlockEnd": "0px", "insetBlockStart": "0px", "insetInlineEnd": "0px", "insetInlineStart": "0px", "left": "0px", "letterSpacing": "1px", "perspectiveOrigin": "93.3281px 12px", "position": "relative", "right": "0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "top": "0px", "transformOrigin": "93.3281px 12px", "whiteSpace": "nowrap", "width": "186.656px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_68_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_69_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_68_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_69_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_70": { "borderBlockEndColor": "rgba(250, 250, 250, 0.3)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(250, 250, 250, 0.3)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgba(250, 250, 250, 0.3)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(250, 250, 250, 0.3)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "paddingBlockEnd": "2px", "paddingBlockStart": "2px", "paddingInlineEnd": "5px", "paddingInlineStart": "5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgba(250, 250, 250, 0.3)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 5px" },
                                        "SPAN_70_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_70_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_71": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_71_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_71_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_72": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "display": "none", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_72_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_72_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "SPAN_73": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 0px 8px 0px inset", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "paddingInlineEnd": "5px", "paddingInlineStart": "5px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "0px 6px 6px 0px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "0px 5px" },
                                        "SPAN_73_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_73_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_74": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_74_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_74_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_75": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "display": "none", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_75_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_75_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "cursor": "pointer", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_77": { "alignItems": "center", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "flex", "inlineSize": "100%", "insetInlineStart": "0px", "justifyContent": "center", "left": "0px", "letterSpacing": "0.5px", "paddingBlockEnd": "10px", "paddingBlockStart": "18px", "position": "absolute", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "width": "100%", "zIndex": "1", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "flexFlow": "column nowrap", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "18px 0px 10px" },
                                        "DIV_77_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_77_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "letterSpacing": "0.5px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_78": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "14px", "borderEndStartRadius": "14px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "10px", "borderStartStartRadius": "10px", "boxShadow": "rgb(0, 0, 0) 0px 0px 20px 0px inset", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "inlineSize": "99.1562px", "letterSpacing": "1px", "paddingBlockEnd": "17px", "paddingBlockStart": "4px", "paddingInlineEnd": "30px", "paddingInlineStart": "30px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "width": "99.1562px", "background": "rgb(45, 45, 45) none repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "10px 10px 14px 14px", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "4px 30px 17px" },
                                        "DIV_78_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "DIV_78_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "letterSpacing": "1px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "INPUT_79": { "appearance": "none", "borderBlockEndColor": "rgba(0, 0, 0, 0)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgba(0, 0, 0, 0)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "25px", "borderEndStartRadius": "25px", "borderInlineEndColor": "rgba(0, 0, 0, 0)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgba(0, 0, 0, 0)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "25px", "borderStartStartRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.9) 0px 0px 10px 0px inset", "display": "block", "inlineSize": "78px", "insetBlockStart": "46px", "marginInlineEnd": "12px", "marginInlineStart": "12px", "paddingBlockEnd": "3px", "paddingBlockStart": "3px", "paddingInlineEnd": "0px", "paddingInlineStart": "0px", "position": "absolute", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "top": "46px", "userSelect": "text", "whiteSpace": "nowrap", "width": "78px", "border": "1px solid rgba(0, 0, 0, 0)", "borderRadius": "25px", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "0px 12px", "padding": "3px 0px" },
                                        "INPUT_79_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "userSelect": "text", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "INPUT_79_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "userSelect": "text", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 16px / 24px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_83": { "blockSize": "0px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "height": "0px", "inlineSize": "560px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "perspectiveOrigin": "280px 0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "transformOrigin": "280px 0px", "whiteSpace": "nowrap", "width": "560px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_83_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_83_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_84": { "alignContent": "center", "alignItems": "center", "blockSize": "51px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "bottom": "-8px", "boxSizing": "border-box", "display": "flex", "height": "51px", "inlineSize": "560px", "insetBlockEnd": "-8px", "insetBlockStart": "8px", "insetInlineEnd": "0px", "insetInlineStart": "0px", "justifyContent": "center", "left": "0px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "20px", "perspectiveOrigin": "280px 25.5px", "position": "relative", "right": "0px", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "top": "8px", "transformOrigin": "280px 25.5px", "whiteSpace": "nowrap", "width": "560px", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "padding": "0px 0px 20px" },
                                        "DIV_84_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_84_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "block", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "LABEL_85": { "blockSize": "31px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "display": "block", "height": "31px", "inlineSize": "73.3438px", "letterSpacing": "1.5px", "marginInlineEnd": "28px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "4px", "paddingBlockStart": "2px", "paddingInlineEnd": "20px", "paddingInlineStart": "20px", "perspectiveOrigin": "36.6719px 15.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "36.6719px 15.5px", "whiteSpace": "nowrap", "width": "73.3438px", "zIndex": "1", "background": "rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(5, 150, 105), rgb(4, 120, 87)) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "500 17px / 25.5px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "margin": "0px 28px 0px 0px", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 20px 4px" },
                                        "LABEL_85_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 17px / 25.5px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "LABEL_85_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 17px / 25.5px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "LABEL_86": { "blockSize": "31px", "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderEndEndRadius": "6px", "borderEndStartRadius": "6px", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "borderStartEndRadius": "6px", "borderStartStartRadius": "6px", "boxShadow": "rgba(0, 0, 0, 0.6) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "display": "block", "height": "31px", "inlineSize": "73.1719px", "letterSpacing": "1.5px", "minBlockSize": "auto", "minHeight": "auto", "minInlineSize": "auto", "minWidth": "auto", "paddingBlockEnd": "4px", "paddingBlockStart": "2px", "paddingInlineEnd": "20px", "paddingInlineStart": "20px", "perspectiveOrigin": "36.5781px 15.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "transformOrigin": "36.5859px 15.5px", "whiteSpace": "nowrap", "width": "73.1719px", "zIndex": "1", "background": "rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(220, 38, 38), rgb(185, 28, 28)) repeat scroll 0% 0% / auto padding-box border-box", "border": "0px solid rgb(229, 231, 235)", "borderRadius": "6px", "borderSpacing": "2px 2px", "font": "500 17px / 25.5px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px", "padding": "2px 20px 4px" },
                                        "LABEL_86_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 17px / 25.5px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "LABEL_86_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "columnRuleColor": "rgb(255, 255, 255)", "cursor": "pointer", "letterSpacing": "1.5px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(255, 255, 255)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "500 17px / 25.5px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(255, 255, 255) none 0px" },
                                        "svg_87": { "blockSize": "28.7969px", "borderBlockEndColor": "rgb(35, 35, 35)", "borderBlockEndStyle": "solid", "borderBlockEndWidth": "1px", "borderBlockStartColor": "rgb(35, 35, 35)", "borderBlockStartStyle": "solid", "borderBlockStartWidth": "1px", "borderCollapse": "collapse", "borderEndEndRadius": "50%", "borderEndStartRadius": "50%", "borderInlineEndColor": "rgb(35, 35, 35)", "borderInlineEndStyle": "solid", "borderInlineEndWidth": "1px", "borderInlineStartColor": "rgb(35, 35, 35)", "borderInlineStartStyle": "solid", "borderInlineStartWidth": "1px", "borderStartEndRadius": "50%", "borderStartStartRadius": "50%", "bottom": "21.0938px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 0px 10px 0px", "boxSizing": "border-box", "caretColor": "rgb(45, 45, 45)", "color": "rgb(45, 45, 45)", "columnRuleColor": "rgb(45, 45, 45)", "cursor": "pointer", "display": "block", "fill": "rgb(45, 45, 45)", "height": "28.7969px", "inlineSize": "28.7969px", "insetBlockEnd": "21.0938px", "insetBlockStart": "1.10938px", "insetInlineEnd": "0px", "insetInlineStart": "531.203px", "left": "531.203px", "perspectiveOrigin": "14.3906px 14.3906px", "position": "absolute", "right": "0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(45, 45, 45)", "textSizeAdjust": "100%", "top": "1.10938px", "transformOrigin": "14.3984px 14.3984px", "verticalAlign": "middle", "whiteSpace": "nowrap", "width": "28.7969px", "zIndex": "10", "background": "rgba(0, 0, 0, 0) radial-gradient(rgb(255, 255, 255) 50%, rgb(45, 45, 45) 0px) repeat scroll 0% 0% / auto padding-box border-box", "border": "1px solid rgb(35, 35, 35)", "borderRadius": "50%", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(45, 45, 45) none 0px", "overflow": "hidden" },
                                        "svg_87_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(45, 45, 45)", "color": "rgb(45, 45, 45)", "columnRuleColor": "rgb(45, 45, 45)", "cursor": "pointer", "fill": "rgb(45, 45, 45)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(45, 45, 45)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(45, 45, 45) none 0px" },
                                        "svg_87_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(45, 45, 45)", "color": "rgb(45, 45, 45)", "columnRuleColor": "rgb(45, 45, 45)", "cursor": "pointer", "fill": "rgb(45, 45, 45)", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(45, 45, 45)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(45, 45, 45) none 0px" },
                                        "path_88": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(45, 45, 45)", "clipRule": "evenodd", "color": "rgb(45, 45, 45)", "columnRuleColor": "rgb(45, 45, 45)", "cursor": "pointer", "d": "path(\"M 10 18 A 8 8 0 1 0 10 2 A 8 8 0 0 0 10 18 Z M 13.707 9.293 L 10.707 6.293 A 1 1 0 0 0 9.293 6.293 L 6.293 9.293 A 1 1 0 0 0 7.707 10.707 L 9 9.414 V 13 A 1 1 0 1 0 11 13 V 9.414 L 12.293 10.707 A 1 1 0 0 0 13.707 9.293 Z\")", "fill": "rgb(45, 45, 45)", "fillRule": "evenodd", "perspectiveOrigin": "0px 0px", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(45, 45, 45)", "textSizeAdjust": "100%", "transformOrigin": "0px 0px", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(45, 45, 45) none 0px" },
                                        "path_88_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(45, 45, 45)", "clipRule": "evenodd", "color": "rgb(45, 45, 45)", "columnRuleColor": "rgb(45, 45, 45)", "cursor": "pointer", "fill": "rgb(45, 45, 45)", "fillRule": "evenodd", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(45, 45, 45)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(45, 45, 45) none 0px" },
                                        "path_88_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "caretColor": "rgb(45, 45, 45)", "clipRule": "evenodd", "color": "rgb(45, 45, 45)", "columnRuleColor": "rgb(45, 45, 45)", "cursor": "pointer", "fill": "rgb(45, 45, 45)", "fillRule": "evenodd", "tabSize": "4", "textAlign": "center", "textDecoration": "none solid rgb(45, 45, 45)", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", "outline": "rgb(45, 45, 45) none 0px" },
                                        "DIV_89": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_93": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_101": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_115": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_123": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_128": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_137": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "display": "none", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_89_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_93_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_101_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_115_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_123_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_128_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_137_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_89_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_93_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_101_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_115_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_123_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_128_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_137_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_90": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_91": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_94": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_96": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_98": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_100": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_103": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_105": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_107": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_109": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_111": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_113": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_116": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_118": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_120": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_122": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_125": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_127": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_130": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_132": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_134": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_136": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_90_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_91_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_94_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_96_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_98_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_100_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_103_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_105_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_107_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_109_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_111_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_113_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_116_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_118_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_120_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_122_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_125_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_127_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_130_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_132_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_134_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_136_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_90_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_91_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_94_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_96_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_98_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_100_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_103_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_105_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_107_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_109_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_111_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_113_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_116_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_118_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_120_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_122_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_125_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_127_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_130_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_132_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_134_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_136_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_92": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_95": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_99": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_104": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_108": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_112": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_117": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_121": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_126": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_131": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_135": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_92_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_95_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_99_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_104_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_108_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_112_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_117_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_121_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_126_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_131_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_135_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_92_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_95_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_99_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_104_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_108_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_112_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_117_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_121_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_126_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_131_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_135_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_97": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_102": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_110": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_119": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_133": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_97_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_102_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_110_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_119_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_133_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_97_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_102_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_110_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_119_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_133_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_106": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_114": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_138": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_106_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_114_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_138_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_106_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "SPAN_114_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_138_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_124": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_124_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "DIV_124_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "I_129": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "italic 700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "I_129_after": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "italic 700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" },
                                        "I_129_before": { "borderBlockEndColor": "rgb(229, 231, 235)", "borderBlockEndStyle": "solid", "borderBlockStartColor": "rgb(229, 231, 235)", "borderBlockStartStyle": "solid", "borderCollapse": "collapse", "borderInlineEndColor": "rgb(229, 231, 235)", "borderInlineEndStyle": "solid", "borderInlineStartColor": "rgb(229, 231, 235)", "borderInlineStartStyle": "solid", "boxSizing": "border-box", "tabSize": "4", "textAlign": "center", "textSizeAdjust": "100%", "whiteSpace": "nowrap", "border": "0px solid rgb(229, 231, 235)", "borderSpacing": "2px 2px", "font": "italic 700 14.4px / 21.6px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" }
                                    }