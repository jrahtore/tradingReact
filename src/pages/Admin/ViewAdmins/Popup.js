import React, { Component } from "react";
import "./Popup.css"
import { Row, Col, Card, CardBody, Modal,Container, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
export class UpdatePassword extends Component {
    constructor(props){
        super(props)
        this.state={
            password:"",
            modal_static:false
        }
    }

    handleChange(e)
    {
        this.setState({password:e.target.value})
        this.props.setPass(e.target.value)
    }
    render(props){
    return (this.props.trigged)? (
        
        
           
      <Modal
                          isOpen={this.props.trigged}
                          toggle={this.tog_static}
                          backdrop="static"
                        >
                          <ModalHeader toggle={() => this.setState({ modal_static: false })}>
                          Change Password
                          </ModalHeader>
                          <ModalBody>
                          <input className="form-control" name="password" type="password" value={this.state.password} onChange={(e) => {this.handleChange(e)}} placeholder="New Password"  /><br/>
                 
                          
                          <ModalFooter>
                          {this.props.children}
                          </ModalFooter>  
                          </ModalBody>
                        </Modal>
        
    ):""
}}
export default UpdatePassword;