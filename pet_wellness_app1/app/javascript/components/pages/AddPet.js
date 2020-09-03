import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import {
    Row,
    Container,
    Nav,
    NavItem,
    Col
  } from 'reactstrap'
class AddPet extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col>
                        <SideBar/>
                    </Col>
                    <Col>
                        <h3> Add a Pet </h3>
                    </Col>
                </Row>
                
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default AddPet