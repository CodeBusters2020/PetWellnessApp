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
import generateAdoptAPet from '../utilities/generateAdoptAPet'

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
        return fetch("https://api.rescuegroups.org/http/v2.json", {
            body: JSON.stringify(generateAdoptAPet(this.state.information.zipcode, this.state.information.radius)),
            headers: { "Content-Type": "application/json" },
            method: "POST"
            }).then(response => {
            if(response.status === 200){
                return(response.json())
            } else {
                alert("Please check your form")
            }
            return response
            }).then(petResponse => {
                this.setState({ pets: petResponse["data"] })
                console.log(this.state.pets)
            })
            .catch(errors => {
            console.log("create errors", errors)
        })
    }



    render(){
        let {pets} = this.state
        console.log("pets inside render: ", pets)
        const petArray = Object.values(pets);
        console.log("petArray: ", petArray)
        let firstPet = petArray[0]
        console.log("firstPet: ", firstPet)
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
                    value={this.state.information.zipcode}
                    onChange = {this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="radius">Select Radius</Label>
                    <Input
                    type="select"
                    name="radius"
                    id="radius"
                    value={this.state.information.radius}
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
            { (pets.length !== 0) && 
                (petArray.map((value, index) => {
                    return (
                    
                        <Card key={ index } className = "landing-cards" style={{ width: '18rem' }}>
                        <img variant="top" src={value["animalThumbnailUrl"]}/>
                        <CardBody>
                            <CardTitle>{value["animalName"]}</CardTitle>
                            <CardText>
                                Species: {value["animalSpecies"]}
                                <br/>
                                Breed: {value["animalBreed"]}
                                <br/>
                                Sex: {value["animalSex"]}
                                <br/>
                                Birthday: {value["animalBirthdate"]}
                                <br/>
                                General Age: {value["animalGeneralAge"]}
                                <br/>
                                Description: {value["animalDescription"]}
                            </CardText>
                        </CardBody>
                        </Card>
                    )
                
                })
                )

                
            }
            </>
        )
    }
}

export default AdoptAPet
