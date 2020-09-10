import React, { Component } from 'react'
import {
    Row,
    Container,
    Nav,
    NavItem,
    Col,
    NavLink,
    Link
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faInfo,
   faBriefcaseMedical,
   faBook,
   faCalendarCheck,
   faUtensils,
   faQuestion,
   faEnvelope
 } from '@fortawesome/free-solid-svg-icons'

class SideBar extends Component{
    render(){
        return(
        <React.Fragment>

        <div className="wrapper">

             <nav id="sidebar">
            </nav>
            <Nav vertical id="sideBarLinks">
              <NavItem>
                <NavLink to="#general"><FontAwesomeIcon icon={faInfo} size="3x" className="icon"/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#medical"><FontAwesomeIcon icon={faBriefcaseMedical} size="3x" className="icon"/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#digestion"><FontAwesomeIcon icon={faUtensils} size="3x" className="icon"/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#appointment"><FontAwesomeIcon icon={faCalendarCheck} size="3x" className="icon"/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#diary"><FontAwesomeIcon icon={faBook} size="3x" className="icon"/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#misc"><FontAwesomeIcon icon={faQuestion} size="3x" className="icon"/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faEnvelope} size="3x" className="icon"/></NavLink>
              </NavItem>
            </Nav>
          </div>
        </React.Fragment>

        )
    }
}

export default SideBar
