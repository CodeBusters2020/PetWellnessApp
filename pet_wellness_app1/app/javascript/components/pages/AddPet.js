import React, { Component, Fragment } from 'react'
import {Form, FormGroup, Input, Label, Button, Container} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import SideBar from '../components/SideBar'

class AddPet extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
              name: "",
              dob: "",
              breed: "",
              sex: "",
              medical: "",
              digestion: "",
              appointment: "",
              diary: "",
              misc: "",
              user_id: this.props.current_user.id
            },
            success: false
        }
    }

    handleChange = (e) => {
      let newValues = this.state.form
      newValues[e.target.name] = e.target.value
      this.setState({ form: newValues})
    }

    handleSubmit = () => {
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
      this.props.createNewPet(this.state.form)
      this.setState({ success: true })
      }
    }

    render(){
        return(
        <React.Fragment>
          <Container >
            <h2>Add A New Pet</h2>
            <Form>
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
          </Form>
        </Container>
        { this.state.success && <Redirect to = "/mypets" /> }
      </React.Fragment>
        )
    }
}
export default AddPet
