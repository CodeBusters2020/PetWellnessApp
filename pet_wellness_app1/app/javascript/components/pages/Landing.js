import React, { Component } from 'react'
import Header from '../components/Header'
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label, 
  Input
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import fishpic from '../assets/fish.jpg'

class Landing extends Component{
    render(){
        return(
        <React.Fragment>
            <Container className="main-container" fluid>
                <Row>
                    <Col className="block" md="5">
                        <Card>
                            <img top width="100%" src={ fishpic } alt="Goldfish" />
                            <CardBody>
                            <CardTitle>Blurb</CardTitle>
                            <CardText>How many of you own a pet or know someone that owns a pet? We know it can be an overwhelming responsibility taking care of your pet, especially if you want to offer the best care. We have an application that can assist the specific needs of all pet owners.</CardText>
                            <Button>Sign Up</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="block" md="5">
                    <Form>
                        <FormGroup>
                            <Label for="zipcode">Enter Zip Code</Label>
                            <Input type="number" name="zipcode" id="zipcode" placeholder="92156" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="radius">Select Radius</Label>
                            <Input type="select" name="radius" id="radius">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>25</option>
                            <option>50</option>
                            </Input>
                        </FormGroup>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
}
export default Landing