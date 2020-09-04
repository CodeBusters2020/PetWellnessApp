import React, { Component } from 'react'
import {
    Row,
    Container,
    Nav,
    NavItem,
    Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class SideBar extends Component{
    render(){
        return(
        <React.Fragment>

        <div className="wrapper">

               <nav id="sidebar">


                   <ul className="list-unstyled components">

                       <li className="active">
                        <a href="#general">General</a>
                       </li>
                       <li>
                           <a href="#">Medical</a>
                       </li>
                       <li>
                            <a href="#">Digestion</a>
                       </li>
                       <li>
                           <a href="#">Appointments</a>
                       </li>
                       <li>
                           <a href="#">Diary</a>
                       </li>
                       <li>
                           <a href="#">Miscellaneous</a>
                       </li>
                       <li>
                           <a href="#">Send Pet Info</a>
                       </li>
                   </ul>

               </nav>
               </div>
        </React.Fragment>

        )
    }
}

export default SideBar
