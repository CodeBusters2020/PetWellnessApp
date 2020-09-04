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
    }

    createNewPet = (newPet) => {
      console.log(newPet)
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


            <Route
            path="/mypets" component={ MyPets }
            />


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
            <Route path="/showpet" component={ ShowPet } />
        }

          </Switch>
        </Router>
    );
  }
}

export default App
