import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AdoptAPet extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            information: {
                zipcode: "",
                radius: ""
            },
            pets: []
        }
    
    }

    handleChange = (e) =>{
        let newValues = this.state.information
        newValues[e.target.name] = e.target.value
        this.setState({information: newValues})

    }
    
    handleSubmit = () => {
      fetch().then(response => {
          if(response.status === 200){
              return(response.json())
          }
      }).then(petsArray => {
          this.setState({ pets: petsArray })
      }).catch(errors => {
          console.log("index errors", errors)
      })
    }
    
    
    
    render(){
        return (
            <>
            <Form>
            <h3>Adopt a Pet!</h3>
                <FormGroup>
                    <Label for="zipcode">Enter Zip Code</Label>
                    <Input 
                    type="string" 
                    name="zipcode" 
                    id="zipcode" 
                    placeholder="92156"
                    value={this.state.form.zipcode}
                    onChange = {this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="radius">Select Radius</Label>
                    <Input 
                    type="select"
                    name="radius"
                    id="radius"
                    value={this.state.form.radius}
                    onChange = {this.handleChange}
                    >
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>25</option>
                    <option>50</option>
                    </Input>
                </FormGroup>
                <Button onClick = {this.handleSubmit}
                >Search</Button>
            </Form>
            <Card className = "landing-cards" style={{ width: '18rem' }}>
            <img variant="top" src="" />
            <CardBody>
                <CardTitle>Pet Name</CardTitle>
                <CardText>
                Breed:
                <br/> 
                Age: 
                <br/>
                Sex: 
                <br/>
                </CardText>
                <Button variant="primary">See Details</Button>
            </CardBody>
            </Card>
            </>
        )
    }
}

export default AdoptAPet