import React, { Component } from 'react'
import {
  Row,
  Container,
  Nav,
  NavItem,
  Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    toggleNavbar = () => {
        this.state.collapsed === true ?
        this.setState({ collapsed: false }) :
        this.setState({ collapsed: true })
    }
    render(){
        return (
        <React.Fragment>
            <Container className="hero" fluid>
            <Row className="hero-row">
            <Col md="6" className="header-lead">
                <Container fluid>
                <a href="/">
                    <h1 className="display-3">Pet Wellness App</h1>
                </a>
                    <p className="lead">Your place to find <i>your</i> own personal pet assistant.</p>
            </Container>
            </Col>
            <Col md="6" className="header-icons">
                <Nav fill={true}>
                <NavItem md="3" className="home-icon">
                    <NavLink to="/" className="home-link">Home</NavLink>
                </NavItem>
                { this.props.logged_in && 
                <>
                    <NavItem md="3" className="home-icon">
                    <NavLink to="/mypets" className="home-link">My Pets</NavLink>
                    </NavItem>
                    <NavItem md="3" className="home-icon">
                    <NavLink to="/addpet" className="home-link">Add a Pet</NavLink>
                    </NavItem>
                </>
                }
                <NavItem md="3" className="home-icon">
                    <NavLink to="/aboutus" className="home-link">About Us</NavLink>
                </NavItem>
                { this.props.logged_in &&
                <>
                <NavItem md="3" className="home-icon">
                    <a href={ this.props.sign_out_route } className="home-link">Sign Out</a>
                    </NavItem>
                </>
                }
                { !this.props.logged_in && 
                <NavItem md="3" className="home-icon">
                    <a href={ this.props.sign_in_route } className="home-link">Sign In</a>
                </NavItem>
                }
                </Nav>
            </Col>
            </Row>
        </Container>
        </React.Fragment>
        )
    }
}

export default Header