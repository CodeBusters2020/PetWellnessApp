import React, { Component } from 'react'
import { Button, Card, Container, CardImg, CardTitle, Col, Row } from 'reactstrap'
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
                <Container className="index-container">
                <h3 className="pages-header" align="center"> View {this.props.user_name}'s Pets </h3>
                <Row id="cards">
        { this.props.myPets.map((myPet, index) => {
            return (
            <Col sm="4" key={ index }>
                <Card body className="card-body">
                <CardImg />
                <CardTitle>
                    <h5>{ myPet.name }</h5>
                    <p>
                    <NavLink to={`/show/${myPet.id}`}>
                        <Button className="button1">
                        Preview Pet Info
                        </Button>
                    </NavLink>
                    </p>

                    <p>
                    {/* <NavLink to={"send pet info hopefully!"}> */}
                        <Button className="button2">
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
    </Container>
                { this.state.success && <Redirect to={ `/` }/> }
            
            </React.Fragment>
        )
    }
}
export default MyPets