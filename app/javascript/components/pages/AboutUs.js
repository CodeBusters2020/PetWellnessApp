import React, { Component } from 'react'
import {Container, Col, Row} from 'reactstrap'
import ryan from '../assets/Ryan.jpg'
import selam from '../assets/Selam2.jpeg'
import erica from '../assets/Erica.png'
import jakob from '../assets/JakobAvatar.png'

class AboutUs extends Component{


    render(){
        return(
            <React.Fragment>
              <Container>
                <div className="about-us">
                <h3 className="pages-header"> About Us </h3>
                <p> Welcome to the Pet Wellness App! The creators of this application make a team of four full stack developers from LEARN Academy. Together we call ourselves, <strong>Code Busters</strong>! We are passionate about creating technologies that make life easier. Sharing that frame of mind, we have found a common mission in delivering an application that can serve as your personal pet assistant.</p>
                </div>
                <br/>
                <div className="index-container1">
                  <h3 className="pages-header" id="meet-team"> Meet The Team!</h3>
                  <br/>
                  <Row>
                    <Col xs="12" md={{size:6, offset:2}}>
                    <div className="roundPics">
                    <img  width="20%" src={ ryan } alt="Picture of Ryan"/>
                    <p>Hi, my name's Ryan Koch and I'm a web developer from Colorado. I love making nice, easy to use apps that brighten people's day!</p>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" md={{size:6, offset:2}}>
                    <div className="roundPics">
                    <img  width="20%" src={ selam } alt="Picture of Selam"/>
                    <p>Hi there, I'm Selam Habteab. I'm a web developer based in Oakland, Ca!</p>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" md={{size:6, offset:2}}>
                    <div className="roundPics">
                    <img  width="20%" src={ erica } alt="Picture of Ryan"/>
                    <p>Hi my name is Erica. I’m a student at LEARN academy where I’m learning to develop and build in the digital world using full-stack Ruby on Rails after designing and building in the real world as a civil engineer for 5 years.</p>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" md={{size:6, offset:2}}>
                    <div className="roundPics">
                    <img  width="20%" src={ jakob } alt="Picture of Ryan"/>
                    <p>Hey! My name is Jakob Bergeson. I'm a web developer from San Diego who is passionate about making efficient and beautiful code.</p>
                    </div>
                    </Col>
                  </Row>
                </div>
                </Container>
            </React.Fragment>
        )
    }
}
export default AboutUs
