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
                radius: "5"
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
        if (this.state.information.zipcode== "") {alert("Zipcode must be entered!")}
        else {
            return fetch("https://api.rescuegroups.org/http/v2.json", {
                body: JSON.stringify(generateAdoptAPet(this.state.information.zipcode, this.state.information.radius, this.props.api_key)),
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
                    if (petResponse["data"].length === 0) {
                        this.setState({ pets: null })
                    } else {
                        this.setState({ pets: petResponse["data"] })
                    }
                })
                .catch(errors => {
                console.log("create errors", errors)
            })
        }

    }



    render(){
        let {pets} = this.state
        var petArray = []
        if (pets !== null) {petArray = Object.values(pets)}

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
            { pets == null && <p>No results found. Try a different zipcode/radius!</p>}

            { pets !== null && (pets.length !== 0) && 
                (petArray.map((value, index) => {
                    return (
                    
                        <Card key={ index } className = "landing-cards" style={{ padding: "10px" }}>
                        <img variant="top" src={value["animalThumbnailUrl"]} style={{ width: '200px', margin: "auto" }}/>
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
                                ZIP code: {value["animalLocation"]}
                                <br/>
                                General Age: {value["animalGeneralAge"]}
                                <br/>
                                Description: <div dangerouslySetInnerHTML={{ __html: value["animalDescription"]}} /> 
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
