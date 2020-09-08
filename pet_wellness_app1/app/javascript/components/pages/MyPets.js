import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class MyPets extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <h3> View {this.props.user_name}'s Pets </h3>
                <Row id="cards">
        { this.props.myPets.map((myPet, index) => {
            return (
            <Col sm="4" key={ index }>
                <Card body>
                <CardTitle>
                    <h5>{ myPet.name }</h5>
                    <p>
                    <NavLink to={`/show/${myPet.id}`}>
                        <Button color="secondary">
                        Preview Pet Info
                        </Button>
                    </NavLink>
                    </p>

                    <p>
                    {/* <NavLink to={"send pet info hopefully!"}> */}
                        <Button color="secondary">
                        Send Pet Info
                        </Button>
                    {/* </NavLink> */}
                    </p>

                </CardTitle>
                </Card>
            </Col>
            )
        })}
    </Row>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default MyPets