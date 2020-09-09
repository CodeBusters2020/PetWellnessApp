import React, { Component } from 'react'
import {
    Row,
    Container,
    Nav,
    NavItem,
    Col,
    NavLink
} from 'reactstrap'

class SideBar extends Component{
    render(){
        return(
        <React.Fragment>

        <div className="wrapper">

             <nav id="sidebar">


            </nav>
            <Nav vertical id="sideBarLinks">
              <NavItem>
                <NavLink href="#general">General</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#medical">Medical</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#digestion">Digestion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#appointment">Appointments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#diary">Diary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#misc">Miscellaneous</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Send Pet Info</NavLink>
              </NavItem>
            </Nav>
          </div>
        </React.Fragment>

        )
    }
}

export default SideBar
