import React, { Component } from 'react'

class AddPet extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }

    render(){
        return(
            <React.Fragment>
                <h3> Landing </h3>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default AddPet
