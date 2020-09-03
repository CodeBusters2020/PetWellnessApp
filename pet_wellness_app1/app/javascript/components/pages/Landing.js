import React, { Component } from 'react'
import Header from '../components/Header'
import AdoptAPet from '../components/AdoptAPet'
import {
    Container,
    Col,
    Row,
    Card,
    CardTitle,
    CardText,
    CardBody
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import fishpic from '../assets/fish.jpg'

class Landing extends Component{

    render(){
        const {
        logged_in,
        sign_in_route,
        sign_out_route,
        current_user,
        sign_up_route
    } = this.props
        return(
        <React.Fragment>
            <Container className="main-container" fluid>
                <Row>
                    <Col className="block" md="5">
                        <Card>
                            <img width="100%" src={ fishpic } alt="Goldfish" />
                            <CardBody>
                            <CardTitle>Blurb</CardTitle>
                            <CardText>How many of you own a pet or know someone that owns a pet? We know it can be an overwhelming responsibility taking care of your pet, especially if you want to offer the best care. We have an application that can assist the specific needs of all pet owners.</CardText>
                            <a href={ sign_up_route }> Sign Up </a>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="block block-right" md="5">
                        <AdoptAPet />

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
}
export default Landing
