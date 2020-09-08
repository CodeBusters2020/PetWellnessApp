import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button, Col } from 'reactstrap';
import {Redirect, NavLink} from 'react-router-dom'

class EditPet extends Component {
    constructor(props){
        super(props)
        this.state = {
            form : {
                name: this.props.pet.name,
                dob: this.props.pet.dob,
                sex: this.props.pet.sex,
                breed:  this.props.pet.breed,
                medical: this.props.pet.medical,
                digestion: this.props.pet.digestion,
                appointment: this.props.pet.appointment,
                diary: this.props.pet.diary,
                misc: this.props.pet.misc,
                user_id: this.props.current_user.id
            },
            success : false
        }
    }

    handleChange = (e) => {
        let {form} = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        let { name, dob, breed, sex } = this.state.form
        if(name == ""){
            alert("Name must be filled")
        } else if (dob == ""){
            alert("DOB must be filled")
        } else if (breed == ""){
            alert("Breed must be filled")
        } else if (sex == ""){
            alert("Sex must be selected")
        } else {
        this.props.editPet(this.state.form, this.props.pet.id)
        this.setState({ success: true })
        }
    }

    render() {
        return (
            <div>
                <Col>
            <h2>Edit Pet</h2>
            <Form>
                <section id = "general" className = "full-height" >
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                    type = "text"
                    name = "name"
                    placeholder="Required"
                    value = { this.state.form.name }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>DOB (Required)</Label>
                    <Input
                    type = "date"
                    name = "dob"
                    value = { this.state.form.dob }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Breed</Label>
                    <Input
                    type = "text"
                    name = "breed"
                    placeholder="Required"
                    value = { this.state.form.breed }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <Label>Sex (Required)</Label>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="sex"
                        value = "Male"
                        checked={this.state.form.sex === 'Male'}
                        onChange = { this.handleChange }/>
                        Male
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input
                        type="radio"
                        name="sex"
                        value = "Female"
                        checked={this.state.form.sex === 'Female'}
                        onChange = { this.handleChange }/>
                        Female
                    </Label>
                    </FormGroup>
                </FormGroup>
                </section>

                <section>
                    <FormGroup>
                    <Label>Medical</Label>
                    <Input
                    type = "text"
                    name = "medical"
                    placeholder="Optional"
                    value = { this.state.form.medical }
                    onChange = { this.handleChange }
                    />
                    </FormGroup>
                </section>

                <section>
                    <FormGroup>
                        <Label>Digestion</Label>
                        <Input
                        type = "text"
                        name = "digestion"
                        placeholder="Optional"
                        value = { this.state.form.digestion }
                        onChange = { this.handleChange }
                        />
                    </FormGroup>
                </section>

                <section>
                <FormGroup>
                    <Label>Appointment</Label>
                    <Input
                    type = "text"
                    name = "appointment"
                    placeholder="Optional"
                    value = { this.state.form.appointment }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                </section>

                <section>
                <FormGroup>
                    <Label>Diary</Label>
                    <Input
                    type = "text"
                    name = "diary"
                    placeholder="Optional"
                    value = { this.state.form.diary }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                </section>

                <section>

                    <FormGroup>
                    <Label>Miscellaneous</Label>
                    <Input
                    type = "text"
                    name = "misc"
                    placeholder="Optional"
                    value = { this.state.form.misc }
                    onChange = { this.handleChange }
                    />
                    </FormGroup>
                    <Button
                    name="submit"
                    color = "secondary"
                    onClick = {this.handleSubmit}
                    >
                    Save Pet
                    </Button>
                </section>
            </Form>

            </Col>
                { this.state.success && <Redirect to = {`/show/${this.props.pet.id}`} />}
            </div>
        )
    }
}

export default EditPet