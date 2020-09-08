import React, { Component } from 'react'
import PropTypes from "prop-types"
import Header from './components/Header'
import Footer from './components/Footer'
//import Landing from './pages/Landing'
import MyPets from './pages/MyPets'
import AddPet from './pages/AddPet'
import AboutUs from './pages/AboutUs'
import ShowPet from './pages/ShowPet'
import { Nav, NavItem } from 'reactstrap'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: []
      }
    }

    componentDidMount(){
      fetch("/pets")
      .then(response => {
          if(response.status === 200){
              return(response.json())
          }
      }).then(petsArray => {
          this.setState({ pets: petsArray })
      }).catch(errors => {
          console.log("index errors", errors)
      })
    }


  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      //passed in by index.html.erb (devise)
      current_user
    } = this.props
    console.log("logged_in", logged_in, current_user);
    return (
        <Router>
          <Header
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
          />
          <Switch>
            {/* <Route exact path="/"
            render={ (props) =>
              <Landing
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                sign_up_route={ sign_up_route }
              />
            }
            /> */}
            <Route
            path="/aboutus" component={ AboutUs }
            />

        { logged_in &&
            <Route
            path="/mypets"
            render={ (props) => {
              let user = current_user.id
              let myPets = this.state.pets.filter(pets => pets.user_id === user)
              return (
                <MyPets
                user_name={current_user.username}
                myPets={ myPets }
                />
              )
            }}
            />
          }

        { logged_in &&
            < Route path="/addpet" component={ AddPet } />
        }
        { logged_in &&
            <Route path="/showpet" component={ ShowPet } />
        }
        { logged_in &&
            <Route path="/editpet/:id"
            render={ (props) => {
            let userid = current_user.id 
            let pets = this.state.pets.filter(value => value.user_id === userid) 
            let id = props.match.params.id 
            let pet = pets.find(value => value.id === parseInt(id))
            return(
              <EditPet

              />)
          }
        }/>
      }

          </Switch>
        </Router>
    );
  }
}

export default App
