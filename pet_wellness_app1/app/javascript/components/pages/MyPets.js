import React, { Component } from 'react'

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
                <h3> View My Pets </h3>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default MyPets