import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import {
    Card,
    CardTitle,
    Button,
} from 'reactstrap'
import { NavLink, Redirect } from 'react-router-dom'

class ShowPet extends Component{
    constructor(props){
        super(props)
        this.state = {
            // Is switched if delete button is pressed, rendering redirect to index
            isDeleted : false
            }
        }
        handleClick = () => {
          // Calls method from App.js, passing ID of current pet
            this.props.deletePet(this.props.pet.id);
            // Switches state variable
            this.setState( {isDeleted: true} );
            console.log("Pet deleted")
        }
    render(){
        let { pet } = this.props
        return(
            <React.Fragment>
                <h3> Show Pet </h3>
                    <Card body>
                        <CardTitle>
                        <h5>Name:</h5>
                        <p>{ pet.name }</p>
                        <h5>DOB:</h5><p>{ pet.dob }</p>
                        <h5>Breed:</h5><p>{ pet.breed }</p>
                        <h5>Sex:</h5><p>{ pet.sex }</p>
                        { !this.props.logged_in ?
                            <p>Login to see more options</p>
                            : this.props.current_user.id === pet.user_id &&
                                <>
                                <NavLink to = {`/editpet/${this.props.pet.id}`}>
                                    <Button>Edit Pet</Button>
                                </NavLink>

                                <Button onClick = {this.handleClick}>
                                    Delete Pet
                                </Button>
                                </>
                            }
                        <br/>
                        <h5>Medical:</h5>
                        <p>{ pet.medical }</p>
                        <br/>
                        <h5>Digestion:</h5>
                        <p>{ pet.digestion }</p>
                        <br/>
                        <h5>Appointment:</h5>
                        <p>{ pet.appointment }</p>
                        <br/>
                        <h5>Diary:</h5>
                        <p>{ pet.diary }</p>
                        <br/>
                        <h5>Miscellaneous:</h5>
                        <p>{ pet.misc }</p>
                        
                        {this.state.isDeleted && <Redirect to = "/mypets" />
                        }
                        </CardTitle>
                    </Card>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default ShowPet