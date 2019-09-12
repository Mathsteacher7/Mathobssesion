import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './pages/home'
import ContactUs from './pages/ContactUs'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SecureRoute from './components/common/SecureRoute'

import SubjectsIndex from './components/subjects/Index'
import NumberIndex from './components/subjects/Number'
import AlgebraIndex from './components/subjects/Algebra'
import RatioAndProportionIndex from './components/subjects/RatioandProportion'
import GeometryAndMeasuresIndex from './components/subjects/GeometryAndMeasures'
import ProbabilityIndex from './components/subjects/Probability'
import StatisticsIndex from './components/subjects/Statistics'
import ExericesIndex from './components/exercises/Index'
import ExercisesNew from './components/exercises/New'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ProfileShow from './components/users/ProfileShow'
import ProfileEdit from './components/users/ProfileEdit'

import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

class App extends React.Component {


  render() {
    return (
      <HashRouter>

        <Navbar />
        <ToastContainer position="bottom-right" hideProgressBar={true} />

        <Switch>

          <Route path="/subjects/number" component={NumberIndex} />
          <Route path="/subjects/algebra" component={AlgebraIndex} />
          <Route path="/subjects/Ratio and Proportion" component={RatioAndProportionIndex} />
          <Route path="/subjects/Geometry and Measures" component={GeometryAndMeasuresIndex} />
          <Route path="/subjects/Probability" component={ProbabilityIndex} />
          <Route path="/subjects/Statistics" component={StatisticsIndex} />

          <SecureRoute path="/exercises/new" component={ExercisesNew} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/subjects" component={SubjectsIndex} />
          <Route path="/exercises" component={ExericesIndex} />
          <Route path="/profile/edit" component={ProfileEdit} />
          <Route path="/profile" component={ProfileShow} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </HashRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
