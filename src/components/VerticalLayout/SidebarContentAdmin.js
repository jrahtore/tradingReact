import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContentAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    var user_data = JSON.parse(localStorage.getItem('user_data'));
    return (
      <React.Fragment >
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled jj" id="side-menu">
            <li style={{ color: "white" }} className="menu-title">{this.props.t("Menu")}</li>
            {user_data.dashboard == 'yes' || user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/dashboard-admin" className="waves-effect">
                  <i className="ri-dashboard-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("Dashboard")}</span>
                </Link>
              </li>
              : <></>}
            {user_data.Create_Clients == 'yes' || user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/create-client" className=" waves-effect">
                  <i className="ri-calendar-2-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("Create Client")}</span>
                </Link>
              </li>
              : <></>}
            {user_data.View_Client == 'yes' || user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/view-clients" className=" waves-effect">
                  <i className="ri-chat-1-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("View Clients")}</span>
                </Link>
              </li>
              : <></>}
            {user_data.Client_Fund == 'yes' || user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/client-fund" className="waves-effect">
                  <i className="ri-store-2-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("Client Fund")}</span>
                </Link>
              </li>
              : <></>}
            {user_data.Clients_Brokerage == 'yes' || user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/client-brokerage" className="waves-effect">
                  <i className="ri-mail-send-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("Client Brokerage")}</span>
                </Link>
              </li>
              : <></>}
            {user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/create-admin" className=" waves-effect">
                  <i className="ri-artboard-2-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("Create sub-Admin")}</span>
                </Link>
              </li>
              : <></>}
            {user_data.user_type == 'super_admin' ?
              <li>
                <Link to="/view-admins" className=" waves-effect">
                  <i className="ri-artboard-2-line"></i>
                  <span style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "initial" }} className="ms-1">{this.props.t("View sub-Admins")}</span>
                </Link>
              </li>
              : <></>}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContentAdmin))
);
