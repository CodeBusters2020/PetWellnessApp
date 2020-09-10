import React, { Component } from 'react'
import {
    Row,
    Container,
    Nav,
    NavItem,
    Col
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
 import { NavHashLink as NavLink } from 'react-router-hash-link'

class SideBar extends Component{
    render(){
        return(
        <React.Fragment>

        <div className="wrapper">

             <nav id="sidebar">
            </nav>
            <Nav vertical id="sideBarLinks">
              <NavItem>
                <NavLink smooth to="#general" activeClassName="selected"><FontAwesomeIcon icon={faInfo} size="3x" className="icon"/></NavLink>
              </NavItem>
              <br/>
              <NavItem>
                <NavLink smooth to="#medical" activeClassName="selected"><FontAwesomeIcon icon={faBriefcaseMedical} size="3x" className="icon"/></NavLink>
              </NavItem>
              <br/>
              <NavItem>
                <NavLink smooth to="#digestion" activeClassName="selected"><FontAwesomeIcon icon={faUtensils} size="3x" className="icon"/></NavLink>
              </NavItem>
              <br/>
              <NavItem>
                <NavLink smooth to="#appointment" activeClassName="selected"><FontAwesomeIcon icon={faCalendarCheck} size="3x" className="icon"/></NavLink>
              </NavItem>
              <br/>
              <NavItem>
                <NavLink smooth to="#diary" activeClassName="selected"><FontAwesomeIcon icon={faBook} size="3x" className="icon"/></NavLink>
              </NavItem>
              <br/>
              <NavItem>
                <NavLink smooth to="#misc" activeClassName="selected"><FontAwesomeIcon icon={faQuestion} size="3x" className="icon"/></NavLink>
              </NavItem>
              <br/>
              <NavItem>
                <NavLink smooth to="#" activeClassName="selected"><FontAwesomeIcon icon={faEnvelope} size="3x" className="icon"/></NavLink>
              </NavItem>
            </Nav>
          </div>
        </React.Fragment>

        )
    }
}

export default SideBar
