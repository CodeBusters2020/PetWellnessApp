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
    CardBody,
    Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import bestbuds from '../assets/bestbuds.jpg'

class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }

    render(){
        return(

        <React.Fragment>
            <Container className="main-container" fluid>
                <Row>
                    <Col className="block" md="5">
                        {/* <Card className="landing-card">
                            <img width="70%" src={ bestbuds } alt="two pups smiling" />
                             <CardBody> */}
                            <CardTitle className="blurb" align="center">
                                Do You Own a Pet?
                            </CardTitle>
                                <img width="70%" src={ bestbuds } alt="two pups smiling" />
                            <CardText>We know it can be an overwhelming responsibility taking care of your pet, especially if you want to offer the best care. We have an application that can assist the specific needs of all pet owners.</CardText>
                            <Button  size="lg" className="button1">
                                <a className="headerh1" href={ this.props.sign_up_route }> Sign Up </a>
                            </Button>
                            {/* </CardBody> */}
                        {/* </Card> */}
                    </Col>
                    <Col className="block block-right" md="5">
                        <AdoptAPet 
                        api_key={this.props.api_key}
                        />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
}
export default Landing
