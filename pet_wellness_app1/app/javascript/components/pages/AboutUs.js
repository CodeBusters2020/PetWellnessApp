import React, { Component } from 'react'

class AboutUs extends Component{

    
    render(){
        return(
            <React.Fragment>
                <h3> About Us </h3>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default AboutUs
