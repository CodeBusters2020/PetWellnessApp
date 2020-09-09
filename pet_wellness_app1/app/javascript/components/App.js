import React, { Component } from 'react'
import PropTypes from "prop-types"
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import MyPets from './pages/MyPets'
import AddPet from './pages/AddPet'
import AboutUs from './pages/AboutUs'
import ShowPet from './pages/ShowPet'
import EditPet from './pages/EditPet'
import { Nav, NavItem } from 'reactstrap'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: []
    }
  }

    componentDidMount(){
      this.refreshPet()
    }

    
    refreshPet = () => {
      fetch("/pets")
      .then(response => {
          if(response.status === 200){
              return(response.json())
          } else {
            throw new Error(`Refresh Pet Failed. ${response.status}`)
          }
      }).then(petsArray => {
          this.setState({ pets: petsArray })
      }).catch(errors => {
          console.log("index errors", errors)
      })
    }

    createNewPet = (newPet) => {
      return fetch("/pets", {
        body: JSON.stringify(newPet),
        headers: { "Content-Type": "application/json" },
        method: "POST"
        }).then(response => {
        if(response.status === 200){
            this.refreshPet()
        } else {
            alert("Please check your form")
        }
        return response
        }).catch(errors => {
        console.log("create errors", errors)
    })
  }

    editPet = (editpet, id) => {
      return fetch(`../pets/${id}`, {
        body: JSON.stringify(editpet),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => {
        if (response.status === 200) {
          this.refreshPet()
        } else {
          alert ("Update Unsuccessful")
        }
        return response
      })
      .catch(errors => {
        console.log("edit errors", errors)
      })
    }

    deletePet = (id) => {
      return fetch (`../pets/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => {
        if(response.status === 200) {
          this.refreshPet()
        }
        return response
      })
      .catch(errors => {
        console.log("delete errors:", errors)
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
            <Route exact path="/"
            render={ (props) =>
              <Landing
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                sign_up_route={ sign_up_route }
              />
            }
            />
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
            < Route path="/addpet"
            render={ (props) =>
            <AddPet
            current_user={ current_user }
            createNewPet={ this.createNewPet }
            />
            }
            />
        }

        { logged_in &&
            <Route
            path={"/show/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let pet = this.state.pets.find(pet => pet.id === parseInt(id))
              return (
                <ShowPet
                logged_in={ logged_in }
                pet={ pet }
                current_user= { current_user }
                deletePet = { this.deletePet }
                />
              )
            }}
          />
        }
        { logged_in &&
            < Route 
            exact path={"/editpet/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let pet = this.state.pets.find(pet => pet.id === parseInt(id))
              console.log(id, pet)
              return (
                <EditPet 
                pet={ pet }
                current_user= { current_user }
                editPet={this.editPet } />
              )
            }} 
            />
        }

          </Switch>
        </Router>
    );
  }
}

export default App
