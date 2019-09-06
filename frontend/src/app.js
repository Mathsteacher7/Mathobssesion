import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './pages/home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'

import SubjectsIndex from './components/subjects/Index'
import ExercisesNew from './components/exercises/New'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

class App extends React.Component {


  render() {
    return (
      <HashRouter>

        <Navbar />
        <ToastContainer position="bottom-right" hideProgressBar={true} />

        <Switch>
          <SecureRoute path="/exercises/new" component={ExercisesNew} />
          <Route path="/subjects" component={SubjectsIndex} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>

      </HashRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
