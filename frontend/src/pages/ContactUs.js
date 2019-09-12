import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/Auth'



class ContactUs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formData: {
        title: '',
        email: '',
        content: ''
      }

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    axios.post(('/api/contactus/'), this.state.formData)
      .then(() => this.props.history.push('/subjects'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }
  //
  handleChange(e) {
    console.log(this.state)
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData })
  }


  render() {
    return (
      <section className="section">
        <div className="hero">
          <div className="column is-half is-offset-one-quarter">
            <div className="hero-body">
              <h2 className="subtitle">Please send us a message with any feedback, comments or questions by completing the form below, and someone will get back in touch with you as soon as possible.</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Full Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="name"
                      name="full_name"
                      placeholder="eg: Francisco Cohen"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="title"
                      name="title"
                      placeholder="eg: problem in ex. 2, Number"
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
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <input
                      className="textarea"
                      type="text"
                      name="content"
                      placeholder="eg: The answer is not an Integer and it is might be too difficult for this level"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button className="button">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>


    )
  }
}

export default ContactUs
