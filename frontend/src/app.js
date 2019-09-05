import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bulma'

import ExercisesIndex from './components/exercises/index'
import Home from './pages/home'

class App extends React.Component {


  render() {
    return (
      <HashRouter>

        <Switch>
          <Route path="/exercises" component={ExercisesIndex} />

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
