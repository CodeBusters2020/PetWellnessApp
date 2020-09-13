import React, { Component, Fragment } from 'react'
import {Form, FormGroup, Input, Label, Button, Container, Row, Col} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { NavHashLink as NavLink } from 'react-router-hash-link'

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
    } else if (sex !== "Male" && sex !== "Female"){
      alert("Sex must be selected")
    } else {
      this.props.createNewPet(this.state.form)
      this.setState({ success: true })

    }
  }

  render(){
      return(
      <React.Fragment>
        <Container>
          <Row>
          <Col>
            <SideBar />
          </Col>
          <Col>
            <h2 className="pages-header">Add A New Pet</h2>
          <Form>
            <section id = "general" >
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
                <NavLink smooth to="#medical" activeClassName="selected">
                  <Button name="submit" className="button1">
                    Next
                  </Button>
                </NavLink>
             </section>

             <section id = "medical" >
                <FormGroup>
                  <Label>Medical</Label>
                  <Input
                  style={{height: '80vh'}}
                  type = "textarea"
                  name = "medical"
                  placeholder={"(Optional)\nAllergies: pollen and peanut butter.\nVeterinarian: Doctor Smith.\nMedications: Bravecto.\nWeight: 30 pounds"}
                  value = { this.state.form.medical }
                  onChange = { this.handleChange }
                  />
                </FormGroup>
                <NavLink smooth to="#digestion" activeClassName="selected">
                  <Button name="submit" className="button1">
                    Next
                  </Button>
                </NavLink>
              </section>

              <section id = "digestion">
                <FormGroup>
                    <Label>Digestion</Label>
                    <Input
                    style={{height: '80vh'}}
                    type = "textarea"
                    name = "digestion"
                    placeholder={"(Optional)\nFeed: Blue Buffalo standard\nAmount: 1 cup twice a day\nFeeding time: 10 a.m and 7p.m.\nBM times: Usually right after breakfast."}
                    value = { this.state.form.digestion }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
               
                <NavLink smooth to="#appointment" activeClassName="selected">
                  <Button name="submit" className="button1">
                    Next
                  </Button>
                </NavLink>
                
              </section>

            <section id = "appointment">
              <FormGroup>
                  <Label>Appointment</Label>
                  <Input
                  style={{height: '80vh'}}
                  type = "textarea"
                  name = "appointment"
                  placeholder={"(Optional)\nGroomer: 12 p.m with Sarah at Petco in La Mesa"}
                  value = { this.state.form.appointment }
                  onChange = { this.handleChange }
                  />
              </FormGroup>
                  <NavLink smooth to="#diary" activeClassName="selected">
                  <Button name="submit" className="button1">
                    Next
                  </Button>
                </NavLink>
            </section>

            <section id = "diary">
              <FormGroup>
                  <Label>Diary</Label>
                  <Input
                  style={{height: '80vh'}}
                  type = "textarea"
                  name = "diary"
                  placeholder={"(Optional)\nKevin played fetch for 20 minutes today.\nKevin loves going to the dog park in Ocean Beach"}
                  value = { this.state.form.diary }
                  onChange = { this.handleChange }
                  />
              </FormGroup>
                  <NavLink smooth to="#misc" activeClassName="selected">
                  <Button name="submit" className="button1">
                    Next
                  </Button>
                </NavLink>
            </section>

              <section id = "misc">

                <FormGroup>
                  <Label>Miscellaneous</Label>
                  <Input
                  style={{height: '80vh'}}
                  type = "textarea"
                  name = "misc"
                  placeholder={"(Optional)\nKevin REALLY loves peanut butter so make sure to lock it away when you leave."}
                  value = { this.state.form.misc }
                  onChange = { this.handleChange }
                  />
                </FormGroup>
                <NavLink smooth to="#top-of-page" activeClassName="selected">
                  <Button name="submit" className="button1">
                    Back to Top
                  </Button>
                </NavLink>
                <Button
                name="submit"
                className="button1"
                onClick = {this.handleSubmit}
                >
                  Save Pet
                </Button>
            </section>
        </Form>

        </Col>
        </Row>
      </Container>
      { this.state.success && <Redirect to = "/mypets" /> }
    </React.Fragment>
      )
  }
}
export default AddPet
