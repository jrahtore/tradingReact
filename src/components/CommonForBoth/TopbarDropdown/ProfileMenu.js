import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


//i18n
import { withNamespaces } from "react-i18next";

// users
import avatar2 from '../../../assets/images/users/avatar-2.jpg';

class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {

        let username = "Admin";
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            const uNm = obj.username;
            username = obj.username;
        }

        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block user-dropdown">
                    {/* <DropdownToggle tag="button" className="btn header-item waves-effect" id="page-header-user-dropdown"> */}
                        {/* <a href="/logout" style={{ fontFamily: "sans-serif", color: "white", fontSize: "larger", fontWeight: "bolder", }}><i className="ri-shut-down-line align-middle mr-1"></i> {this.props.t('Logout')}</a> */}
                        {/* <DropdownItem style={{ fontFamily: "sans-serif", color: "white", fontSize: "larger", fontWeight: "bolder" }} href="/logout"><i className="ri-shut-down-line align-middle mr-1"></i> {this.props.t('Logout')}</DropdownItem> */}

                    {/* </DropdownToggle> */}
                    <a href="/logout">
                        <h5 style={{ color: 'white', fontWeight: 'bold', marginTop:22 }}> <i className="ri-shut-down-line align-middle mr-1"></i> {this.props.t('Logout')}</h5>
                    </a>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default withNamespaces()(ProfileMenu);
