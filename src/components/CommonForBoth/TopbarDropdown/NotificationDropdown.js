import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media } from "reactstrap";
import SimpleBar from "simplebar-react";

//i18b
import { withNamespaces } from "react-i18next";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

class NotificationDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }
  render() {
    var user_data = JSON.parse(localStorage.getItem('user_data'));
    console.log("this is username",user_data)
  
    if(user_data.username!=""){ 
       var data= user_data.username;
    }
    else if(user_data.first_name!=""){ 
       var data= user_data.first_name;
    }
    else{ 
        var data= "first";
    }
    return (
      <React.Fragment>
                        <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block">
                            <DropdownToggle tag="button"  className="btn header-item noti-icon waves-effect" style={{color:"white",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"large"}} id="page-header-notifications-dropdown">
                                {data}
                            </DropdownToggle>
          
                        </Dropdown>
      </React.Fragment>
    );
  }
}
export default withNamespaces()(NotificationDropdown);
