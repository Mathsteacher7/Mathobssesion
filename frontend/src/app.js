import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import './styles.scss'


import ExercisesNew from './components/exercises/New'

import SubjectsIndex from './components/subjects/Index'
import NumberIndex from './components/subjects/Number'
import ExericesIndex from './components/exercises/Index'

import Home from './pages/home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


class App extends React.Component {


  render() {
    return (
      <HashRouter>

        <Navbar />

        <Switch>
          <Route path="/exercises/new" component={ExercisesNew} />
          <Route path="/subjects/number" component={NumberIndex} />

          <Route path="/subjects" component={SubjectsIndex} />
          <Route path="/exercises" component={ExericesIndex} />
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
