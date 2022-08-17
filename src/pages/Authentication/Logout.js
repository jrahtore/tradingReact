import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MAPI from "../../api_test";


import { logoutUser } from '../../store/actions';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        // Fire Action for Remove all Item from localstorage and redirect to login page
        this.props.logoutUser(this.props.history);
        localStorage.removeItem("user_type")
        localStorage.removeItem("nseFO")
        localStorage.removeItem("user_data")
        localStorage.removeItem("token")
    }

    render() {
        return (
            <React.Fragment>
               {/* <h1>&nbsp;</h1> */}
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null,{ logoutUser })(Logout));

