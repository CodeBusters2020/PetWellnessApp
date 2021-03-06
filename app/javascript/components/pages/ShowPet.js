import React, { Component} from 'react'
import SideBar from '../components/SideBar'
import DeleteModal from '../components/DeleteModal'
import {
    Card,
    CardTitle,
    Container,
    Button,
    Row, 
    Col
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

        const removeNewLineChar = (target) => {
            return pet[target].split('\n').map((item, i) => {
               return <p key={i}>{item}</p>
            })
         }      
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <SideBar />
                        </Col>
                    
                    <Col xs={6}>
                <h3 className="pages-header"> Show Pet </h3>
                    <Card body className="card-body1">
                        <CardTitle>
                        <section id = "general">
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
                                    <Button className="button1">Edit Pet</Button>
                                </NavLink>                           
                                <DeleteModal 
                                handleClick = {this.handleClick}
                                />
                            </>
                        }
                            </section>
                            
                        
                        <br/>
                        <section id = "medical">
                        <h5>Medical:</h5>
        
                        { removeNewLineChar("medical") }
                        </section>
                        <br/>
                        <section id = "digestion">
                        <h5>Digestion:</h5>
                        { removeNewLineChar("digestion") }
                        </section>
                        <br/>
                        <section id= "appointment">
                        <h5>Appointment:</h5>
                        { removeNewLineChar("appointment") }
                        </section>
                        <br/>
                        <section id="diary">
                        <h5>Diary:</h5>
                        { removeNewLineChar("diary") }
                        </section>
                        <br/>
                        <section id="misc">
                        <h5>Miscellaneous:</h5>
                        { removeNewLineChar("misc") }
                        </section>
                        {this.state.isDeleted && <Redirect to = "/mypets" />
                        }
                        </CardTitle>
                    </Card>
                    </Col>
                    
                    <Col>
                    </Col>
                    
                    </Row>
                    </Container>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default ShowPet
