import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { } from "../../store/actions";

//Simple bar
import SimpleBar from "simplebar-react";

import SidebarContent from "./SidebarContent";
import SidebarContentAdmin from "./SidebarContentAdmin";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        {this.props.type !== "condensed" ? (
                            <SimpleBar style={{ maxHeight: "100%" }}>
                                {localStorage.getItem('user_type') == 'super_admin' || localStorage.getItem('user_type') == 'sub_admin' ?
                                    <SidebarContentAdmin /> : <SidebarContent />}
                            </SimpleBar>
                        ) : <>
                                {localStorage.getItem('user_type') == 'super_admin' || localStorage.getItem('user_type') == 'sub_admin' ?
                                    <SidebarContentAdmin /> : <SidebarContent />}
                            </>}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {
        layout: state.Layout
    };
};
export default connect(mapStatetoProps, {})(withRouter(Sidebar));
