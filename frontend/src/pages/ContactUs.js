import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'



class ContactUs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post(('/api/contactus/'), this.state.formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      // .then(() => this.props.history.push('/subjects'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData })
  }



  render() {
    return (
      <section className='section'>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Full Name</label>
              <div className="control">
                <input
                  className="input"
                  type="name"
                  name="name"
                  placeholder="eg: MathsTeacher@ga.com"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="eg: MathsTeacher@ga.com"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>

        </div>
      </section>
    )
  }
}

export default ContactUs
