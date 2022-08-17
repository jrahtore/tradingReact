import React from "react";
import { Route, Redirect } from "react-router-dom";
import NseFO from "../pages/NseFO/NseFO";

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuthProtected,
	...rest
}) => (
		<Route
			{...rest}
			render={props => {
				console.log("isAuthProtected",isAuthProtected)
				console.log("authuser",localStorage.getItem("authUser"))
				if (isAuthProtected && !localStorage.getItem("authUser")) {
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
						
					);
				}

				return (
					<Layout>
						<Component {...props} />
					</Layout>
				);
				
			}}
		/>
		
	);

export default AppRoute;

